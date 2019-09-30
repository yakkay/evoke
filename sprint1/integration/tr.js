const tr = require('./transacttion');
const evc =require('./evc_contract')

const express = require('express');
const router = express.Router();

//router('/transfer',(req,res)=>{
    tr.transaction(
        evc.url,
        evc.ABI,
        evc.address,
        '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',
        '41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',
        "transfer2",
        '0x29d59cff15Cd3fF4be5373df19982D6D7301da8d'
    );
//});
