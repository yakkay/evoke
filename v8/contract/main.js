const CronJob = require ('cron').CronJob
const tr = require('./transaction')
const contract =require('./contract')
const Web3 = require('web3')
const web3 = new Web3(contract.url)
const Web3Contract = new web3.eth.Contract(contract.ABI,contract.address)
const axios = require('axios')
const credentials = require('./credentials')
const bearer = credentials.bearer
const host= credentials.host
const section = credentials.section
const options = {
    headers: {
        accept: "application/json",
        Authorization: bearer,
    }
  }

function createAccount () {
    return web3.eth.accounts.create()
}

function transference(from, pk, to, amount){
    tr.transaction(
        web3,
        contract.address,
        from,
        pk,
        Web3Contract.methods.transfer(to,amount).encodeABI()
    ).then(result => {
        console.log(result)
        eventEmitter.emit(result)
        }
    ).catch(error => {
        console.log(error)
    })
}

/*

var job = new CronJob('45 32 * * * *',()=>{
    eventEmitter.emit(true)
})
job.start()
console.log('Cron startet at: '+new Date())
*/


//page 1
axios.get(host+'/sections/'+section+'/users',options).then(response1 => {
    response1.data.forEach(element => {
        let account = createAccount()
        axios.post('http://172.18.0.16:3000/create-mootivated-bc-users/',
          {
            "motrain": element.id,
            "pv_key": account.privateKey,
            "address": account.address
          }
        ).then(response => {
            console.log(element.id+': '+element.address)
        }).catch(error => {
            console.log(error)
        })
    })
}).catch(error => {console.log(error);})

/*
//page 2
axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFBUkFnUUFBQUFBQUE9PSNSVDoxI1RSQzoxMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJDc0FCRUNFZ0lpQUFBWVFBQVpnQXVBR0lBcWdBQ0FBY0FFNGtGQS93ZGhpcm1BVVFDQUFUZUZOSUFKZ0FHQUNJQVBnQUNBOW9BUGdBSEFJQkRmZ091QVI0RWNnZEtBU29JWWdBTEFBQklBSUdTQUVRQUFJaTZBNFFDSUFIYUNyb0FpZ0x1QnlZSW9nQmVBS0lCVGdNaUNISUFnZ091QUw0UXVnQUxBQVVBQWdLeUFNUUFDQkJLQVRZQmZnQjJBQ1lER2drRUNJR0FaZ0JxQUVZRGhBQURnRVVBREFDSUF3UDhmQUdFRUFCNFJCQUNJbWppRSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response2) {
    for (var i = 0 in response2.data){
        var account2 = createAccount()
        axios.post('http://172.18.0.16:3000/create-mootivated-bc-users/',
          {
            "motrain": response2.data[i].id,
            "pv_key": account2.privateKey,
            "address": account2.address
          }
        ).then(response => {
            console.log('pagina 2 :'+response.data.motrain)
        }).catch(error => {
            console.log(error)
        })
    }
}).catch(error => {console.log(error);})

//page 3
axios.get('http://api.motrain.com/v1/sections/cba4231a-b125-fb6c-051a-cb79d7733ca3/users?continuation=eyJ0b2tlbiI6IitSSUQ6flFiNTlBTkFuZVFDZkZBUUFBQUFBQUE9PSNSVDoyI1RSQzoyMDAjSVNWOjIjSUVPOjY1NTUxI1FDRjoxI0ZQQzpBZ0VRRVJCK0FKK1VBSUQyZ0ErQUFjQWdFTitBNjRCSGdSeUIwb0JLZ2hpQUFzQUFFZ0FnWklBUkFBQWlMb0RoQUlnQWRvS3VnQ0tBdTRISmdpaUFGNEFvZ0ZPQXlJSWNnQ0NBNjRBdmhDNkFBc0FCUUFDQXJJQXhBQUlFRW9CTmdGK0FIWUFKZ01hQ1FRSWdZQm1BR29BUmdPRUFBT0FSUUFNQUlnREEveDhBWVFRQUhoRUVBSWlhT0lRPSIsInJhbmdlIjp7Im1pbiI6IiIsIm1heCI6IkZGIn19',options).then(function (response3) {
    for (var i = 0 in response3.data){    
        var account3 = createAccount()
        axios.post('http://172.18.0.16:3000/create-mootivated-bc-users/',
          {
            "motrain": response3.data[i].id,
            "pv_key": account3.privateKey,
            "address": account3.address
          }
        ).then(response => {
            console.log('pagina 3 :'+response.data.motrain)
        }).catch(error => {
            console.log(error)
        })  
    }
}).catch(error => {console.log(error);})

*/