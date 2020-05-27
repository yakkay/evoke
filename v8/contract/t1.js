const Web3 = require('web3')
const contract =require('./contract')
const web3 = new Web3(contract.url)

function createAccount () {
    return web3.eth.accounts.create()
}

var account1 = createAccount()
var account2 = createAccount()
console.log(
    ' address '+account1.address+'\n',
    ' pk '+account1.privateKey+'\n',
    ' address '+account2.address+'\n',
    ' pk '+account2.privateKey+'\n',

)