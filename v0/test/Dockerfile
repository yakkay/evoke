FROM node:10.16.3

ADD Vault_test.js ./

COPY package*.json ./

EXPOSE 3000

RUN npm install

CMD ["node","Vault_test.js"]

