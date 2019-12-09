const request = require('request');

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
      'addressfrom': '0xe401862558e44fa2547b66a6c1d50c8492718997',
      'privatekey':'57a29559e91df761c933986caf25debac5e21f4056d4487150cdcaab5cd37096',
      'addressto': '0xd7B61E052bacbb0CE0b9F8E932C2362574cFEf7C',
      'amount':1
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

/*
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