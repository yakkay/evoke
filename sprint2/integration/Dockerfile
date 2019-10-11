FROM node:10.16.3

ADD  evc_app.js app.js evc_contract.js transaction.js user_app.js user_contract.js ./

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["node","app.js"]


