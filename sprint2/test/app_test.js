const request = require('request');

request.post('http://localhost:3001/evocoin/balanceOf', {
  json: {
          address: "0xFfbda0B2E2cef039d4720CA02d5650FE90962F86"
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

request.post('http://localhost:3001/user/getUserID', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
/*
request.post('http://localhost:3001/user/getUserMissions', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
*/
request.post('http://localhost:3001/user/get_skill_points', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.post('http://localhost:3001/user/get_mission_score', {
  json: {
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});


request.post('http://localhost:3001/evocoin/transfer', {
  json: { 
      'addressfrom': '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',
      'privatekey':'41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',
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
request.post('http://localhost:3001/user/approveMission', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
*/

/*
request.post('http://localhost:3001/user/set_skill_points', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});*/

/*
request.post('http://localhost:3001/user/set_mission_score', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
*/


request.post('http://localhost:3001/user/create_account', {
  json: {

  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});