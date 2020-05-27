const Web3 = require('web3')
const contract =require('./contract')
const web3 = new Web3(contract.url)

function createAccount () {
    return web3.eth.accounts.create()
}

var account1 = createAccount()
console.log(
    'account1 '+account1,
    ' address '+account1.address,
    ' pk '+account1.privateKey
)