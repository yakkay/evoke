const Tx = require('ethereumjs-tx');

exports.transaction = function(url,ABI,contract_address,sender,key,_metodo,user_address) {

    const Web3 = require('web3');
    const web3 = new Web3(url);
    const contract = new web3.eth.Contract(ABI,contract_address);
    switch (_metodo){
        case "transfer":
            metodo = contract.methods.transfer('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d',1).encodeABI();

            break;
        case "transfer2":
            metodo = contract.methods.transfer(user_address,2).encodeABI();
            break;
    }
    web3.eth.getTransactionCount(sender,(err,txCount)=>{
        const txObject = {
            'nonce': web3.utils.toHex(txCount),
            'gasPrice': web3.utils.toHex(web3.utils.toWei('10','gwei')),
            'gasLimit': web3.utils.toHex(800000),
            'to' : contract_address,
            data: metodo
        };
        const tx = new Tx(txObject); 
        tx.sign(Buffer.from(key,'hex'));
            const serializedTx = tx.serialize();
            const raw = '0x'+serializedTx.toString('hex');
            web3.eth.sendSignedTransaction(raw,(errSigned,txHash)=>{
                
            });
    });    
}


 
