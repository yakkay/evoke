const tr = require('./transaction');
const evc =require('./evc_contract')

const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const web3 = new Web3(evc.url);
const contract = new web3.eth.Contract(evc.ABI,evc.address);

router.use(express.json());

router.post('/balanceOf',(req,res)=>{
    contract.methods.balanceOf(req.body.address).call((err,balance)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"evocoin": balance});
    });
    console.log('/evocoin/balanceOf');
});

router.get('/totalSupply',(req,res)=>{
    contract.methods.totalSupply().call((err,supply)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"Total supply": supply});
    });
});

router.get('/get_mission_score_reward',(req,res)=>{
    contract.methods.get_mission_score_reward(req.body.mission_id,req.body.score).call((err,reward)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"Reward": reward}); 
    });
});

router.get('/get_mission_user_paid',(req,res)=>{
    contract.methods.get_mission_user_paid(req.body.mission_id,req.body.user).call((err,paid)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"Paid": paid}); 
    });
});

router.post('/set_mission_score_reward',(req,res)=>{
    tr.transaction(
        web3,
        evc.address,
        req.body.addressfrom,//sender
        req.body.privatekey,//key
        contract.methods.set_mission_score_reward(req.body.mission_id,req.body.score,req.body.reward).encodeABI()
    ).then((data)=>{
        res.status(200).send('Blockchain transaction:'+data);}).catch((error)=>{
            res.status(500).send('Error en la transacción Blockchain: '+error);});
});

router.post('/pay_mission_score_user',(req,res)=>{
    tr.transaction(
        web3,
        evc.address,
        req.body.addressfrom,//sender
        req.body.privatekey,//key
        contract.methods.pay_mission_score_user(req.body.mission_id,req.body.score,req.body.user).encodeABI()
    );res.status(200).send('Payment sent to the blockchain');
});

router.post('/transfer',(req,res)=>{
    tr.transaction(
        web3,
        evc.address,
        req.body.addressfrom,//sender
        req.body.privatekey,//key
        contract.methods.transfer(req.body.addressto,req.body.amount).encodeABI()
    ); 
    contract.methods.balanceOf(req.body.addressto).call((err,balance)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"balance": balance});
    }); 
    console.log('/evocoin/transfer');
});

module.exports = router;