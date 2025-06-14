FROM node:20-slim

WORKDIR /app

COPY app/package.json ./
COPY app/package-lock.json ./
RUN npm install

COPY app ./

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000 6006

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm start; else npm run dev; fi"]  