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
        Authorization: bearer
    }
  };
/*
axios.get(host+'/sections/'+section+'/users',options).then(function (response) {
    // handle success
    
    for(let i = 0; i < response.data.length;i++){
      console.log(response.data[i].firstname+' coins: '+response.data[i].coins);
    }
    console.log(response.data);
    console.log('longitud: '+response.data.length);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });*/

  //convertir a function promise para llamar desde el endpoint
  exports.balance = function(id){
    return new Promise((res,rej)=>{
      axios.get(host+'/users/'+user+'/balance',options).then(function (response) {
        console.log('el id recibido en /user/balance: '+id);
        console.log('lo que viene de motrain: '+response.data.coins);
        res(response.data); 
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        rej(error);
      })
      .finally(function () {
        // always executed
      });
    });
  }
