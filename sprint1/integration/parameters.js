const tr = require('./transaction');
const evc =require('./evc_contract')

const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const web3 = new Web3(evc.url);
const contract = new web3.eth.Contract(evc.ABI,evc.address);

router.post('/transfer',(req,res)=>{
    tr.transaction(
        web3,
        evc.address,
        '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',//sender
        '41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',//key
        contract.methods.transfer('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d'/*user address*/,1).encodeABI()//method
    );
    contract.methods.balanceOf('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d').call((err,balance)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"evocoin": balance});
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