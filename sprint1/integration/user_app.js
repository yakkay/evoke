const express = require('express');
const router = express.Router();
const user = require('./user_contract');

const Web3 = require('web3');
const contract = new Web3.eth.Contract(user.ABI, user.address);

router.use(express.json());

//Calls
router.post('/skill_points',(Req,Res)=>{
    contract.methods.get_skill_points(Req.sunbird_id).call((err,points)=>{
        if(err) Res.status(200).send(err);
        else Res.status(200).send({"skill_points":points});
    });
});

router.post('create_account',(Req,Res)=>{
    //create account with web3 and send the privatekey along with the address and sunbird id to the vault
    //in future change to an encripted keystore file to acces each key only with correspondig password
});
