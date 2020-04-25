const motrain =  require('./motrain');
const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/agentPaid',(req,res)=>{
    console.log('balance: 880.000.000');
    res.json(
        {
            address:  "0x02d7eebb94050ed2Ef3b9a1399a6a4F0754Bd6a7",
            campaign: "EAN",
            paid: 400000000
        }
    );
});


router.get('/budget',(req,res)=>{
    console.log('budget: 880.000.000');
    res.json(
        {
            address:  "0x02d7eebb94050ed2Ef3b9a1399a6a4F0754Bd6a7",
            campaign: "EAN",
            budget: 880000000
        }
    );
});

router.get('/redeemed',(req,res)=>{
    console.log('redeemed: 880.000.000');
    res.json(
        {
            address:  "0x02d7eebb94050ed2Ef3b9a1399a6a4F0754Bd6a7",
            campaign: "EAN",
            redeemed: 0
        }
    );
});


module.exports = router;
