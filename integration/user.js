const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/',(req,res) => {
    console.log(req.body.value);
    res.status(200).send(req.body.value);
});

router.get('/',(req,res)=>{
    console.log(req.query.value);
    res.status(200).send(req.query.value);
});

module.exports = router;