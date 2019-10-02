const request = require('request');

request.post('http://localhost:3001/evocoin/balanceOf', {
  json: {
    email_from: 'yakkay@gmail.com',
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

/*request.post('http://localhost:3001/evocoin/transfer', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});*/

request.post('http://localhost:3001/user/getUserID', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.post('http://localhost:3001/user/approveMission', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.post('http://localhost:3001/user/getUserMissions', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

/*request.post('http://localhost:3001/user/set_skill_points', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});*/

request.post('http://localhost:3001/user/get_skill_points', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

/*request.post('http://localhost:3001/user/set_mission_score', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});*/

request.post('http://localhost:3001/user/get_mission_score', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});