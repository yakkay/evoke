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

request.get('http://localhost:3001/evocoin/get_mission_score_reward', {
  json: {
          mission_id: 1,
          score: 10
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

/*
request.post('http://localhost:3001/evocoin/set_mission_score_reward', {
  json: {
          addressfrom: '0xe401862558e44fa2547b66a6c1d50c8492718997',
          privatekey: '57a29559e91df761c933986caf25debac5e21f4056d4487150cdcaab5cd37096',
          mission_id: 1,
          score: 10,
          reward: 2
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
*/
/*
request.post('http://localhost:3001/evocoin/pay_mission_score_user', {
  json: {
          addressfrom: '0xe401862558e44fa2547b66a6c1d50c8492718997',
          privatekey: '57a29559e91df761c933986caf25debac5e21f4056d4487150cdcaab5cd37096',
          mission_id: 1,
          score: 1,
          user: '0xf505E4C07Aa51C0B22573222D51D1e6335e1c45F'
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
*/

request.post('http://localhost:3001/evocoin/transfer', {
  json: { 
      'addressfrom': '0xE401862558e44fa2547b66a6C1D50c8492718997',
      'privatekey':'57a29559e91df761c933986caf25debac5e21f4056d4487150cdcaab5cd37096',
      'addressto': '0x4Fe82Da8CDcf9E4120ECc4841B4CBE019eD8e555',
      'amount':46
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