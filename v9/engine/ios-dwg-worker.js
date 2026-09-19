import { Dwg_File_Type, LibreDwg } from './libredwg-lowmem.js'

let engine = null
let dwg = null

const MAX_UNIQUE_SEGMENTS = 700000
const SEGMENT_CHUNK = 8192
const MAX_DEPTH = 12

let uniqueSegments = 0
let sourceEntities = 0
let instanceCount = 0
let skippedCount = 0
let truncated = false

function progress(stage, detail = '') {
  self.postMessage({ type: 'progress', stage, detail })
}

function fail(error) {
  const message = error instanceof Error ? error.message : String(error)
  self.postMessage({ ok: false, error: message })
}

function emptyBBox() {
  return { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
}

function bboxValid(b) {
  return b && [b.minX, b.minY, b.maxX, b.maxY].every(Number.isFinite) &&
    b.maxX >= b.minX && b.maxY >= b.minY
}

function expandBBox(b, x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return
  if (x < b.minX) b.minX = x
  if (x > b.maxX) b.maxX = x
  if (y < b.minY) b.minY = y
  if (y > b.maxY) b.maxY = y
}

function unionBBox(a, b) {
  if (!bboxValid(b)) return a
  if (!bboxValid(a)) return { ...b }
  a.minX = Math.min(a.minX, b.minX)
  a.minY = Math.min(a.minY, b.minY)
  a.maxX = Math.max(a.maxX, b.maxX)
  a.maxY = Math.max(a.maxY, b.maxY)
  return a
}

function transformBBox(b, m) {
  if (!bboxValid(b)) return emptyBBox()
  const pts = [
    apply(m, b.minX, b.minY),
    apply(m, b.maxX, b.minY),
    apply(m, b.maxX, b.maxY),
    apply(m, b.minX, b.maxY)
  ]
  const out = emptyBBox()
  for (const p of pts) expandBBox(out, p.x, p.y)
  return out
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

  return [
    cos * sx,
    sin * sx,
    -sin * sy,
    cos * sy,
    px + cos * sx * ox - sin * sy * oy,
    py + sin * sx * ox + cos * sy * oy
  ]
}

class SegmentBuilder {
  constructor() {
    this.chunks = []
    this.buf = new Float32Array(SEGMENT_CHUNK * 4)
    this.index = 0
    this.bbox = emptyBBox()
    this.count = 0
  }

  flush() {
    if (!this.index) return
    this.chunks.push(this.buf.slice(0, this.index))
    this.buf = new Float32Array(SEGMENT_CHUNK * 4)
    this.index = 0
  }

  add(x1, y1, x2, y2) {
    if (truncated) return
    if (uniqueSegments >= MAX_UNIQUE_SEGMENTS) {
      truncated = true
      return
    }
    if (![x1, y1, x2, y2].every(Number.isFinite)) return

    if (this.index + 4 > this.buf.length) this.flush()
    this.buf[this.index++] = x1
    this.buf[this.index++] = y1
    this.buf[this.index++] = x2
    this.buf[this.index++] = y2
    this.count++
    uniqueSegments++

    expandBBox(this.bbox, x1, y1)
    expandBBox(this.bbox, x2, y2)
  }

  finish() {
    this.flush()
  }
}

function addPolyline(builder, points, closed = false) {
  if (!Array.isArray(points) || points.length < 2) return
  for (let i = 1; i < points.length && !truncated; i++) {
    const a = points[i - 1]
    const b = points[i]
    builder.add(a.x, a.y, b.x, b.y)
  }
  if (closed && points.length > 2 && !truncated) {
    const a = points[points.length - 1]
    const b = points[0]
    builder.add(a.x, a.y, b.x, b.y)
  }
}

function addArc(builder, cx, cy, radius, start, end, minSteps = 5, maxSteps = 24) {
  if (![cx, cy, radius, start, end].every(Number.isFinite) || radius <= 0) return
  let sweep = end - start
  while (sweep <= 0) sweep += Math.PI * 2
  if (sweep > Math.PI * 2) sweep = Math.PI * 2

  const steps = Math.max(
    minSteps,
    Math.min(maxSteps, Math.ceil((sweep / (Math.PI * 2)) * 24))
  )

  let px = cx + Math.cos(start) * radius
  let py = cy + Math.sin(start) * radius

  for (let i = 1; i <= steps && !truncated; i++) {
    const t = start + (sweep * i) / steps
    const x = cx + Math.cos(t) * radius
    const y = cy + Math.sin(t) * radius
    builder.add(px, py, x, y)
    px = x
    py = y
  }
}

function addEllipse(builder, entity) {
  const c = entity.center
  const major = entity.majorAxisEndPoint
  if (!c || !major) return

  const a = Math.hypot(major.x || 0, major.y || 0)
  if (!(a > 0)) return

  const ratio = Number.isFinite(entity.axisRatio) ? entity.axisRatio : 1
  const b = a * ratio
  const rot = Math.atan2(major.y || 0, major.x || 0)
  const start = Number.isFinite(entity.startAngle) ? entity.startAngle : 0
  const end = Number.isFinite(entity.endAngle) ? entity.endAngle : Math.PI * 2
  let sweep = end - start
  while (sweep <= 0) sweep += Math.PI * 2

  const steps = Math.max(10, Math.min(28, Math.ceil((sweep / (Math.PI * 2)) * 28)))
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
    builder.add(prev.x, prev.y, p.x, p.y)
    prev = p
  }
}

