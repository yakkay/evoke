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

//axios.get(host+'/sections/'+section+'/users'
//axios.get('http://api.motrain.com/v1/sections/947340b3-4d5f-ab9c-30a9-d333b7821c2a/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFCU3N3TUFBQUFBQUE9PSNSVDoxI1RSQzoxMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VPRGc0U0FGRXovUCt4UUQvK2tVRC9BMUlDQVBDREF3PT0iLCJyYW5nZSI6eyJtaW4iOiIiLCJtYXgiOiJGRiJ9fQ%3D%3D'
//axios.get('http://api.motrain.com/v1/sections/947340b3-4d5f-ab9c-30a9-d333b7821c2a/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFDMnN3TUFBQUFBQUE9PSNSVDoyI1RSQzoyMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VPRGc0U0FMRXp3UDlSUUQvK2tVRC9BMUlDQVBDREF3PT0iLCJyYW5nZSI6eyJtaW4iOiIiLCJtYXgiOiJGRiJ9fQ%3D%3D'
//axios.get('http://api.motrain.com/v1/sections/947340b3-4d5f-ab9c-30a9-d333b7821c2a/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFBZHRBTUFBQUFBQUE9PSNSVDozI1RSQzozMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VPRGc0T0FCRTBBT0NSUVA4RFVnSUE4SU1EIiwicmFuZ2UiOnsibWluIjoiIiwibWF4IjoiRkYifX0%3D'
axios.get('https://api.motrain.com/v1/sections/947340b3-4d5f-ab9c-30a9-d333b7821c2a/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFDQnRBTUFBQUFBQUE9PSNSVDo0I1RSQzo0MDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VPRGc0T0FJRTAvdjhoUVA4RFVnSUE4SU1EIiwicmFuZ2UiOnsibWluIjoiIiwibWF4IjoiRkYifX0%3D'
,options).then(function (response) {
    // handle success
    
    /*for(let i = 0; i < response.data.length;i++){
      console.log(response.data[i].firstname+' coins: '+response.data[i].coins);
    }*/
    console.log(response.headers);
    console.log(response.data[0]);
    console.log('longitud: '+response.data.length);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

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
