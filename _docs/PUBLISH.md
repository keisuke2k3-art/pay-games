# 公開の手順(GitHub Pages)

このサイトは、GitHub Pages に置くだけで公開できます。サーバーの契約や費用はかかりません。
ここでは、GitHub の画面だけで公開する方法を書きます(コマンド操作は不要です)。

---

## 1. リポジトリ(置き場所)を作る

1. GitHub にログインし、右上の「+」→「New repository」を押す
2. 「Repository name」に **`pay-games`** と入力する
   - サイトのアドレス `https://keisuke2k3-art.github.io/pay-games/` を、共有画像・検索向けファイル・ブログ用バナーに記入済みです。別の名前にすると、それらを書き換える必要があります
3. 「Public」を選ぶ(Private だと無料プランでは公開できません)
4. 「Add a README file」などのチェックは入れずに、「Create repository」を押す

## 2. ファイルを入れる

1. 受け取った `pay-games-site.zip` を、パソコンで展開する
2. 作ったリポジトリの画面で「uploading an existing file」のリンクを押す(見つからないときは「Add file」→「Upload files」)
3. 展開したフォルダの**中身**(`index.html`・`games.js`・`games` フォルダ・`_docs` フォルダなど)をすべて選んで、ブラウザにドラッグ&ドロップする
   - フォルダごとではなく中身を入れてください。`index.html` がリポジトリのいちばん上に来ればOKです
   - `_docs`(この手順書・説明書・ブログ用バナー)と `_template`(新作ページのひな形)は、名前が `_` で始まるので一緒に入れても公開されません
4. 下の「Commit changes」を押す

## 3. 公開する

1. リポジトリの「Settings」→ 左の「Pages」を開く
2. 「Build and deployment」の「Source」を「Deploy from a branch」にする
3. 「Branch」を `main`、フォルダを `/ (root)` にして「Save」
4. 1〜3分待ってから画面を再読み込みすると、上に `https://keisuke2k3-art.github.io/pay-games/` と表示されます。これがサイトのアドレスです
   - 進み具合はリポジトリ上部の「Actions」タブで見られます(緑のチェックが付けば公開完了)

---

## 公開したあとにやること(10分)

### アドレスの記入(済み)

サイトのアドレス `https://keisuke2k3-art.github.io/pay-games/` は、次の場所に記入済みです。リポジトリ名を `pay-games` にすれば、書き換えは不要です。

- `index.html` と各作品ページ:共有用のアドレス(og:url)と正式なアドレス(canonical)、トップの共有画像(`og.png`)
- `sitemap.xml` / `robots.txt`:検索エンジン向け
- `_docs/blog-banner.html`:ブログ用バナーのリンク先

### つなぐ

- **X のプロフィール**:ウェブサイト欄にサイトのアドレスを入れる
- **itch.io のプロフィール**:「Edit profile」→ リンク欄にサイトのアドレスを入れる
- **Seesaa ブログ**:`blog-banner.html` のバナーをサイドバーに貼る(手順はファイルの先頭に書いてあります)
- **(任意)Google Search Console**:「URL プレフィックス」に `https://keisuke2k3-art.github.io/pay-games/` を登録し、「サイトマップ」に `sitemap.xml` を送信すると、検索に載るのが早くなります
- **共有画像の確認**:X の投稿欄にトップのアドレスを貼ると、水槽の画像(`og.png`)が出ます(公開から反映まで少し時間がかかることがあります)

### 確認する

- [ ] トップで泡が動く/作品をクリックするとカードが開く
- [ ] 各作品ページが開く(上のバーの「PAY games」でトップに戻れる)
- [ ] 存在しないアドレス(例:`…/pay-games/abc`)を開くと「水の底に沈んだようです」のページが出る
- [ ] スマホでも開いて、スクロールできる

---

## 更新するとき

- 新作を足す:`README.md` の「新作を追加する」の手順でファイルを用意し、リポジトリにアップロード(同じ名前のファイルは上書きされます)
- 文章や画像を直す:GitHub 上で該当ファイルを鉛筆マークで編集するのが手軽です
- 変更は、保存(Commit)してから1〜3分で公開中のサイトに反映されます。反映されないときは、ブラウザで強制再読み込み(Windows は Ctrl+F5、Mac は Cmd+Shift+R)してください
