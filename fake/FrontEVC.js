const request = require('request')

request.post('http://127.0.0.1:3001/evocoin/balanceOf', {
  json: {
    email: "smilenaguevara@gmail.com"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.get('http://127.0.0.1:3001/evocoin/supply', {

}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});