function addInsert(groups, entity, blockMap) {
  if (!entity?.name) {
    skippedCount++
    return
  }
  const block = blockMap.get(entity.name)
  if (!block) {
    skippedCount++
    return
  }

  let group = groups.get(entity.name)
  if (!group) {
    group = []
    groups.set(entity.name, group)
  }

  const rows = Math.max(1, Math.min(100, entity.rowCount || 1))
  const cols = Math.max(1, Math.min(100, entity.columnCount || 1))

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      group.push(...insertMatrix(entity, block, row, col))
      instanceCount++
    }
  }
}

function buildDef(entities, blockMap) {
  const builder = new SegmentBuilder()
  const insertGroups = new Map()

  for (const entity of entities || []) {
    if (truncated) break
    if (!entity) continue
    sourceEntities++

    switch (entity.type) {
      case 'LINE':
        if (entity.startPoint && entity.endPoint) {
          builder.add(
            entity.startPoint.x,
            entity.startPoint.y,
            entity.endPoint.x,
            entity.endPoint.y
          )
        }
        break

      case 'LWPOLYLINE':
        addPolyline(builder, entity.vertices || [], !!(entity.flag & 512))
        break

      case 'POLYLINE2D':
      case 'POLYLINE3D':
        addPolyline(builder, entity.vertices || [], !!(entity.flag & 1))
        break

      case 'CIRCLE':
        if (entity.center) {
          addArc(builder, entity.center.x, entity.center.y, entity.radius, 0, Math.PI * 2, 16, 24)
        }
        break

      case 'ARC':
        if (entity.center) {
          addArc(builder, entity.center.x, entity.center.y, entity.radius, entity.startAngle, entity.endAngle)
        }
        break

      case 'ELLIPSE':
        addEllipse(builder, entity)
        break

      case 'SPLINE': {
        const pts =
          Array.isArray(entity.fitPoints) && entity.fitPoints.length > 1
            ? entity.fitPoints
            : entity.controlPoints
        addPolyline(builder, pts || [], false)
        break
      }

      case 'POINT':
        if (entity.position) {
          const s = 1
          builder.add(entity.position.x - s, entity.position.y, entity.position.x + s, entity.position.y)
          builder.add(entity.position.x, entity.position.y - s, entity.position.x, entity.position.y + s)
        }
        break

      case 'INSERT':
        addInsert(insertGroups, entity, blockMap)
        break

      default:
        skippedCount++
        break
    }
  }

  builder.finish()

  const groups = []
  for (const [name, values] of insertGroups.entries()) {
    groups.push({ name, matrices: new Float32Array(values) })
  }

  return {
    chunks: builder.chunks,
    geometryBBox: builder.bbox,
    bbox: null,
    groups
  }
}

function computeDefBBox(name, defs, stack = new Set(), depth = 0) {
  const def = defs.get(name)
  if (!def) return emptyBBox()
  if (bboxValid(def.bbox)) return def.bbox
  if (depth >= MAX_DEPTH || stack.has(name)) return def.geometryBBox

  const next = new Set(stack)
  next.add(name)
  let out = bboxValid(def.geometryBBox) ? { ...def.geometryBBox } : emptyBBox()

  for (const group of def.groups) {
    const childBBox = computeDefBBox(group.name, defs, next, depth + 1)
    if (!bboxValid(childBBox)) continue
    const m = group.matrices
    for (let i = 0; i + 5 < m.length; i += 6) {
      unionBBox(out, transformBBox(childBBox, [
        m[i], m[i + 1], m[i + 2], m[i + 3], m[i + 4], m[i + 5]
      ]))
    }
  }

  def.bbox = out
  return out
}

function quantile(values, q) {
  if (!values.length) return NaN
  const sorted = [...values].sort((a, b) => a - b)
  const pos = (sorted.length - 1) * q
  const lo = Math.floor(pos)
  const hi = Math.ceil(pos)
  if (lo === hi) return sorted[lo]
  return sorted[lo] * (hi - pos) + sorted[hi] * (pos - lo)
}

