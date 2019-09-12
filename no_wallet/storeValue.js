const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var userAddress     ="0";
var userPrivateKey  ="0";
var contractAddress ="0";

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

rl.question('Ethereum Provider URL: ', (URL)=>{
    rl.question('User address: ', (uAddress)=>{
        rl.question('User private key: ',(privatekey)=>{
            rl.question('contract address: ',(cAddress)=>{
				rl.question('new value: ',(newValue)=>{
					const web3 = new Web3(URL);
					const contract = new web3.eth.Contract(abi, cAddress);	
					contract.methods.getValue().call((err, Value) => {
						console.log("The stored value is: "+Value);
					  });
					web3.eth.getBalance(uAddress,(err,wei)=>{
						console.log("User balance = "+web3.utils.fromWei(wei,'ether')+" Ether");
					});
					web3.eth.getTransactionCount(uAddress, (err, txCount) => {
						const txObject = {
						  nonce:    web3.utils.toHex(txCount),
						  gasLimit: web3.utils.toHex(800000), 
						  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
						  to: cAddress,
						  data: contract.methods.setValue(newValue).encodeABI()
						};
						const tx = new Tx(txObject);
						tx.sign(Buffer.from(privatekey,'hex'));
						const serializedTx = tx.serialize();
						const raw = '0x' + serializedTx.toString('hex');
						web3.eth.sendSignedTransaction(raw, (err, txHash) => {
						  console.log('Success on txHash:'+ txHash);
						  contract.methods.getValue().call((err, value) => {
							  console.log("The new stored value is: "+value);
							});
						});
					  });
					rl.close();
				});
            });
        });
    });

});






