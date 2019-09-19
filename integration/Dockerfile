FROM node:10.16.3

ADD ..contracts ../test evocoin.js app.js ./

COPY package*.json ./

RUN npm install

CMD ["node","app.js"]

