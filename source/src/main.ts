const isIOS =
  /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

document.documentElement.dataset.litecadRuntime = isIOS ? 'ios-lite' : 'desktop'

const boot = isIOS ? import('./mobile') : import('./desktop')
boot.catch(error => {
  console.error('[LiteCAD] bootstrap failed', error)
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = '<div style="padding:32px;font-family:-apple-system;color:#ff8f86;background:#07111d;min-height:100vh">LiteCAD 启动失败，请重新载入页面。</div>'
  }
})
