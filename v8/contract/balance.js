const contract =require('./contract')
const credentials = require('./credentials')
const Web3 = require('web3')
const web3 = new Web3(credentials.ropstenURL)
const Web3Contract = new web3.eth.Contract(contract.ABI,contract.address)

exports.balanceOf = function (address) {
    return new Promise((resolve,reject) => {
        Web3Contract.methods.balanceOf(address).call((error,balance) => {
            if(error) {
                return reject(error)
            } else {
                return resolve(balance)
            }
        })
    })
}

exports.redeemedOf = function (address) {
    return new Promise((resolve,reject) => {
        Web3Contract.methods.redeemedOf(address).call((error,balance) => {
            if(error) {
                return reject(error)
            } else {
                return resolve(balance)
            }
        })
    })
}

exports.TotalSupply = function() {
    return new Promise((resolve,reject) => {
        Web3Contract.methods.totalSupply().call((error,total) => {
            if(error) {
                return reject(error)
            } else {
                return resolve(total)
            }
        })
    })
}