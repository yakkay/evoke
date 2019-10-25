FROM node:10.16.3

ADD storeValue.js ./

COPY package*.json ./

RUN npm install

CMD ["node","storeValue.js"]

