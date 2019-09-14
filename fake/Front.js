const request = require('request')

request.post('http://127.0.0.1:3001/getUser', {
  json: {
    user_address: '0xd7b61e052bacbb0ce0b9f8e932c2362574cfef7c'
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
});
