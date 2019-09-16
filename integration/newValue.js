const request = require('request');
const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const express = require('express');
const router = express.Router();
var contractAddress = "0x66Ea1Abb5eBE668f516089BfeC4aA7AA5E560f49";
var providerURL = "http://127.0.0.1:7545";
var vaultURL = "http://localhost:3000/show-keys";

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


router.use(express.json());

router.post('/',(req,res)=>{
	console.log(req.body.value);
	res.status(200).send(req.body.value);
	const web3 = new Web3(providerURL);
	const contract = new web3.eth.Contract(abi, contractAddress);
	contract.methods.getValue().call((err, Value) => {
		console.log("The stored value is: "+Value);
	  });
	web3.eth.getBalance('0xd7b61e052bacbb0ce0b9f8e932c2362574cfef7c',(err,wei)=>{
		console.log("User balance = "+web3.utils.fromWei(wei,'ether')+" Ether");
	});

	
	web3.eth.getTransactionCount('0xd7b61e052bacbb0ce0b9f8e932c2362574cfef7c', (err, txCount) => {
		console.log("txCount: "+txCount);
		const txObject = {
		  nonce:    web3.utils.toHex(txCount),
		  gasLimit: web3.utils.toHex(800000), 
		  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
		  to: contractAddress,
		  chainId: "",
		  data: contract.methods.setValue(req.body.value).encodeABI()
		};
		const tx = new Tx(txObject);
		request(vaultURL, (err, res, Body) => {
			console.log(err);
			console.log(Body);
			tx.sign(Buffer.from(Body,'hex'));
			const serializedTx = tx.serialize();
			const raw = '0x' + serializedTx.toString('hex');
			web3.eth.sendSignedTransaction(raw, (err, txHash) => {
				console.log(err);
				console.log('Success on txHash:'+ txHash);
				contract.methods.getValue().call((err, value) => {
					console.log("The new stored value is: "+value);
				 });
			});
		 });
	 });
  });

module.exports = router;