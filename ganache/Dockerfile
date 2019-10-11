FROM trufflesuite/ganache-cli 

ADD db1/ ./

COPY package*.json ./

RUN npm install

EXPOSE 8575

CMD ["ganache-cli --db './db1' -a 2 -q -p 8545 -d -m 'wasp route tiger rose donkey humble army pond purchase pony advance position'"]

