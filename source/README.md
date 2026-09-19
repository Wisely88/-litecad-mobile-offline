# LiteCAD Mobile Offline

纯自用的 iPhone / iPad 离线 DWG / DXF 2D 查看器。

## 目标

- 首次通过 HTTPS 安装到 iPhone 主屏幕
- 安装完成后可在飞行模式打开本地 DWG / DXF
- 文件通过浏览器 File API 在本机读取，不上传图纸
- DXF 使用 MLightCAD 的 MIT 原生解析器
- DWG 使用 LibreDWG WebAssembly，并在独立 Web Worker 中解析
- iOS 默认使用主线程绘制以降低额外 Worker 带来的内存占用，并开启渐进渲染

## iPhone 使用

1. 用 Safari 打开 GitHub Pages 地址。
2. 等首页显示“离线引擎已缓存”。
3. Safari → 分享 → 添加到主屏幕。
4. 从主屏幕启动 LiteCAD。
5. 点击“选择 DWG / DXF”，从“文件”App 选图纸。
6. 打开成功一次后可开飞行模式验证离线使用。

不要从 iPhone“文件”App 直接点源码里的 index.html。PWA / Service Worker 需要 HTTPS 页面安装。

## GitHub Pages

仓库包含 .github/workflows/deploy-pages.yml。
首次使用请在仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。

## 技术栈

- Vue 3 + Vite
- @mlightcad/cad-viewer
- @mlightcad/data-model
- @mlightcad/libredwg-converter
- LibreDWG WebAssembly
- Service Worker / PWA

## iOS 内存边界

开源 LibreDWG WASM 的内存占用仍然较高。Web Worker 可以避免阻塞 UI，但不能消除 WebKit 的总内存限制。复杂或很大的 DWG 仍可能 OOM。当前目标优先验证约 15 MB、AC1021 的真实物流立库图。

## 隐私

GitHub Pages 只提供应用静态文件。你从“文件”App 选择的 DWG / DXF 不会上传到 GitHub Pages。

## License

应用壳代码可按 MIT 使用；DWG 路径包含 GPL 组件。再分发时请遵守 THIRD_PARTY-NOTICES.md 中列出的对应许可证义务。
