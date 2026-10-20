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
    slug: "the-silent-press",
    short: { ja: "沈黙の輪転機", en: "The Silent Press" },   // 泡の下に出す短い名前
    itch: "https://pay-k.itch.io/the-silent-press",
    buy: "https://pay-k.itch.io/the-silent-press/purchase",   // 購入ページ(有料作品のみ)
    itchId: 5177559,
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
    slug: "160cm",                                   // games/ 以下のフォルダ名
    short: { ja: "布1枚で60cm水槽", en: "One Cloth, One Tank" },
    fx: "cloth",                                     // 泡が割れたときに飛ぶもの(press 新聞 / cloth 布 / match ハート / frogbit 浮き草 / sealed 警告の火花)
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
    tags: [{ ja: "1周約5分・周回前提", en: "About 5 min per run, built for replays" }, { ja: "マウスだけ", en: "Mouse only" }],
    crop: [.5, .47, .78]
  }
];

window.PAY_PROFILE = {
  name: "PAY",
  itch: "https://pay-k.itch.io/",
  x: "https://twitter.com/ART_HELPS_YOU",
  xHandle: "@ART_HELPS_YOU",
  blog: "https://synth-aquarium.xblog.jp/",
  blogName: "Synth-Aquarium"
};
