const axios = require('axios');
const options = {
  headers: {
      accept: "application/json"
  },
};
/*
axios.get('http://localhost:3001/user/create_account').then(function(response){
  console.log(response.data.address)
})*/

axios.post('http://172.18.0.16:3000/create-mootivated-bc-users/',
{
  "id_motrain": "30b723ef-fa97-5d3e-9777-9958c20d0c64",
  "pv_key": "0x888a4a896170c8324219908a494638f1c7d0c0a7e9f9011aecb6687be53da169",
  "address": "0x2C7c80b44c430befA6c46aE9BfED8813C1183663"
}
).then(function(response){
  console.log(response.data);
}).catch(function(error){
  console.log(error);
});
/*
axios.get('http://localhost:3001/campaign/',options).then(function(response){
  console.log(response.data);
}).catch(function(error){
  console.log(error);
});*/
/*
axios.get('http://localhost:3001/user/id/1',options).then(function(response){
  console.log(response.data);
}).catch(function(error){
  console.log(error);
});
*/


/*const request = require('request');

request.post('http://localhost:3001/evocoin/balanceOf', {
  json: {
          address: "0xe401862558e44fa2547b66a6c1d50c8492718997"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.get('http://localhost:3001/evocoin/totalSupply', {

}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});


request.post('http://localhost:3001/evocoin/transfer', {
  json: { 
      'addressfrom': '0xE401862558e44fa2547b66a6C1D50c8492718997',
      'privatekey':'57a29559e91df761c933986caf25debac5e21f4056d4487150cdcaab5cd37096',
      'addressto': '0x52EB6EE3895726a5973495680a22a6357CBCaA76',
      'amount':46
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});



request.post('http://localhost:3001/user/create_account', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
*/