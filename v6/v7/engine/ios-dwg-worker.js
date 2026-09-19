import { Dwg_File_Type, LibreDwg } from './libredwg-lowmem.js'

let engine = null
let dwg = null

const MAX_SEGMENTS = 1500000
const BATCH_SEGMENTS = 12000
const MAX_DEPTH = 12

let segmentBuffer = new Float32Array(BATCH_SEGMENTS * 4)
let segmentIndex = 0
let segmentCount = 0
let entityCount = 0
let skippedCount = 0
let truncated = false

let minX = Infinity
let minY = Infinity
let maxX = -Infinity
let maxY = -Infinity

const identity = [1, 0, 0, 1, 0, 0]

function progress(stage, detail = '') {
  self.postMessage({ type: 'progress', stage, detail })
}

function fail(error) {
  const message = error instanceof Error ? error.message : String(error)
  self.postMessage({ ok: false, error: message })
}

function apply(m, x, y) {
  return {
    x: m[0] * x + m[2] * y + m[4],
    y: m[1] * x + m[3] * y + m[5]
  }
}

function multiply(a, b) {
  return [
    a[0] * b[0] + a[2] * b[1],
    a[1] * b[0] + a[3] * b[1],
    a[0] * b[2] + a[2] * b[3],
    a[1] * b[2] + a[3] * b[3],
    a[0] * b[4] + a[2] * b[5] + a[4],
    a[1] * b[4] + a[3] * b[5] + a[5]
  ]
}

function insertMatrix(entity, block, row = 0, col = 0) {
  const sx = Number.isFinite(entity.xScale) ? entity.xScale : 1
  const sy = Number.isFinite(entity.yScale) ? entity.yScale : 1
  const angle = Number.isFinite(entity.rotation) ? entity.rotation : 0
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const px = entity.insertionPoint?.x || 0
  const py = entity.insertionPoint?.y || 0
  const bx = block?.basePoint?.x || 0
  const by = block?.basePoint?.y || 0
  const ox = col * (entity.columnSpacing || 0) - bx
  const oy = row * (entity.rowSpacing || 0) - by

  // T(insertion) * R(rotation) * S(scale) * T(arrayOffset - blockBase)
  return [
    cos * sx,
    sin * sx,
    -sin * sy,
    cos * sy,
    px + cos * sx * ox - sin * sy * oy,
    py + sin * sx * ox + cos * sy * oy
  ]
}

function expand(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return
  if (x < minX) minX = x
  if (x > maxX) maxX = x
  if (y < minY) minY = y
  if (y > maxY) maxY = y
}

function flushSegments() {
  if (segmentIndex === 0) return
  const out = segmentBuffer.slice(0, segmentIndex)
  self.postMessage(
    { type: 'segments', buffer: out.buffer, segments: segmentIndex / 4 },
    [out.buffer]
  )
  segmentIndex = 0
}

function addSegment(m, x1, y1, x2, y2) {
  if (truncated) return
  if (segmentCount >= MAX_SEGMENTS) {
    truncated = true
    return
  }

  const a = apply(m, x1, y1)
  const b = apply(m, x2, y2)
  if (![a.x, a.y, b.x, b.y].every(Number.isFinite)) return

  expand(a.x, a.y)
  expand(b.x, b.y)

  if (segmentIndex + 4 > segmentBuffer.length) flushSegments()
  segmentBuffer[segmentIndex++] = a.x
  segmentBuffer[segmentIndex++] = a.y
  segmentBuffer[segmentIndex++] = b.x
  segmentBuffer[segmentIndex++] = b.y
  segmentCount++
}

function addPolyline(m, points, closed = false) {
  if (!Array.isArray(points) || points.length < 2) return
  for (let i = 1; i < points.length && !truncated; i++) {
    const a = points[i - 1]
    const b = points[i]
    addSegment(m, a.x, a.y, b.x, b.y)
  }
  if (closed && points.length > 2 && !truncated) {
    const a = points[points.length - 1]
    const b = points[0]
    addSegment(m, a.x, a.y, b.x, b.y)
  }
}

function addArc(m, cx, cy, radius, start, end, minSteps = 6, maxSteps = 32) {
  if (![cx, cy, radius, start, end].every(Number.isFinite) || radius <= 0) return
  let sweep = end - start
  while (sweep <= 0) sweep += Math.PI * 2
  if (sweep > Math.PI * 2) sweep = Math.PI * 2
  const steps = Math.max(minSteps, Math.min(maxSteps, Math.ceil((sweep / (Math.PI * 2)) * 32)))
  let px = cx + Math.cos(start) * radius
  let py = cy + Math.sin(start) * radius
  for (let i = 1; i <= steps && !truncated; i++) {
    const t = start + (sweep * i) / steps
    const x = cx + Math.cos(t) * radius
    const y = cy + Math.sin(t) * radius
    addSegment(m, px, py, x, y)
    px = x
    py = y
  }
}

