const contract =require('./contract')
const Web3 = require('web3')
const web3 = new Web3(contract.url)
const Web3Contract = new web3.eth.Contract(contract.ABI,contract.address)

exports.balanceOf = function (from) {
    return new Promise ((resolve,reject) => {
        Web3Contract.methods.balanceOf(from).call((error,balance) => {
            if(error) {
                return reject(error)
            } else {
                return resolve(balance)
            }
        })
    })
}


/*
balanceOf('0xE401862558e44fa2547b66a6C1D50c8492718997').then(result => {
    console.log(result+' EVC')
    }
)
*/