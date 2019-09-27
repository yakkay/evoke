FROM node:10.16.3

ADD  evocoin.js app.js ABI.js ./

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["node","app.js"]


