const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');
const accountTo = "0x4A381279e3Fdc29aAe1D4CC716b087830367585e";
const accountFrom = "0x15bb8A098e60D75B743C340cEeE49330ACB5D07c";

const privateKeyFrom = Buffer.from("KEY",'hex');//Replace Key
web3.eth.getBlockTransactionCount(accountFrom,(err,txCount)=>{

   const txObject = {
       nonce:   web3.utils.toHex(txCount),
       to:      accountTo,
       value:   web3.utils.toHex(web3.utils.toWei('2','ether')),
       gasLimit:web3.utils.toHex(1100000),
       gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'))
   };
  const tx = new Tx(txObject);
  tx.sign(privateKeyFrom);
  const serializedTx = tx.serialize();
  const raw = '0x' + serializedTx.toString('hex');
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash);
    console.log(err);
  });
});
