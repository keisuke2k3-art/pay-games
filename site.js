/* =========================================================
   PAY GAMES — 共通スクリプト (site.js)
   各ページの <head> で games.js の直後に読み込む。
   ・日本語 / English 切替(lang="ja" / lang="en" の要素を出し分け)
   ・上部バー、「ほかの作品」、フッターを games.js から自動生成
   ページ側で触るのは <body data-game="フォルダ名"> だけ。
   ========================================================= */
(function () {
  "use strict";

  var script = document.currentScript;
  var ROOT = new URL(".", script.src).href;          // サイトのルート(games.js と同じ階層)
  var GAMES = window.PAY_GAMES || [];
  var P = window.PAY_PROFILE || {};
  var FEATURED = GAMES.filter(function (g) { return g.featured; })[0] || null;
  var KEY = "pay-site-lang";

  /* ---------- アクセス解析(Google アナリティクス) ----------
     公開中のサイトでだけ計測する(手元で開いたときや確認用ファイルでは計測しない) */
  var live = /github\.io$/.test(location.hostname);
  // 自分のアクセスを集計から外す:この端末で一度だけ「サイトのURL?me=1」を開く(元に戻すときは ?me=0)
  var isMe = false;
  try {
    var q = /[?&]me=([01])/.exec(location.search);
    if (q) { if (q[1] === "1") localStorage.setItem("pay-me", "1"); else localStorage.removeItem("pay-me"); }
    isMe = localStorage.getItem("pay-me") === "1";
  } catch (e) {}
  // いま見ているページの作品(トップは top)。ページの表示回数を作品ごとに数えるために送る
  var pageGame = (/\/games\/([^/]+)/.exec(location.pathname) || [, "top"])[1];
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  if (P.ga && live) {
    var ga = document.createElement("script");
    ga.async = true; ga.src = "https://www.googletagmanager.com/gtag/js?id=" + P.ga;
    document.head.appendChild(ga);
    gtag("js", new Date());
    var cfg = { game: pageGame };
    if (isMe) cfg.traffic_type = "internal";   // GA4 の「内部トラフィック」フィルタで除外される
    gtag("config", P.ga, cfg);
  }
  // 計測したいできごとを送る(計測していないときは何もしない)
  function track(name, params) { if (P.ga && live) window.gtag("event", name, params || {}); }

  /* ---------- 言語 ---------- */
  var lang = null;
  try { lang = localStorage.getItem(KEY); } catch (e) {}
  if (lang !== "ja" && lang !== "en") {
    lang = (navigator.language || "ja").toLowerCase().indexOf("ja") === 0 ? "ja" : "en";
  }
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang;

  function setLang(l) {
    lang = l;
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    var btns = document.querySelectorAll("[data-pay-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", String(btns[i].getAttribute("data-pay-lang") === l));
    }
    document.dispatchEvent(new CustomEvent("paylang", { detail: l }));
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function bi(o) {
    if (!o) return "";
    if (typeof o === "string") return esc(o);
    if (o.ja === o.en) return esc(o.ja);
    return '<span lang="ja">' + esc(o.ja) + '</span><span lang="en">' + esc(o.en) + "</span>";
  }

  // 遊ぶための目安(無料・時間・操作など)
  function isFree(g) { return g.price && /^(無料|Free)$/.test(g.price.ja); }
  function tagList(g) {
    var t = (g.featured && g.featured.points) || g.tags || [];
    if (isFree(g)) t = [{ ja: "無料", en: "Free" }].concat(t);
    else if (g.featured) t = [{ ja: "体験版は無料", en: "Free demo" }].concat(t);
    return t;
  }
  function playLabel(g) {
    return g.featured && g.featured.play ? g.featured.play : isFree(g) ? { ja: "無料で遊ぶ", en: "Play free" } : { ja: "ブラウザで遊ぶ", en: "Play in browser" };
  }

  // 作品ページ:スクロールしても常に出ている「遊ぶ」の帯
  function buildDock(g) {
    var dock = document.createElement("aside");
    dock.className = "pay-dock";
    dock.setAttribute("aria-label", "Play");
    dock.innerHTML =
      '<img src="' + esc(g.cover) + '" alt="" width="64" height="51">' +
      '<span class="pay-dock__t"><b>' + bi(g.short || g.title) + "</b><small>" +
      tagList(g).map(function (t) { return bi(t); }).join('<i aria-hidden="true"></i>') + "</small></span>" +
      '<span class="pay-dock__btns">' +
      (g.buy ? '<a class="pay-dock__buy" href="' + esc(g.buy) + '" rel="noopener">' + bi({ ja: "製品版", en: "Full game" }) +
        (g.featured && g.featured.priceShort ? " " + bi(g.featured.priceShort) : "") + "</a>" : "") +
      '<a class="pay-dock__play" href="' + esc(g.itch) + '" rel="noopener">' + bi(playLabel(g)) + "</a></span>";
    document.body.appendChild(dock);
    var img = dock.querySelector("img");
    img.addEventListener("error", function () { img.remove(); });
    // ヒーローを過ぎたら出す。ページ内の itch.io の枠やフッターが見えているときは隠す
    var seen = {}, hide = document.querySelectorAll('iframe[src*="itch.io/embed"], .pay-foot');
    function update() {
      var past = window.scrollY > window.innerHeight * .7, blocked = false;
      for (var k in seen) if (seen[k]) blocked = true;
      dock.classList.toggle("on", past && !blocked);
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { seen[e.target.dataset.payDockId] = e.isIntersecting; }); update(); });
      Array.prototype.forEach.call(hide, function (el, i) { el.dataset.payDockId = "h" + i; io.observe(el); });
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }
  // 作品ページ:ヒーローの最初の「遊ぶ」ボタンの下に、遊ぶ目安を小さく添える
  function buildMeta(g) {
    var a = document.querySelector('main a[href="' + g.itch + '"], body > :not(.pay-bar) a[href="' + g.itch + '"]');
    if (!a || g.featured || document.body.hasAttribute("data-no-meta")) return;
    var p = document.createElement("p");
    p.className = "pay-meta";
    p.innerHTML = tagList(g).map(function (t) { return "<span>" + bi(t) + "</span>"; }).join("");
    a.insertAdjacentElement("afterend", p);
  }

  /* ---------- 共通パーツ生成 ---------- */
  function build() {
    var body = document.body;
    var current = body.getAttribute("data-game") || "";
    var feat = FEATURED && FEATURED.slug !== current ? FEATURED : null;

    // 上部バー(注目作があれば、そのページ以外で NEW リンクを出す)
    var bar = document.createElement("header");
    bar.className = "pay-bar";
    bar.innerHTML =
      '<a class="pay-bar__home" href="' + ROOT + '">PAY<span> games</span></a>' +
      (feat ? '<a class="pay-bar__news" href="' + ROOT + "games/" + esc(feat.slug) + '/"><b>NEW</b>' +
        '<span class="pay-bar__news-t">' + bi(feat.short || feat.title) + "</span>" +
        (feat.featured && feat.featured.bar ? '<span class="pay-bar__news-p">' + bi(feat.featured.bar) + "</span>" : "") + "</a>" : "") +
      '<div class="pay-bar__lang" role="group" aria-label="Language">' +
      '<button type="button" data-pay-lang="ja">日本語</button>' +
      '<button type="button" data-pay-lang="en">EN</button>' +
      "</div>";
    body.insertBefore(bar, body.firstChild);

    // ほかの作品(作品ページのみ)
    if (current) {
      var others = GAMES.filter(function (g) { return g.slug !== current; });
      if (others.length) {
        var more = document.getElementById("pay-more") || document.createElement("section");
        more.id = "pay-more";
        more.className = "pay-more";
        more.innerHTML =
          '<h2 class="pay-more__head"><span lang="ja">ほかの作品</span><span lang="en">More games by PAY</span></h2>' +
          '<ul class="pay-more__list">' +
          others.map(function (g) {
            return '<li><a href="' + ROOT + "games/" + esc(g.slug) + '/">' +
              '<img src="' + esc(g.cover) + '" alt="" loading="lazy" width="315" height="250">' +
              (g.featured ? '<em class="pay-more__badge">NEW</em>' : "") +
              '<b>' + bi(g.title) + "</b><small>" + bi(g.tagline) + "</small>" +
              '<span class="pay-more__tags">' + tagList(g).slice(0, 2).map(function (t) { return "<span>" + bi(t) + "</span>"; }).join("") + "</span></a></li>";
          }).join("") +
          "</ul>";
        if (!more.parentNode) body.appendChild(more);
      }
    }

    // フッター
    var foot = document.createElement("footer");
    foot.className = "pay-foot";
    foot.innerHTML =
      '<nav aria-label="PAY">' +
      '<a href="' + ROOT + '#works">' + bi({ ja: "作品一覧", en: "All games" }) + "</a>" +
      '<a href="' + esc(P.itch) + '" rel="noopener">itch.io</a>' +
      '<a href="' + esc(P.x) + '" rel="noopener">X ' + esc(P.xHandle) + "</a>" +
      '<a href="' + esc(P.blog) + '" rel="noopener">' + esc(P.blogName) + "</a>" +
      "</nav>" +
      "<p>© " + new Date().getFullYear() + " " + esc(P.name) + "</p>" +
      (P.ga ? '<p class="pay-foot__note">' + bi({ ja: "このサイトは Google アナリティクスでアクセス数を計測しています(Cookie を使います。名前などの個人情報は集めていません)。", en: "This site uses Google Analytics (with cookies) to count visits. No personal details such as names are collected." }) +
        ' <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">' + bi({ ja: "Google のデータの使い方", en: "How Google uses data" }) + "</a></p>" : "") +
      (isMe ? '<p class="pay-foot__note pay-foot__me">' + bi({ ja: "● この端末のアクセスは集計から外しています(PAY 用)", en: "● Visits from this device are excluded from stats (owner mode)" }) + "</p>" : "");
    body.appendChild(foot);

    // itch.io へのリンク(遊ぶ・買う)が押された回数を、作品・場所ごとに数える
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      var href = a.href, g = GAMES.filter(function (x) { return href.indexOf(x.itch) === 0; })[0];
      if (!g) return;
      var place = a.closest(".pay-dock") ? "dock" : a.closest(".pay-more") ? "more" : a.closest(".catch") ? "card" :
                  a.closest("#list") ? "list" : a.closest("#feature") ? "hero_top" : current ? "game_page" : "top";
      track(/\/purchase/.test(href) ? "buy_click" : "play_click", { game: g.slug, place: place });
    });

    // 作品ページ:遊ぶ目安と「遊ぶ」帯(フッターができてから。帯はフッターが見えたら隠れる)
    if (current) {
      var me = GAMES.filter(function (g) { return g.slug === current; })[0];
      if (me) { buildMeta(me); buildDock(me); }
    }

    // 言語ボタン
    var btns = document.querySelectorAll("[data-pay-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () { setLang(this.getAttribute("data-pay-lang")); });
    }
    setLang(lang);
  }

  window.PAY = { track: track, root: ROOT, games: GAMES, profile: P, featured: FEATURED, bi: bi, esc: esc,
                 lang: function () { return lang; }, setLang: setLang };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
