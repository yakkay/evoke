const tr = require ('./transaction');
const user = require('./user_contract');

const request = require('request');

const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const web3 = new Web3(user.url);
const contract = new web3.eth.Contract(user.ABI,user.address);

router.post('./createUser',(req,res)=>{
    tr.transaction(
        web3,
        user.address,
        '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',//sender
        '41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',//key
        contract.methods.createuser("putsunbirid",'0x29d59cff15Cd3fF4be5373df19982D6D7301da8d'/*user address*/).encodeABI()
    );

});

router.post('/set_skill_points',(req,res)=>{
    tr.transaction(
        web3,
        user.address,
        '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',//sender
        '41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',//key
        contract.methods.set_skill_points('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d'/*user address*/,1).encodeABI()//method
    );
    res.status(200).send("skill_points settle");
});

router.post('/get_skill_points',(req,res)=>{
    contract.methods.get_skill_points('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d').call((err,points)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"skill_points": points});
    });
});

router.post('/getUserId',(req,res)=>{
    contract.methods.getUserId('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d').call((err,id)=>{
        if(err){res.status(200).send(err);}
        else res.status(200).send({"sunbird_id": id});
    });
});

router.post('/approveMission',(req,res)=>{
    tr.transaction(
        web3,
        user.address,
        '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',//sender
        '41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',//key
        contract.methods.approveMission('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d',37).encodeABI()
    );
    res.status(200).send("mission approved");
});

router.post('/getUserMissions',(req,res)=>{
    contract.methods.getUserMissions('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d'/*user address*/).call((err,missions)=>{
        if(err) res.status(200).send(err);
        else res.status(200).send({"Missions": missions});
    });
});

router.post('/set_mission_score',(req,res)=>{
    tr.transaction(
        web3,
        user.address,
        '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86',//sender
        '41e43e05a49a0951e6ce29471c034306fa3ee91929e066ea015b1315e6e6ff0f',//key
        contract.methods.set_mission_score('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d',37,5).encodeABI()
    );
    res.status(200).send("mission score settled");
});

router.post('/get_mission_score',(req,res)=>{
    contract.methods.get_mission_score('0x29d59cff15Cd3fF4be5373df19982D6D7301da8d'/*user address*/,37).call((err,score)=>{
        if(err)res.status(200).send(err);
        res.status(200).send({"Mission_score": score});
    });
});

router.post('/create_account',(req,res)=>{
    const account = web3.eth.accounts.create();
    const address = account.address;
    const key = account.privateKey;
    res.status(200).send(account);
    request.post('http://localhost:3000/store-key', {
        json: {
                "privatekey":key,
                "address": address
        }
      }, (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }else console.log(body);
      });
});

module.exports = router;


