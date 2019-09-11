const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const accountFrom = ''; 
const privateKeyFrom = Buffer.from("", 'hex');
const contractAddress = "";

const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "newValue",
				"type": "string"
			}
		],
		"name": "setValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "_value",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
const contract = new web3.eth.Contract(abi, contractAddress);
var newValue = "Just another new message";

web3.eth.getTransactionCount(accountFrom, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000), 
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: contract.methods.setValue(newValue).encodeABI()
  };

  const tx = new Tx(txObject);
  tx.sign(privateKeyFrom);

  const serializedTx = tx.serialize();
  const raw = '0x' + serializedTx.toString('hex');

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:'+ txHash);
    contract.methods.getValue().call((err, value) => {
        console.log("The new value is: "+value);
      });
  });
});



