# メインアプリケーション用のDockerfile
FROM node:20-alpine

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# Next.jsのポート3000を開放
EXPOSE 3000

# Next.js開発サーバーを起動
CMD ["npm", "run", "dev"]