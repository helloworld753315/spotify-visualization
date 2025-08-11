# CLAUDE.md

このファイルは、このリポジトリでコードを作業する際のClaude Code (claude.ai/code) 向けのガイダンスを提供します。

## 開発コマンド

- `NODE_ENV=development docker-compose up` - Docker開発サーバーを起動
- `npm run dev` - ローカル開発サーバーを起動 (Next.js ポート3000)
- `npm run build` - 本番用バンドルをビルド
- `npm run lint` - ESLintを実行
- `npm run storybook` - Storybook開発サーバーを起動 (ポート6006)
- `npm run build-storybook` - Storybook本番ビルド

## テスト

このプロジェクトはStorybookと統合されたVitestを使用してテストを行います：

- ストーリーから自動的にテストが生成される
- Playwright（Chromium）を使用したブラウザテスト
- デフォルトでヘッドレス実行
- 設定ファイル: `vitest.config.ts`

## アーキテクチャ概要

### コンポーネント構造

プロジェクトは二重のコンポーネント構造を持っています：

- `src/app/_components/` - App Router専用コンポーネント（レガシー配置）
- `src/components/` - メインコンポーネントライブラリ：
  - `features/` - ビジネスロジックコンポーネント（LoginButton、Playlist、Track）
  - `ui/` - 再利用可能なUIコンポーネント（Button、radioButton）

### Spotify連携

`src/app/_libs/spotify.ts`にコアSpotify API機能：

- OAuth 2.0 + PKCEフローの実装
- トークン管理（アクセス/リフレッシュトークン）
- プレイリストとユーザーデータの取得
- 環境変数を使用: `NEXT_PUBLIC_SPOTIFY_CLIENT_ID`、`NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET`、`NEXT_PUBLIC_SPOTIFY_REDIRECT_URI`

### スタイリング

- コンポーネント固有のスタイルにSCSSモジュールを使用
- グローバルスタイルは`src/styles/globals.scss`
- パスエイリアス: `@styles/*` は `./src/styles/*` にマップ
- CSSモジュール: `button.module.scss`、`card.module.scss`など

### パスエイリアス

- `@/*` は `./src/*` にマップ
- `@styles/*` は `./src/styles/*` にマップ

## 主要技術

- Next.js 15 (App Router)
- TypeScript（strictモード）
- コンポーネント開発・テスト用Storybook
- スタイリング用SCSS
- テスト用Vitest + Playwright
- Spotify Web API連携

## デザインシステム刷新計画 (2025年8月)

### 目標

Spotifyの音響分析データ（BPM、音量、グルーヴ感、アコースティック感など）を可視化してプレイリスト作成をサポートするUI。プレイリスト内楽曲の一覧表示と直感的な並び替え機能の提供。

### 新デザインシステムの特徴

#### 🎨 白ベース・クリーンデザイン

- 背景: #fafafa（既存デザインとの統一感保持）
- メイン色: Spotify Green (#1DB954)
- カード背景: #ffffff with subtle shadow

#### 📊 視覚的音響データ表現

**数値ではなく直感的アイコンで表現（並び替え時の比較容易性向上）:**

1. **⚡ エネルギー**: 稲妻の本数で強さ表現
   - 0.0〜0.33: ⚡ (Low)
   - 0.34〜0.66: ⚡⚡ (Medium)
   - 0.67〜1.0: ⚡⚡⚡ (High)

2. **🕺 ダンサビリティ**: 踊る人のアニメーション強度
   - 0.0〜0.35: 静的アニメーション
   - 0.36〜0.65: 中程度アニメーション
   - 0.66〜1.0: 激しいアニメーション

3. **🎸 アコースティック感**: 楽器アイコンの透明度
   - 0.0〜0.30: 透明度30% (エレクトロニック)
   - 0.31〜0.70: 透明度60% (ミックス)
   - 0.71〜1.0: 透明度100% (アコースティック)

4. **😊 感情価**: 顔文字で気分表現
   - 0.0〜0.40: 😔 (ネガティブ)
   - 0.41〜0.60: 😐 (ニュートラル)
   - 0.61〜1.0: 😊 (ポジティブ)

5. **💓 BPM**: ハートビートの速度
   - <80: スロー鼓動
   - 80〜120: ミディアム鼓動
   - > 120: ファスト鼓動

#### 🎭 総合ムード判定

- **エナジェティック** 🔥: エネルギー>0.7 + ダンサビリティ>0.7
- **アコースティック** 🪕: アコースティック感>0.7
- **ダンサブル** 🕺: ダンサビリティ>0.6 + エネルギー0.4〜0.7
- **チル** 😌: エネルギー<0.4 または 感情価<0.4

#### 🔄 プレイリスト編集機能

**Spotify API対応:**

- `PUT /playlists/{playlist_id}/tracks` でドラッグ&ドロップ並び替え実装可能
- 楽曲順序のリアルタイム変更
- トラック番号の自動更新

#### 🎛️ 表示モード

1. **ビジュアルモード**: 視覚的アイコン中心の簡潔表示
2. **詳細モード**: 数値とプログレスバーでの詳細表示

#### 📁 作成済みデザインファイル

- `design-system-visual.html` - 最終版（視覚的音響特性表示）
- `visual-thresholds-logic.js` - 数値→視覚変換ロジック

### 実装方針

1. 既存のCard、Button、RadioButtonコンポーネントを拡張
2. 新しい`AudioFeatures`コンポーネント作成
3. ドラッグ&ドロップライブラリ統合
4. Spotify Web API音響特性エンドポイント活用
