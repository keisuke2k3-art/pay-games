/* =========================================================
   PAY GAMES — 作品台帳 (games.js)
   ---------------------------------------------------------
   新作を公開したら、この配列の「先頭」に1件追加するだけで
   ・トップページ(水槽の泡と作品一覧)
   ・各作品ページ下部の「ほかの作品」
   の両方に自動で並びます。手順は README.md を参照。

   featured を付けた作品は「注目作」として扱われ、
   ・トップの水槽で、大きな泡に NEW を付けて最初に浮かんでくる
   ・全ページ上部のバーに「NEW」リンク
   ・「ほかの作品」に NEW バッジ
   になります。注目作を入れ替えるときは featured を付け替えるだけ。
   ========================================================= */
window.PAY_GAMES = [
  {
    slug: "cycle",                                   // 公式サイトの中で遊ぶ無料の試作(itch には出していない)
    short: { ja: "水を立ち上げる", en: "Cycling the Tank" },
    itch: "https://keisuke2k3-art.github.io/pay-games/games/cycle/?src=site",   // 遊ぶボタンの先(サイト内)
    released: "2026-11-28",
    status: { ja: "プロトタイプ(無料)", en: "Prototype (free)" },
    title: { ja: "水を立ち上げる(試作)", en: "Cycling the Tank (prototype, Japanese only)" },
    tagline: {
      ja: "あなたの街の水道水で、はじめての水槽を立ち上げる。合う生き物もわかる。",
      en: "Cycle your first fish tank with your own city's tap water."
    },
    genre: { ja: "水槽の立ち上げパズル", en: "Fish-tank cycling puzzle" },
    cover: "https://keisuke2k3-art.github.io/pay-games/games/cycle/cover.png",
    accent: "#3F8F8A",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "ブラウザ・スマホ対応", en: "Browser & mobile" }, { ja: "1面 約1分", en: "About 1 min per stage" }, { ja: "日本語のみ", en: "Japanese only" }],
    crop: [.32, .38, .7]
  },
  {
    slug: "the-launch-was-a-success",
    short: { ja: "打ち上げは成功しました", en: "The Launch Was a Success" },
    fx: "sealed",
    itch: "https://pay-k.itch.io/the-launch-was-a-success",
    buy: "https://pay-k.itch.io/the-launch-was-a-success/purchase",
    priceShort: { ja: "$2.99", en: "$2.99" },
    play: { ja: "無料体験版を遊ぶ", en: "Play the free demo" },
    itchId: 5451712,
    released: "2026-11-26",
    status: { ja: "製品版 販売中", en: "Full version on sale" },
    title: { ja: "打ち上げは成功しました(The Launch Was a Success)", en: "The Launch Was a Success" },
    tagline: {
      ja: "書記長は報告書しか読まない。欠陥を隠して高度10kmまでもたせろ。",
      en: "The Secretary only reads reports. Hide the defects until 10 km."
    },
    genre: { ja: "報告書の管理シミュレーション", en: "Paperwork management sim" },
    cover: "https://img.itch.zone/aW1nLzMyODU0NjI2LnBuZw==/original/g8lPsh.png",
    accent: "#B8322A",
    price: { ja: "体験版 無料 / 製品版 $2.99", en: "Free demo / Full version $2.99" },
    tags: [{ ja: "体験版は無料", en: "Free demo" }, { ja: "1回の計画 約25分", en: "About 25 min per plan" }, { ja: "日本語 / English", en: "English / Japanese" }],
    crop: [.5, .5, .8]
  },
  {
    slug: "gun-dojo",
    short: { ja: "銃道場", en: "Gun Dojo" },
    itch: "https://pay-k.itch.io/gun-dojo",
    itchId: 5425530,
    released: "2026-11-23",
    status: { ja: "公開中", en: "Released" },
    title: { ja: "銃道場(Gun Dojo: Read the Draw)", en: "Gun Dojo: Read the Draw" },
    tagline: {
      ja: "相手の癖を読み、撃つ瞬間を奪い合う。2ボタンの決闘。",
      en: "Read their habits. Beat them to the shot. A two-button duel."
    },
    genre: { ja: "2ボタンの決闘", en: "Two-button duel" },
    cover: "https://img.itch.zone/aW1nLzMyNjg3NTkwLnBuZw==/original/fTno3D.png",
    accent: "#D9B25F",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "キー2つ・横向きタッチ", en: "Two keys or touch" }, { ja: "相手9人", en: "9 opponents" }, { ja: "日本語 / English", en: "English / Japanese" }],
    crop: [.5, .5, .8]
  },
  {
    slug: "goldie",
    short: { ja: "Goldie", en: "Goldie" },
    fx: "gold",                                      // 泡が割れると金貨が飛び散る
    itch: "https://pay-k.itch.io/goldie",
    itchId: 5276185,
    released: "2026-11-01",
    status: { ja: "公開中", en: "Released" },
    title: { ja: "Goldie(異世界を時価で叩いて買い占める)", en: "Goldie" },
    tagline: {
      ja: "値札が付けば、買える。敵を金貨で殴り倒す、40ターンの悪徳買収ゲーム。",
      en: "If it has a price tag, it's for sale. A 40-turn game of buying out the corrupt."
    },
    genre: { ja: "競り×悪徳買収ストラテジー", en: "Auction & takeover strategy" },
    cover: "https://img.itch.zone/aW1nLzMxNjU3MDUzLnBuZw==/original/Eqipi2.png",
    accent: "#C9961E",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "PCのみ・マウスだけ", en: "PC only, mouse only" }, { ja: "1回30〜60分・自動保存", en: "30–60 min a run, autosaves" }, { ja: "日本語のみ", en: "Japanese only" }],
    crop: [.72, .5, .5]
  },
  {
    slug: "the-silent-press",
    short: { ja: "沈黙の輪転機", en: "The Silent Press" },   // 泡の下に出す短い名前
    itch: "https://pay-k.itch.io/the-silent-press",
    buy: "https://pay-k.itch.io/the-silent-press/purchase",   // 購入ページ(有料作品のみ)
    itchId: 5177559,
    sale: {                                   // 期間中だけ価格の表示が変わる(下の「期間限定のセール表示」)。itch のセールの日程と必ず合わせる
      from: "2026-11-27T17:00:00+09:00", to: "2026-12-03T03:00:00+09:00",   // Creator Day & Black Friday 2026(itch 公式の日程)
      priceShort: { ja: "$2.99(40%オフ)", en: "$2.99 (40% off)" },
      price: { ja: "体験版 無料 / 製品版 $2.99(12/3 3:00まで40%オフ)", en: "Free demo / Full game $2.99 (40% off through Dec 2 UTC)" },
      bar: { ja: "40%オフ 12/3まで", en: "40% off through Dec 2" }
    },
    released: "2026-10-18",
    status: { ja: "公開中", en: "Released" },
    title: { ja: "沈黙の輪転機(The Silent Press)", en: "The Silent Press" },
    tagline: {
      ja: "一行も嘘を書かずに、読者に結論を出させる。",
      en: "Never print a single lie. Let the readers reach the verdict."
    },
    genre: { ja: "紙面を組む物語パズル", en: "Front-page layout puzzle" },
    price: { ja: "体験版 無料 / 製品版 $4.99", en: "Free demo / Full game $4.99" },
    cover: "https://img.itch.zone/aW1nLzMxMDA2OTkyLnBuZw==/original/MfExsu.png",
    accent: "#9E2B25",
    crop: [.5, .52, .8],
    fx: "press",                             // トップの泡のアイコンに使う部分 [中心x, 中心y, 大きさ](カバー画像に対する割合)
    featured: {
      bar: { ja: "体験版は無料", en: "Free demo" },   // 上部バーの NEW の後ろに出る一言
      priceShort: { ja: "$4.99", en: "$4.99" },
      label: { ja: "新作", en: "New release" },
      masthead: "The Silent Press",               // 注目枠の大きな題字
      sub: "沈黙の輪転機",
      points: [
        { ja: "全10章・結末31種", en: "10 chapters, 31 endings" },
        { ja: "一周 約1時間", en: "About 1 hour per run" },
        { ja: "日本語 / English", en: "English / Japanese" }
      ],
      play: { ja: "無料体験版を遊ぶ", en: "Play the free demo" },
      playNote: { ja: "ブラウザ・ダウンロード不要", en: "Plays in your browser, no download" },   // 体験版ボタンの下の小さな一言
      demo: { ja: "体験版はチュートリアルと序章。製品版は全10章・結末31種。", en: "The demo covers the tutorial and prologue. The full game has 10 chapters and 31 endings." },
      shots: [                                          // プレイ画面(作品カードと一覧に小さく出る)
        { src: "https://img.itch.zone/aW1hZ2UvNTE3NzU1OS8zMTAwNzAwMS5wbmc=/original/Kwtfjd.png", cap: { ja: "机の上で、明日の一面を組む", en: "Laying out tomorrow's front page" } },
        { src: "https://img.itch.zone/aW1hZ2UvNTE3NzU1OS8zMTAwNzAwMy5wbmc=/original/SmZqx6.png", cap: { ja: "刷り上がった朝刊", en: "The morning edition" } }
      ]
    }
  },
  {
    slug: "ponpon-stamper",
    short: { ja: "ポンポン・スタンパー", en: "Press & Pass" },
    fx: "stamp",
    itch: "https://pay-k.itch.io/ponpon-stamper",
    buy: "https://pay-k.itch.io/ponpon-stamper-full",   // 完全版(ダウンロード版)のページ
    priceShort: { ja: "$2.99", en: "$2.99" },            // 「製品版」ボタンの横に出す価格(featured でない作品用)
    play: { ja: "無料体験版を遊ぶ", en: "Play the free demo" },
    itchId: 5098909,
    released: "2026-10-04",
    status: { ja: "完全版 販売中", en: "Full version on sale" },
    title: { ja: "連打決裁 ポンポン・スタンパー", en: "Press & Pass" },
    tagline: {
      ja: "トン、ポン、ポン、シュパッ!山積みの稟議書を捌く物理押印アクション",
      en: "Stamp, flick, next! A physics game about clearing a mountain of paperwork."
    },
    genre: { ja: "物理押印アクション", en: "Physics stamping action" },
    cover: "https://img.itch.zone/aW1nLzMwNTI0ODE3LnBuZw==/original/6OX%2Bph.png",
    accent: "#C8102E",
    price: { ja: "体験版 無料 / 完全版 $2.99", en: "Free demo / Full version $2.99" },
    tags: [{ ja: "体験版は無料", en: "Free demo" }, { ja: "1ステージ約1分", en: "About 1 min per stage" }, { ja: "全5日+残業モード", en: "5 days + Overtime Mode" }],
    crop: [.5, .5, .8]
  },
  {
    slug: "160cm",                                   // games/ 以下のフォルダ名
    short: { ja: "布1枚で60cm水槽", en: "One Cloth, One Tank" },
    fx: "cloth",                                     // 泡が割れたときに飛ぶもの(press 新聞 / stamp 押印済みの書類 / cloth 布 / match ハート / frogbit 浮き草 / sealed 警告の火花 / gold 金貨)
    itch: "https://pay-k.itch.io/160cm",
    itchId: 5030538,                                 // itch.io 埋め込みウィジェット用ID
    released: "2026-09-20",
    status: { ja: "公開中", en: "Released" },
    title: {
      ja: "布1枚で60cm水槽をサイドテーブルだと言い張るゲーム",
      en: "One Cloth, One 60cm Tank, One Side Table"
    },
    tagline: {
      ja: "家族に隠れて水槽を持ち込むアクアリストあるある",
      en: "Sneak a fish tank past your family. Every aquarist has been there."
    },
    genre: { ja: "だるまさんがころんだ系アクション", en: "Red-light-green-light action" },
    cover: "https://img.itch.zone/aW1nLzMwMTE4Njg5LnBuZw==/original/E5rYqR.png",
    accent: "#C8343B",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "1プレイ約1分", en: "About 1 min per run" }, { ja: "PC・スマホ対応", en: "PC & mobile" }],   // 作品一覧とカードに出す目安
    crop: [.5, .21, .46]
  },
  {
    slug: "fish-match",
    short: { ja: "フィッシュマッチ", en: "Fish Match" },
    fx: "match",
    itch: "https://pay-k.itch.io/fish-match",
    itchId: 4928042,
    released: "2026-08-23",
    status: { ja: "公開中", en: "Released" },
    title: { ja: "フィッシュマッチ", en: "Fish Match" },
    tagline: {
      ja: "その魚、本当にうちの水槽に入れて大丈夫……?",
      en: "Is this fish really safe for your tank...?"
    },
    genre: { ja: "アクアリウム・マッチングシミュレーター", en: "Aquarium matchmaking sim" },
    cover: "https://img.itch.zone/aW1nLzI5NDczNTU2LmpwZw==/original/rMSu1c.jpg",
    accent: "#FF4F7B",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "1プレイ約3分", en: "About 3 min per run" }, { ja: "PC・スマホ対応", en: "PC & mobile" }],
    crop: [.29, .56, .6]
  },
  {
    slug: "frogbit-sweeper",
    short: { ja: "FROGBIT SWEEPER", en: "FROGBIT SWEEPER" },
    fx: "frogbit",
    itch: "https://pay-k.itch.io/frogbit-sweeper",
    itchId: 4850905,
    released: "2026-08-01",
    status: { ja: "プロトタイプ", en: "Prototype" },
    title: { ja: "FROGBIT SWEEPER", en: "FROGBIT SWEEPER" },
    tagline: {
      ja: "すくっても、すくっても、また生えてくる。",
      en: "Sweep and sweep, and it just keeps growing back."
    },
    genre: { ja: "8-bit アクアリウム・アクション", en: "8-bit arcade action" },
    cover: "https://img.itch.zone/aW1nLzI4OTc3NzMwLmpwZw==/original/vAJVb1.jpg",
    accent: "#5BBF3A",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "1プレイ約3分", en: "About 3 min per run" }, { ja: "PC・スマホ対応", en: "PC & mobile" }],
    crop: [.5, .53, .44]
  },
  {
    slug: "project-genesis",
    short: { ja: "PROJECT GENESIS", en: "PROJECT GENESIS" },
    fx: "sealed",
    itch: "https://pay-k.itch.io/projectgenesis-one-shot-setup",
    itchId: 4721036,
    released: "2026-08-01",                           // ※itch.io の最終更新日。初公開日が分かれば書き換えてください
    status: { ja: "公開中", en: "Released" },
    title: { ja: "PROJECT GENESIS//One-Shot-Setup", en: "PROJECT GENESIS//One-Shot-Setup" },
    tagline: {
      ja: "設計は一度きり。100日間、介入不可。",
      en: "One design. 100 days. Zero intervention."
    },
    genre: { ja: "ディストピア生態系シミュレーション", en: "Dystopian ecosystem simulation" },
    cover: "https://img.itch.zone/aW1nLzI4MTM2MjU4LnBuZw==/original/CkwFu9.png",
    accent: "#F2A93B",
    price: { ja: "無料", en: "Free" },
    tags: [{ ja: "18の実験・★54", en: "18 experiments, 54 stars" }, { ja: "サイトで遊べる", en: "Play on this site" }],
    crop: [.5, .47, .78]
  }
];

