const motrain =  require('./motrain');
const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/agentPaid',(req,res)=>{
    console.log('paid2');
    motrain.paid().then(totalPaid=>{
        res.json(
            {
                address:  "0x02d7eebb94050ed2Ef3b9a1399a6a4F0754Bd6a7",
                campaign: "Piloto EAN: Ciudades Sostonibles",
                paid: totalPaid
            }
        );
    });
    
});


router.get('/budget',(req,res)=>{
    console.log('budget');
    res.json(
        {
            address:  "0x02d7eebb94050ed2Ef3b9a1399a6a4F0754Bd6a7",
            campaign: "Piloto EAN: Ciudades Sostonibles",
            budget: 880000000
        }
    );
});

router.get('/redeemed',(req,res)=>{
    console.log('redeemed');
    res.json(
        {
            address:  "0x02d7eebb94050ed2Ef3b9a1399a6a4F0754Bd6a7",
            campaign: "Piloto EAN: Ciudades Sostonibles",
            redeemed: 0
        }
    );
});


module.exports = router;
