const Tx = require('ethereumjs-tx')

exports.transaction = function(web3,contract_address,sender_address,sender_privatekey,value,method){ 
        return new Promise (function(resolve,reject){
            console.log('sender address: '+sender_address)
            web3.eth.getTransactionCount(sender_address,function(error,txCount){
                console.log('TxCount: '+txCount)
                if(error) return reject(error)
                else{
                    const txObject = {
                        'nonce': web3.utils.toHex(txCount),
                        'gasPrice': web3.utils.toHex(web3.utils.toWei('1','gwei')),
                        'gasLimit': web3.utils.toHex(800000),
                        'to': contract_address,
                        'value': web3.utils.toHex(web3.utils.toWei(value, 'ether')),
                        data: method
                    }
                    const tx = new Tx(txObject)
                    tx.sign(Buffer.from(sender_privatekey,'hex'))
                        const serializedTx = tx.serialize()
                        const raw = '0x'+serializedTx.toString('hex')
                        web3.eth.sendSignedTransaction(raw,function(err,txHash){
                            if(err) return reject("Error en la transacción: "+err)
                        }).on('receipt',function(receipt){
                            return resolve (receipt.status)
                        })
                }
            })
        })
}