window.PAY_PROFILE = {
  name: "PAY",
  itch: "https://pay-k.itch.io/",
  x: "https://twitter.com/ART_HELPS_YOU",
  xHandle: "@ART_HELPS_YOU",
  blog: "https://synth-aquarium.xblog.jp/",
  blogName: "Synth-Aquarium",
  ga: "G-YRLZTCPTSE"          // Google アナリティクスの測定 ID(サイト・ブログ・itch.io で共通)
};

/* 期間限定のセール表示
   sale を付けた作品は、from 〜 to の間だけ価格の表示(price・priceShort・上部バーの一言)がセール用に変わり、
   g.onSale が true になる。期間の外では何も変わらないので、セールが終わっても書き換えは要らない */
(function () {
  var now = Date.now();
  (window.PAY_GAMES || []).forEach(function (g) {
    var s = g.sale;
    if (!s || !(now >= Date.parse(s.from) && now < Date.parse(s.to))) return;
    g.onSale = true;
    if (s.price) g.price = s.price;
    if (s.priceShort) {
      if (g.priceShort) g.priceShort = s.priceShort;
      if (g.featured && g.featured.priceShort) g.featured.priceShort = s.priceShort;
    }
    if (s.bar && g.featured) g.featured.bar = s.bar;
  });
})();
