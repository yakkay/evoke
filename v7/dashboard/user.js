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

router.get('/id/:pagina',(req,res)=>{
    motrain.users(req.params.pagina).then(users=>{
        console.log('página: '+req.params.pagina)
        res.status(200).json(users);
    })  
})

module.exports = router;


