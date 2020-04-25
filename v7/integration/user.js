const motrain =  require('./motrain');

const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const web3 = new Web3();

router.use(express.json());

router.get('/create_account',(req,res)=>{
    const account = web3.eth.accounts.create();
    res.status(200).send(account);
    console.log('/user/create_account');
});

/*
router.get('/balance',(req,res)=>{
    console.log('Query recibido en /user: '+req.query.id);
    motrain.balance(req.query.id).then((data)=>{
        res.status(200).send(data);
    }).catch((error)=>{
        res.status(500).send(error);
    });
});
*/

module.exports = router;


