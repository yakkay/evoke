const axios = require('axios');
const credentials = require('./credentials');
const bearer = credentials.bearer;
const account = credentials.account;
const host= credentials.host;
const section = credentials.section;
const options = {
    headers: {
        accept: "application/json",
        Authorization: bearer,
    }
  };

  exports.users = (pagina)=>{
    return new Promise((resolve,reject)=>{
      switch (pagina){
        case "1":
          axios.get(host+'/sections/'+section+'/users',options).then(function (response1) {
            return resolve(JSON.stringify(response1.data))
          }).catch(function (error) {console.log(error);}).finally(function () {})
          break
        case "2":
          axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFBUkFnUUFBQUFBQUE9PSNSVDoxI1RSQzoxMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJDc0FCRUNFZ0lpQUFBWVFBQVpnQXVBR0lBcWdBQ0FBY0FFNGtGQS93ZGhpcm1BVVFDQUFUZUZOSUFKZ0FHQUNJQVBnQUNBOW9BUGdBSEFJQkRmZ091QVI0RWNnZEtBU29JWWdBTEFBQklBSUdTQUVRQUFJaTZBNFFDSUFIYUNyb0FpZ0x1QnlZSW9nQmVBS0lCVGdNaUNISUFnZ091QUw0UXVnQUxBQVVBQWdLeUFNUUFDQkJLQVRZQmZnQjJBQ1lER2drRUNJR0FaZ0JxQUVZRGhBQURnRVVBREFDSUF3UDhmQUdFRUFCNFJCQUNJbWppRSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response1) {
            return resolve(JSON.stringify(response1.data))
          }).catch(function (error) {console.log(error);}).finally(function () {})
          break
        case "3":
          axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFDZkZBUUFBQUFBQUE9PSNSVDoyI1RSQzoyMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJCK0FKK1VBSUQyZ0ErQUFjQWdFTitBNjRCSGdSeUIwb0JLZ2hpQUFzQUFFZ0FnWklBUkFBQWlMb0RoQUlnQWRvS3VnQ0tBdTRISmdpaUFGNEFvZ0ZPQXlJSWNnQ0NBNjRBdmhDNkFBc0FCUUFDQXJJQXhBQUlFRW9CTmdGK0FIWUFKZ01hQ1FRSWdZQm1BR29BUmdPRUFBT0FSUUFNQUlnREEveDhBWVFRQUhoRUVBSWlhT0lRPSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response1) {
            return resolve(JSON.stringify(response1.data))
          }).catch(function (error) {console.log(error);}).finally(function () {})
          break
          default:
            return resolve("{status:'false'}")
      }
    })
  }


  exports.paid = ()=>{
    var coins1 = 0;
    var coins2 = 0;
    var coins3 = 0;
    var used = 0;
    return new Promise((resolve,reject)=>{
      //page 1
      axios.get(host+'/sections/'+section+'/users',options).then(function (response1) {
      for (var i = 0 in response1.data){
        coins1 += response1.data[i].coins;
      }
      console.log("Page 1: "+coins1+" EVC");
        //page 2
        axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFBUkFnUUFBQUFBQUE9PSNSVDoxI1RSQzoxMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJDc0FCRUNFZ0lpQUFBWVFBQVpnQXVBR0lBcWdBQ0FBY0FFNGtGQS93ZGhpcm1BVVFDQUFUZUZOSUFKZ0FHQUNJQVBnQUNBOW9BUGdBSEFJQkRmZ091QVI0RWNnZEtBU29JWWdBTEFBQklBSUdTQUVRQUFJaTZBNFFDSUFIYUNyb0FpZ0x1QnlZSW9nQmVBS0lCVGdNaUNISUFnZ091QUw0UXVnQUxBQVVBQWdLeUFNUUFDQkJLQVRZQmZnQjJBQ1lER2drRUNJR0FaZ0JxQUVZRGhBQURnRVVBREFDSUF3UDhmQUdFRUFCNFJCQUNJbWppRSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response2) {
          for (var i = 0 in response2.data){
            coins2 += response2.data[i].coins;
          }
          console.log("Page 2: "+coins2+" EVC");
            //page 3
            axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFDZkZBUUFBQUFBQUE9PSNSVDoyI1RSQzoyMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJCK0FKK1VBSUQyZ0ErQUFjQWdFTitBNjRCSGdSeUIwb0JLZ2hpQUFzQUFFZ0FnWklBUkFBQWlMb0RoQUlnQWRvS3VnQ0tBdTRISmdpaUFGNEFvZ0ZPQXlJSWNnQ0NBNjRBdmhDNkFBc0FCUUFDQXJJQXhBQUlFRW9CTmdGK0FIWUFKZ01hQ1FRSWdZQm1BR29BUmdPRUFBT0FSUUFNQUlnREEveDhBWVFRQUhoRUVBSWlhT0lRPSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response3) {
              for (var i = 0 in response3.data){
                coins3 += response3.data[i].coins;
              }
              console.log("Page 3: "+coins3+" EVC");  
              used = coins1+coins2+coins3;
              console.log("Used: "+used+" EVC");
              return resolve(used);
            }).catch(function (error) {console.log(error);}).finally(function () {});
        })
      .catch(function (error) {console.log(error);}).finally(function () {});
    })
    .catch(function (error) {console.log(error);}).finally(function () {});
  });
  }
