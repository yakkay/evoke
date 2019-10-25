const request = require('request')

request.post('http://127.0.0.1:3001/newValue', {
  json: {
    value: "hola"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
});
