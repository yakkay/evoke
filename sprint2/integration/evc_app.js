const tr = require('./transaction');
const evc =require('./evc_contract')

const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const web3 = new Web3(evc.url);
const contract = new web3.eth.Contract(evc.ABI,evc.address);

router.use(express.json());

router.post('/transfer',(req,res)=>{
        tr.transaction(
            web3,
            evc.address,
            req.body.addressfrom,//sender
            req.body.privatekey,//key
            contract.methods.transfer(req.body.addressto/*user address*/,req.body.amount).encodeABI()
        ); 
        contract.methods.balanceOf(req.body.addressto).call((err,balance)=>{
            if(err){res.status(200).send(err);}
            else res.status(200).send({"balance": balance});
        }); 
});

router.post('/balanceOf',(req,res)=>{
    contract.methods.balanceOf('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d').call((err,balance)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"evocoin": balance});
    });
});

router.get('/totalSupply',(req,res)=>{
    contract.methods.totalSupply().call((err,supply)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"Total supply": supply});
    });
});

module.exports = router;