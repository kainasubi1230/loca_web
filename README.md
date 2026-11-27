# Aplicalm Web

チーム「Aplicalm」の公式サイト（Next.js 16 / Tailwind CSS 4）。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000（同じWi-Fiなら http://<PCのIP>:3000 でも確認可）
npm run build    # 本番ビルド
npm run lint
```

## どこを編集するか

| やりたいこと | ファイル |
| --- | --- |
| 文章・リンク・メンバー・作品を変える | `src/content/site.ts` |
| Loca 紹介ページ（`/works/loca`、現在は非公開）の文章 | `src/content/loca.ts` |
| トップページのレイアウト | `src/app/page.tsx` |
| ヘッダー・フッター | `src/components/site-chrome.tsx` |
| 色・アニメーション | `src/app/globals.css` |

文章中の `\n` は PC で改行する位置です（スマホでは自然に折り返します）。

## 画像

```
public/images/
  brand/          ロゴ
  illustrations/  About・Services のイラスト、トップの帯
  works/<作品>/   作品ごとの画像（紹介画像・QRコードなど）
  members/        メンバー写真
src/app/icon.png  ブラウザのタブのアイコン
assets/originals/ 加工前の元画像（サイトでは使わない）
```

- サイトに載せる画像は、元画像を `assets/originals/` に置き、背景を抜く・縮小するなどの加工をしたものを `public/images/` に置く。
- 線画のイラストは色数を減らした PNG に、写真は JPEG（品質80程度）にすると軽くなる。
