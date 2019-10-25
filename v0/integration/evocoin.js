const ABI = require('./ABI');
const evocoin_ABI = ABI.evocoin;
const users_ABI = ABI.users;
const Tx = require('ethereumjs-tx');
const request = require('request');
const Web3 = require ('web3');
const express = require('express');
const router = express.Router();
const providerURL = "https://ropsten.infura.io/v3/2516d9bfa9894fd79838a4df6611801d";
const vaultURL = "http://172.18.0.2:3000/show-keys";
const evocoin_contract = '0xB533303897C42E7fdd35Eb15FC9571C604aeB35b';
const users_contract = '0xB04317E53c2105801c6313637F3Fa636381899A2';
const web3 = new Web3(providerURL);
const EVC_contract = new web3.eth.Contract(evocoin_ABI,evocoin_contract);
const USERS_contract = new web3.eth.Contract(users_ABI,users_contract);
router.use(express.json());

router.post('/balanceOf',(Req,Res) => {
		EVC_contract.methods.balanceOf('0x8FaEc66fe1Ae76D73adb14f9410bDca8d403EEdb').call((err,balance)=>{
			if(err){Res.status(200).send(err);}
			else Res.status(200).send({"evocoin": balance});
		});
	});


router.get('/supply',(Req,Res) => {
    EVC_contract.methods.totalSupply().call((err,total)=>{
        if(err){Res.status(200).send(err);}
        else Res.status(200).send({"Total supply": total});
	});
});

router.post('/transfer',(Req,Res)=>{
	USERS_contract.methods.getUserAccount(Req.body.email_from).call((errAcc,account_from)=>{
		USERS_contract.methods.getUserAccount(Req.body.email_to).call((errAcc,account_to)=>{
			console.log('transfer from '+account_from);
			console.log('transfer to '+account_to);
			console.log('transfer value '+Req.body.value);
			EVC_contract.methods.balanceOf('0x8FaEc66fe1Ae76D73adb14f9410bDca8d403EEdb').call((errBalance,balance)=>{
				console.log('balance before: '+balance)
			});
			web3.eth.getTransactionCount('0x5bF89Fa80A0B468379C06C82E4936f3eE4f484AA',(errCount,txCount)=>{
				console.log('transfer count '+txCount);
				console.log('Error en GTA: '+errCount);
				const txObject = {
					'nonce': web3.utils.toHex(txCount),
					'gasPrice': web3.utils.toHex(web3.utils.toWei('10','gwei')),
					'gasLimit': web3.utils.toHex(800000),
					'to': evocoin_contract,
					'data': EVC_contract.methods.transfer('0x8FaEc66fe1Ae76D73adb14f9410bDca8d403EEdb',1).encodeABI()
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
						EVC_contract.methods.balanceOf('0x8FaEc66fe1Ae76D73adb14f9410bDca8d403EEdb').call((errBalance,balance)=>{
							console.log('balance after '+balance);
							Res.status(200).send({"evocoins":balance});
						});
					});
				});
			 });
		});
	 });
 });



module.exports = router;


