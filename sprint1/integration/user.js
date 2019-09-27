const express = require('express');
const router = express.Router();
const User_ABI = require('./user_ABI');
const users_ABI = User_ABI.users;
const users_contract = 'XXX';
const Web3 = require('web3');
const USER_contract = new Web3.eth.Contract(users_ABI, users_contract);

router.use(express.json());
router.post('/skill_points',(Req,Res)=>{
    USER_contract.methods.get_skill_points(Req.sunbird_id).call((err,points)=>{
        if(err) Res.status(200).send(err);
        else Res.status(200).send({"skill_points":points});
    });
});
