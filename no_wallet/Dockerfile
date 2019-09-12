FROM node:10

WORKDIR ~/evoke/no_wallet

COPY package*.json ./

RUN npm install

COPY ..

EXPOSE 8080

CMS ["node","storeValue.js"]

