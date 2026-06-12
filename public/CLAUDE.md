# my-wp-blog プロジェクト説明書

## 概要
WordPress（ロリポップ）をヘッドレスCMSとして使用し、Next.js + Netlifyで構築した和風ビジネスサイト。

## 構成

### データの流れ
```
wordpress.unwired.jp に記事を書く
　　↓
保存・公開する
　　↓
functions.phpのWebhookが発火
　　↓
Netlifyが自動ビルド（約1〜2分）
　　↓
lustrous-selkie-c29bce.netlify.app に反映
```

### ページ構成
| URL | ファイル | 説明 |
|---|---|---|
| `/` | `pages/index.js` | トップページ（記事一覧・サービス紹介） |
| `/posts/[slug]` | `pages/posts/[slug].js` | 記事詳細ページ |
| `/contact` | `public/contact.html` | お問い合わせフォーム |
| `/thanks` | `pages/thanks.js` | 送信完了ページ |

### デザインを変えたいとき
| 変えたい場所 | 編集ファイル |
|---|---|
| トップページ | `pages/index.js` |
| 記事詳細 | `pages/posts/[slug].js` |
| お問い合わせ | `public/contact.html` |
| 送信完了 | `pages/thanks.js` |
| 全体のCSS（色・フォント） | `styles/globals.css` |

## 環境変数
| 変数名 | 説明 |
|---|---|
| `NEXT_PUBLIC_WP_URL` | WordPressのURL（Netlifyに設定済み） |

## 外部サービス
| サービス | 用途 | 備考 |
|---|---|---|
| ロリポップ | WordPressホスティング | `wordpress.unwired.jp` |
| GitHub | ソースコード管理 | `fumi1103/my-wp-blog` |
| Netlify | 静的サイトホスティング | `lustrous-selkie-c29bce.netlify.app` |
| Formspree | お問い合わせフォーム | `mbdezazk` |

## WordPress Webhook設定
ロリポップのWordPress管理画面：
**外観 → テーマファイルエディター → functions.php** に記載済み。
記事の公開・更新時にNetlifyのBuild Hookを叩いて自動ビルドを発火させる。

## デザインコンセプト
- 和風・落ち着いたビジネスサイト
- フォント：Noto Serif JP（見出し）/ Noto Sans JP（本文）
- アクセントカラー：深緑 `#3B6D11`
- ベースカラー：オフホワイト `#FAFAF8`

## ローカル開発
```bash
npm run dev
# http://localhost:3000 で確認
```

## デプロイ
```bash
git add .
git commit -m "コミットメッセージ"
git push
# GitHubプッシュ後、Netlifyが自動デプロイ
```