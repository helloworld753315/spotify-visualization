FROM node:18-slim

WORKDIR /app

COPY app/package.json ./
COPY app/package-lock.json ./
RUN npm install

COPY app ./
# RUN npm run dev

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm start; else npm run dev; fi"]

EXPOSE 3000

CMD ["npm", "run", "dev"]  