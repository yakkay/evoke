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

request.post('http://127.0.0.1:3001/evocoin/transfer', {
  json: {
    email: 'd70xb61e052bacbb0ce0b9f8e932c2362574cfef7c',
    to: '0x4A381279e3Fdc29aAe1D4CC716b087830367585e',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});