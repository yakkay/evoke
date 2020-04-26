const axios = require('axios');
const credentials = require('./credentials');
const bearer = credentials.bearer;
const account = credentials.account;
const host= credentials.host;
const section = credentials.section;
const user = credentials.user;
const options = {
    headers: {
        accept: "application/json",
        Authorization: bearer,
    }
  };


  exports.paid = ()=>{
    var coins = 0;
    var paid = 0;
    return new Promise((resolve,reject)=>{
      axios.get(host+'/sections/'+section+'/users',options).then(function (response1) {
      for (var i = 0 in response1.data){
        coins += response1.data[i].coins;
      }
      console.log("paid page 1: "+coins);
      paid +=1;
      if(paid ==3){
        console.log('Paid chapter 1 and 2: '+coins);
        return resolve(coins);
      }  
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});

    axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFBUkFnUUFBQUFBQUE9PSNSVDoxI1RSQzoxMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJDc0FCRUNFZ0lpQUFBWVFBQVpnQXVBR0lBcWdBQ0FBY0FFNGtGQS93ZGhpcm1BVVFDQUFUZUZOSUFKZ0FHQUNJQVBnQUNBOW9BUGdBSEFJQkRmZ091QVI0RWNnZEtBU29JWWdBTEFBQklBSUdTQUVRQUFJaTZBNFFDSUFIYUNyb0FpZ0x1QnlZSW9nQmVBS0lCVGdNaUNISUFnZ091QUw0UXVnQUxBQVVBQWdLeUFNUUFDQkJLQVRZQmZnQjJBQ1lER2drRUNJR0FaZ0JxQUVZRGhBQURnRVVBREFDSUF3UDhmQUdFRUFCNFJCQUNJbWppRSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response2) {
      for (var i = 0 in response2.data){
        coins += response2.data[i].coins;
      }
      console.log("paid page 2: "+coins);
      paid +=1;
      if(paid ==3){
        console.log('Paid chapter 1 and 2: '+coins);
        return resolve(coins);
      }   
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });

    axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFDZkZBUUFBQUFBQUE9PSNSVDoyI1RSQzoyMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJCK0FKK1VBSUQyZ0ErQUFjQWdFTitBNjRCSGdSeUIwb0JLZ2hpQUFzQUFFZ0FnWklBUkFBQWlMb0RoQUlnQWRvS3VnQ0tBdTRISmdpaUFGNEFvZ0ZPQXlJSWNnQ0NBNjRBdmhDNkFBc0FCUUFDQXJJQXhBQUlFRW9CTmdGK0FIWUFKZ01hQ1FRSWdZQm1BR29BUmdPRUFBT0FSUUFNQUlnREEveDhBWVFRQUhoRUVBSWlhT0lRPSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response3) {
      for (var i = 0 in response3.data){
        coins += response3.data[i].coins;
      }
      console.log("paid page 3: "+coins);  
      paid +=1;
      if(paid ==3){
        console.log('Paid chapter 1 and 2: '+coins);
        return resolve(coins);
      } 
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });

  });
  }
