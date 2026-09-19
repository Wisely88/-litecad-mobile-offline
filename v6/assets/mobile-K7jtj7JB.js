const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mobileDxf-B4vOnKLR.js","./cad-viewer-QmNE3w9S.js","./index-CxXm9SpT.js","./cad-viewer-C8-8uxd1.css"])))=>i.map(i=>d[i]);
import{_ as R}from"./index-CxXm9SpT.js";const b=document.getElementById("app");if(!b)throw new Error("#app not found");b.innerHTML=`
  <main class="m-shell">
    <section id="home" class="m-home">
      <div class="m-brand">
        <div class="m-logo">⌗</div>
        <div>
          <h1>LiteCAD</h1>
          <p>DWG / DXF · iPhone 离线查看</p>
        </div>
      </div>

      <div id="statusCard" class="m-status checking">
        <span class="m-dot"></span>
        <div>
          <strong id="statusTitle">正在准备离线引擎…</strong>
          <p id="statusText">首次会缓存低内存 DWG 引擎，之后可断网使用。</p>
        </div>
      </div>

      <div class="m-open-card">
        <div class="m-file-icon">▱</div>
        <h2>打开本地图纸</h2>
        <p>文件只在手机本机处理，不上传。</p>
        <input id="fileInput" type="file" hidden />
        <button id="openBtn" class="m-primary">选择 DWG / DXF</button>
        <div class="m-badges">
          <span>DWG 低内存</span>
          <span>DXF</span>
          <span>离线</span>
        </div>
      </div>

      <div id="homeError" class="m-error" hidden></div>

      <div class="m-tips">
        <strong>iPhone 专用轻量启动</strong>
        <p>首页不再加载完整 CAD Viewer。DWG 只启动低内存 Worker；DXF 只有在你选择后才按需加载完整 Viewer。</p>
      </div>
    </section>

    <section id="viewer" class="m-viewer" hidden>
      <header class="m-viewer-bar">
        <button id="backBtn" class="m-back">‹ 换图</button>
        <div id="fileName" class="m-file-name"></div>
        <div id="zoomBar" class="m-zoom">
          <button id="zoomOut">−</button>
          <span id="zoomValue">100%</span>
          <button id="zoomIn">＋</button>
          <button id="fitBtn">适应</button>
        </div>
      </header>

      <div id="stage" class="m-stage">
        <div id="message" class="m-message">
          <div class="m-spinner"></div>
          <strong id="messageTitle">正在准备…</strong>
          <p id="messageText"></p>
        </div>
        <img id="svgImage" class="m-svg" hidden alt="DWG drawing" />
        <div id="dxfMount" class="m-dxf-mount" hidden></div>
      </div>
    </section>
  </main>
`;const k=document.getElementById("home"),I=document.getElementById("viewer"),v=document.getElementById("fileInput"),T=document.getElementById("openBtn"),C=document.getElementById("backBtn"),U=document.getElementById("fileName"),B=document.getElementById("homeError"),S=document.getElementById("statusCard"),z=document.getElementById("statusTitle"),M=document.getElementById("statusText"),l=document.getElementById("message"),V=document.getElementById("messageTitle"),F=document.getElementById("messageText"),m=document.getElementById("svgImage"),f=document.getElementById("dxfMount"),W=document.getElementById("zoomBar"),E=document.getElementById("zoomOut"),x=document.getElementById("zoomIn"),O=document.getElementById("fitBtn"),j=document.getElementById("zoomValue");let a=null,h=null,u="",i=1,w=null;function p(e){S.className="m-status "+e;const t={checking:["正在准备离线引擎…","首次会缓存低内存 DWG 引擎，之后可断网使用。"],ready:["离线引擎已缓存","现在可以断开 Wi‑Fi / 蜂窝网络后打开本地 DWG / DXF。"],failed:["离线缓存尚未完成","保持联网并重新打开一次，等缓存完成后再离线。"],unsupported:["当前浏览器不支持离线安装","请使用 Safari，并从“分享”添加到主屏幕。"]};z.textContent=t[e][0],M.textContent=t[e][1]}function D(e){B.textContent=e,B.hidden=!e}function s(e,t="",o=!1){l.hidden=!1,l.classList.toggle("error",o);const n=l.querySelector(".m-spinner");n&&(n.hidden=o),V.textContent=e,F.textContent=t,m.hidden=!0,f.hidden=!0}function L(e){k.hidden=!0,I.hidden=!1,U.textContent=e}function c(){h!=null&&(clearTimeout(h),h=null),a&&(a.terminate(),a=null)}function G(){if(c(),u&&(URL.revokeObjectURL(u),u=""),w){try{w()}catch{}w=null}m.removeAttribute("src"),m.hidden=!0,f.innerHTML="",f.hidden=!0,l.hidden=!1,i=1,g()}function A(){G(),I.hidden=!0,k.hidden=!1,v.value=""}function g(){j.textContent=Math.round(i*100)+"%",m.style.width=i*100+"%",E.disabled=i<=.5,x.disabled=i>=4}function X(e){return{"worker-start":"正在启动低内存 Worker…","engine-loading":"正在加载 LibreDWG 引擎…","engine-ready":"引擎已就绪，正在读取 DWG…","dwg-read":"DWG 已读取，正在解析实体…",converted:"实体解析完成，正在生成 SVG…"}[e]||"正在解析 DWG…"}async function _(e){L(e.name),W.hidden=!1,s("正在启动低内存模式…","解析在独立 Worker 中完成，主线程不会加载完整 CAD 数据库。");try{const t=await e.arrayBuffer();a=new Worker("./assets/ios/ios-dwg-worker.js",{type:"module"}),a.onmessage=o=>{const n=o.data||{};if(n.type==="progress"){s(X(String(n.stage||"")),n.detail?String(n.detail):"");return}if(n.ok&&typeof n.svg=="string"&&n.svg.length>0){u=URL.createObjectURL(new Blob([n.svg],{type:"image/svg+xml"})),m.src=u,m.hidden=!1,l.hidden=!0,i=1,g(),c();return}s("DWG 解析失败",String(n.error||"低内存 Worker 返回失败。"),!0),c()},a.onerror=o=>{const n=[o.message||"DWG Worker 异常退出。",o.filename?"文件："+o.filename:"",o.lineno?"行："+o.lineno:""].filter(Boolean).join(" · ");s("DWG Worker 启动失败",n,!0),c()},a.onmessageerror=()=>{s("DWG Worker 通信失败","Safari 无法读取 Worker 返回的数据。",!0),c()},h=window.setTimeout(()=>{s("DWG 解析超时","超过 180 秒，已停止 Worker 以释放内存。",!0),c()},18e4),a.postMessage({buffer:t},[t])}catch(t){s("DWG 启动失败",t instanceof Error?t.message:String(t),!0),c()}}async function P(e){L(e.name),W.hidden=!0,s("正在按需加载 DXF Viewer…","DXF 才会加载完整 CAD Viewer，首页不会提前占用这部分内存。");try{const t=await R(()=>import("./mobileDxf-B4vOnKLR.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);l.hidden=!0,f.hidden=!1,w=await t.mountDxfViewer(f,e)}catch(t){s("DXF Viewer 加载失败",t instanceof Error?t.message:String(t),!0)}}async function H(e){var o;const t=(o=e.name.split(".").pop())==null?void 0:o.toLowerCase();if(t!=="dwg"&&t!=="dxf"){D("请选择 .dwg 或 .dxf 文件。");return}D(""),G(),t==="dwg"?await _(e):await P(e)}T.onclick=()=>v.click();v.onchange=()=>{var t;const e=(t=v.files)==null?void 0:t[0];e&&H(e)};C.onclick=A;E.onclick=()=>{i=Math.max(.5,Math.round((i-.25)*100)/100),g()};x.onclick=()=>{i=Math.min(4,Math.round((i+.25)*100)/100),g()};O.onclick=()=>{i=1,g()};async function N(e){if(e.active)return;const t=e.installing||e.waiting;t&&await new Promise(o=>{const n=()=>{(t.state==="activated"||t.state==="redundant")&&o()};t.addEventListener("statechange",n),n()})}async function q(){if(!("serviceWorker"in navigator)||!("caches"in window)){p("unsupported");return}try{const e=new URL("./",location.href).href,t=await navigator.serviceWorker.getRegistrations();for(const r of t)r.scope.endsWith("/-litecad-mobile-offline/")&&r.scope!==e&&await r.unregister();const o=await navigator.serviceWorker.register("./sw.js",{scope:"./"});await N(o);const n=await caches.open("litecad-v6-runtime-20260919"),y=new Set([new URL("./",location.href).href,new URL("./index.html",location.href).href,new URL("./manifest.webmanifest",location.href).href,new URL("./icon.svg",location.href).href,new URL("./assets/ios/ios-dwg-worker.js",location.href).href,new URL("./assets/ios/libredwg-lowmem.js",location.href).href,new URL("./assets/ios/libredwg-runtime.js",location.href).href,new URL("./assets/ios/libredwg-web.wasm",location.href).href]);for(const r of performance.getEntriesByType("resource"))try{const d=new URL(r.name);d.origin===location.origin&&/\.(?:js|css)(?:$|\?)/i.test(d.pathname+d.search)&&y.add(d.href)}catch{}for(const r of y)try{await n.add(new Request(r,{cache:"reload"}))}catch(d){console.warn("[LiteCAD mobile] cache failed",r,d)}localStorage.setItem("litecad-v6-offline-ready","1"),p("ready")}catch(e){console.warn("[LiteCAD mobile] offline setup failed",e),p(localStorage.getItem("litecad-v6-offline-ready")==="1"?"ready":"failed")}}p(localStorage.getItem("litecad-v6-offline-ready")==="1"?"ready":"checking");q();
