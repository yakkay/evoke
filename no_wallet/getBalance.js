const Web3 = require('web3');
const rpc='http://127.0.0.1:7545';
const web3= new Web3(rpc);
const user= '0xFfbda0B2E2cef039d4720CA02d5650FE90962F86';

web3.eth.getBalance(user,(err,wei)=>{
        console.log("Balance = "+web3.utils.fromWei(wei,'ether')+" Ether");
    });