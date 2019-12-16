const Tx = require('ethereumjs-tx');

  exports.transaction = function(web3,contract_address,sender,privatekey,method){ 
        console.log('sender: '+sender);
        console.log('privatekey:'+privatekey);
        console.log('method: '+method);
        web3.eth.getTransactionCount(sender,(err,txCount)=>{
            console.log(txCount);
            if(err){console.log('error count ',err);}
            const txObject = {
                'nonce': web3.utils.toHex(txCount),
                'gasPrice': web3.utils.toHex(web3.utils.toWei('10','gwei')),
                'gasLimit': web3.utils.toHex(800000),
                'to' : contract_address,
                data: method
            };
            const tx = new Tx(txObject); 
            tx.sign(Buffer.from(privatekey,'hex'));
                const serializedTx = tx.serialize();
                const raw = '0x'+serializedTx.toString('hex');
                web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
                    if(err){console.log('error sending ',err);}
                }).on('receipt',(receipt)=>{
                    console.log('Transaction ended: '+receipt.status);
                });
        });  
}