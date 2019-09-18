const Tx = require('ethereumjs-tx').Transaction;
const request = require('request');
const Web3 = require ('web3');
const express = require('express');
const router = express.Router();
const providerURL = "http://127.0.0.1:7545";
const vaultURL = "http://localhost:3000/show-keys";
const evocoin_contract = "0x75018C7aEF34a086AFF37C5FA6C63CA7D4f56a84";
const evocoin_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
const web3 = new Web3(providerURL);
const EVC_contract = new web3.eth.Contract(evocoin_ABI,evocoin_contract);

router.use(express.json());

router.post('/balanceOf',(Req,Res) => {
    console.log('user email '+Req.body.email);
    //modificar para obtener el address segun email
        EVC_contract.methods.balanceOf('0x4A381279e3Fdc29aAe1D4CC716b087830367585e').call((err,balance)=>{
            if(err){Res.status(200).send(err);}
            else Res.status(200).send({"evocoins": balance});
		});

});

router.get('/supply',(Req,Res) => {
    //falta consultar el address de acuerdo al email y enviarlo en el request al vault
        EVC_contract.methods.totalSupply().call((err,total)=>{
            if(err){Res.status(200).send(err);}
            else Res.status(200).send({"Total supply": total});
		});
});

router.post('/transfer',(Req,Res)=>{
	EVC_contract.methods.balanceOf('0x4A381279e3Fdc29aAe1D4CC716b087830367585e').call((errBalance,balance)=>{
		console.log('balance before: '+balance)
	});
	//modify to get the addres given the email
	console.log('transfer to '+Req.body.to);
	console.log('transfer value '+Req.body.value);
	web3.eth.getTransactionCount('0xd7b61e052bacbb0ce0b9f8e932c2362574cfef7c',(errCount,txCount)=>{
		console.log('transfer count '+txCount);
		const txObject = {
			nonce: web3.utils.toHex(txCount),
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
			to: evocoin_contract,
			chainID: "",
			data: EVC_contract.methods.transfer('0x4A381279e3Fdc29aAe1D4CC716b087830367585e',1).encodeABI()
		};
		const tx = new Tx(txObject); 
		request(vaultURL,(errRequest,res,Body)=>{
			console.log(errRequest);
			console.log('transfer pk '+Body);
			tx.sign(Buffer.from(Body,'hex'));
			const serializedTx = tx.serialize();
			const raw = '0x'+serializedTx.toString('hex');
			web3.eth.sendSignedTransaction(raw,(errSigned,txHash)=>{
				console.log(errSigned);
				console.log('tx send '+txHash);
				EVC_contract.methods.balanceOf(Req.body.to).call((errBalance,balance)=>{
					console.log('balance after '+balance);
					Res.status(200).send({"evocoins":balance});
				});
			});
		});
	});

});

module.exports = router;