function addEllipse(m, entity) {
  const c = entity.center
  const major = entity.majorAxisEndPoint
  if (!c || !major) return
  const a = Math.hypot(major.x || 0, major.y || 0)
  if (!(a > 0)) return
  const ratio = Number.isFinite(entity.axisRatio) ? entity.axisRatio : 1
  const b = a * ratio
  const rot = Math.atan2(major.y || 0, major.x || 0)
  const start = Number.isFinite(entity.startAngle) ? entity.startAngle : 0
  let end = Number.isFinite(entity.endAngle) ? entity.endAngle : Math.PI * 2
  let sweep = end - start
  while (sweep <= 0) sweep += Math.PI * 2
  const steps = Math.max(12, Math.min(40, Math.ceil((sweep / (Math.PI * 2)) * 40)))

  const point = t => {
    const ex = a * Math.cos(t)
    const ey = b * Math.sin(t)
    return {
      x: c.x + ex * Math.cos(rot) - ey * Math.sin(rot),
      y: c.y + ex * Math.sin(rot) + ey * Math.cos(rot)
    }
  }

  let prev = point(start)
  for (let i = 1; i <= steps && !truncated; i++) {
    const p = point(start + (sweep * i) / steps)
    addSegment(m, prev.x, prev.y, p.x, p.y)
    prev = p
  }
}

function walkEntity(entity, m, blockMap, depth, stack) {
  if (!entity || truncated) return
  entityCount++

  if (entityCount % 10000 === 0) {
    progress('geometry', entityCount + ' 个实体 · ' + segmentCount + ' 条线段')
  }

  switch (entity.type) {
    case 'LINE':
      if (entity.startPoint && entity.endPoint) {
        addSegment(m, entity.startPoint.x, entity.startPoint.y, entity.endPoint.x, entity.endPoint.y)
      }
      break

    case 'LWPOLYLINE':
      addPolyline(m, entity.vertices || [], !!(entity.flag & 512))
      break

    case 'POLYLINE2D':
    case 'POLYLINE3D':
      addPolyline(m, entity.vertices || [], !!(entity.flag & 1))
      break

    case 'CIRCLE':
      if (entity.center) {
        addArc(m, entity.center.x, entity.center.y, entity.radius, 0, Math.PI * 2, 24, 32)
      }
      break

    case 'ARC':
      if (entity.center) {
        addArc(m, entity.center.x, entity.center.y, entity.radius, entity.startAngle, entity.endAngle)
      }
      break

    case 'ELLIPSE':
      addEllipse(m, entity)
      break

    case 'SPLINE': {
      const pts =
        Array.isArray(entity.fitPoints) && entity.fitPoints.length > 1
          ? entity.fitPoints
          : entity.controlPoints
      addPolyline(m, pts || [], false)
      break
    }

    case 'POINT':
      if (entity.position) {
        const s = 1
        addSegment(m, entity.position.x - s, entity.position.y, entity.position.x + s, entity.position.y)
        addSegment(m, entity.position.x, entity.position.y - s, entity.position.x, entity.position.y + s)
      }
      break

    case 'INSERT': {
      if (depth >= MAX_DEPTH || !entity.name || stack.has(entity.name)) {
        skippedCount++
        break
      }
      const block = blockMap.get(entity.name)
      if (!block || !Array.isArray(block.entities)) {
        skippedCount++
        break
      }

      const rows = Math.max(1, Math.min(50, entity.rowCount || 1))
      const cols = Math.max(1, Math.min(50, entity.columnCount || 1))
      const nextStack = new Set(stack)
      nextStack.add(entity.name)

      for (let row = 0; row < rows && !truncated; row++) {
        for (let col = 0; col < cols && !truncated; col++) {
          const child = multiply(m, insertMatrix(entity, block, row, col))
          for (const item of block.entities) {
            walkEntity(item, child, blockMap, depth + 1, nextStack)
            if (truncated) break
          }
        }
      }
      break
    }

    // Heavy fill/annotation/proxy types are deliberately skipped in the
    // low-memory geometry preview. The goal is to make large DWGs viewable.
    default:
      skippedCount++
      break
  }
}

self.onmessage = async event => {
  const buffer = event.data?.buffer
  if (!(buffer instanceof ArrayBuffer)) {
    fail('没有收到有效的 DWG 数据。')
    self.close()
    return
  }

  try {
    progress('worker-start')
    const base = new URL('./', import.meta.url).href.replace(/\/$/, '')

    progress('engine-loading')
    engine = await LibreDwg.create(base)
    progress('engine-ready')

    dwg = engine.dwg_read_data(buffer, Dwg_File_Type.DWG)
    if (!dwg) throw new Error('LibreDWG 无法读取这个 DWG。')
    progress('dwg-read')

    const database = engine.convert(dwg)

    engine.dwg_free(dwg)
    dwg = null
    progress('converted')

    const blockMap = new Map()
    const blocks = database?.tables?.BLOCK_RECORD?.entries || []
    for (const block of blocks) {
      if (block?.name) blockMap.set(block.name, block)
    }

    const entities = Array.isArray(database?.entities) ? database.entities : []
    progress('geometry-scan', entities.length + ' 个模型空间实体')

    for (const entity of entities) {
      walkEntity(entity, identity, blockMap, 0, new Set())
      if (truncated) break
    }
    flushSegments()

    if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
      throw new Error('DWG 已解析，但没有提取到可显示的 2D 几何。')
    }

    self.postMessage({
      type: 'done',
      ok: true,
      bbox: { minX, minY, maxX, maxY },
      segments: segmentCount,
      entities: entityCount,
      skipped: skippedCount,
      truncated
    })
  } catch (error) {
    fail(error)
  } finally {
    if (dwg && engine) {
      try { engine.dwg_free(dwg) } catch {}
    }
    dwg = null
    engine = null
    setTimeout(() => self.close(), 0)
  }
}
