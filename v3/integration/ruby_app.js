const tr = require('./transaction');
const ruby =require('./ruby_contract')

const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const web3 = new Web3(ruby.url);
const contract = new web3.eth.Contract(ruby.ABI,ruby.address);

router.use(express.json());

router.post('/transfer',(req,res)=>{
        tr.transaction(
            web3,
            ruby.address,
            req.body.addressfrom,//sender
            req.body.privatekey,//key
            contract.methods.transfer(req.body.addressto,req.body.amount).encodeABI()
        ); 
        contract.methods.balanceOf(req.body.addressto).call((err,balance)=>{
            if(err){res.status(200).send(err);}
            else res.status(200).send({"balance": balance});
        }); 
});

router.post('/balanceOf',(req,res)=>{
    contract.methods.balanceOf(req.body.address).call((err,balance)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"ruby": balance});
    });
});

module.exports = router;