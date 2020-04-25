const axios = require('axios');
const credentials = require('./credentials');
const bearer = credentials.bearer;
const account = credentials.account;
const host= credentials.host;
const section = credentials.section;
const user = credentials.user;
const options = {
    headers: {
        accept: "application/json",
        Authorization: bearer,
    }
  };
exports.balance = function(){
  return new Promise ((res,rej)=>{
    console.log('enter promise')
    axios.get(host+'/sections/'+section+'/users',options).then(function (response) {
      // handle success
      var i = 0;
      var coins = 0;
      for ( i in response.data){
        coins += response.data[i].coins;
      }
      //return coins;
      res(coins);
      console.log(coins);  
    })
    .catch(function (error) {
      rej(error);
    })
    .finally(function () {
      // always executed
    });
  });
}