function robustBBox(root, defs, full) {
  const points = []
  let seen = 0
  const maxSamples = 3000

  for (const chunk of root.chunks) {
    const totalSegments = chunk.length / 4
    const stride = Math.max(1, Math.ceil(totalSegments / 300))
    for (let i = 0; i + 3 < chunk.length; i += 4 * stride) {
      points.push({ x: chunk[i], y: chunk[i + 1] })
      points.push({ x: chunk[i + 2], y: chunk[i + 3] })
      seen += 2
      if (seen >= maxSamples) break
    }
    if (seen >= maxSamples) break
  }

  for (const group of root.groups) {
    const child = defs.get(group.name)
    if (!child || !bboxValid(child.bbox)) continue
    const m = group.matrices
    const step = Math.max(6, Math.ceil(m.length / (6 * 500)) * 6)

    for (let i = 0; i + 5 < m.length; i += step) {
      const t = transformBBox(child.bbox, [
        m[i], m[i + 1], m[i + 2], m[i + 3], m[i + 4], m[i + 5]
      ])
      if (!bboxValid(t)) continue
      points.push(
        { x: t.minX, y: t.minY },
        { x: t.maxX, y: t.minY },
        { x: t.maxX, y: t.maxY },
        { x: t.minX, y: t.maxY }
      )
      if (points.length >= 5000) break
    }
    if (points.length >= 5000) break
  }

  if (points.length < 8) return full

  const xs = points.map(p => p.x)
  const ys = points.map(p => p.y)
  const q1x = quantile(xs, 0.25)
  const q3x = quantile(xs, 0.75)
  const q1y = quantile(ys, 0.25)
  const q3y = quantile(ys, 0.75)
  const iqrX = Math.max(1e-9, q3x - q1x)
  const iqrY = Math.max(1e-9, q3y - q1y)
  const loX = q1x - iqrX * 3
  const hiX = q3x + iqrX * 3
  const loY = q1y - iqrY * 3
  const hiY = q3y + iqrY * 3

  const out = emptyBBox()
  let kept = 0
  for (const p of points) {
    if (p.x < loX || p.x > hiX || p.y < loY || p.y > hiY) continue
    expandBBox(out, p.x, p.y)
    kept++
  }

  if (kept < Math.max(6, points.length * 0.45) || !bboxValid(out)) return full

  const w = Math.max(1e-9, out.maxX - out.minX)
  const h = Math.max(1e-9, out.maxY - out.minY)
  const padX = w * 0.025
  const padY = h * 0.025
  out.minX -= padX
  out.maxX += padX
  out.minY -= padY
  out.maxY += padY
  return out
}

function sendDef(type, name, def) {
  const buffers = def.chunks.map(chunk => chunk.buffer)
  const groups = def.groups.map(group => ({
    name: group.name,
    matrices: group.matrices.buffer
  }))

  const transfer = [
    ...buffers,
    ...def.groups.map(group => group.matrices.buffer)
  ]

  self.postMessage({
    type,
    name,
    chunks: buffers,
    groups,
    bbox: def.bbox || def.geometryBBox
  }, transfer)
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

    const blockEntries = database?.tables?.BLOCK_RECORD?.entries || []
    const blockMap = new Map()
    for (const block of blockEntries) {
      if (block?.name) blockMap.set(block.name, block)
    }

    progress('definitions', blockEntries.length + ' 个块定义')
    const defs = new Map()

    for (let i = 0; i < blockEntries.length; i++) {
      const block = blockEntries[i]
      if (!block?.name) continue
      defs.set(block.name, buildDef(block.entities || [], blockMap))
      if (i % 250 === 0) {
        progress(
          'definitions',
          (i + 1) + '/' + blockEntries.length +
            ' 块 · ' + uniqueSegments.toLocaleString() + ' 基础线段'
        )
      }
      if (truncated) break
    }

    for (const name of defs.keys()) {
      computeDefBBox(name, defs)
    }

    const root = buildDef(database?.entities || [], blockMap)
    root.bbox = bboxValid(root.geometryBBox) ? { ...root.geometryBBox } : emptyBBox()

    for (const group of root.groups) {
      const child = defs.get(group.name)
      if (!child || !bboxValid(child.bbox)) continue
      const m = group.matrices
      for (let i = 0; i + 5 < m.length; i += 6) {
        unionBBox(root.bbox, transformBBox(child.bbox, [
          m[i], m[i + 1], m[i + 2], m[i + 3], m[i + 4], m[i + 5]
        ]))
      }
    }

    if (!bboxValid(root.bbox)) {
      throw new Error('DWG 已解析，但没有提取到可显示的 2D 几何。')
    }

    const mainBBox = robustBBox(root, defs, root.bbox)
    progress(
      'scene-ready',
      uniqueSegments.toLocaleString() + ' 基础线段 · ' +
        instanceCount.toLocaleString() + ' 个块实例'
    )

    for (const [name, def] of defs.entries()) {
      sendDef('block', name, def)
    }
    sendDef('model', '', root)

    self.postMessage({
      type: 'done',
      ok: true,
      fullBBox: root.bbox,
      mainBBox,
      uniqueSegments,
      instances: instanceCount,
      entities: sourceEntities,
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
