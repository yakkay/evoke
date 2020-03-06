FROM node:10.16.3

ADD app_test.js ./

COPY package*.json ./

RUN npm install

CMD ["node","app_test.js"]

