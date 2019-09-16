const request = require('request')

request.post('http://127.0.0.1:3001/newValue', {
  json: {
    value: "12345678910"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
});
