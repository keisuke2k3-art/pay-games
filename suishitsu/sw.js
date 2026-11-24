/* 水質スキャナの Service Worker(アプリ化・オフライン用)
   - 本体(index.html)とアイコンは最初に保存し、電波がなくても開ける
   - 都道府県・市区町村のページは、一度開いたものだけ保存する(全部で約60MBあるため)
   - ページは「まずネット、だめなら保存分」。データの更新はネットが通ったときに反映される
   - 郵便番号の検索(zipcloud)と解析(Google)は保存しない */
const VERSION = "wq-sw-1";
const CORE = ["./", "./manifest.webmanifest", "./app/icon-192.png", "./app/icon-512.png", "./app/offline.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || !url.pathname.startsWith(new URL("./", location).pathname)) return;
  const isPage = req.mode === "navigate";
  // ?q= や ?src= の付いた本体も、保存した本体で開けるようにクエリを外して探す
  const key = isPage ? new Request(url.origin + url.pathname) : req;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && res.type === "basic") {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(key, copy));
      }
      return res;
    }).catch(() => caches.match(key).then(hit => hit
      || (isPage ? caches.match("./app/offline.html") : Response.error())))
  );
});
