const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
var providerURL     ="";
var userAddress     ="";
var userPrivateKey  ="";
var contractAddress ="";

rl.question('Ethereum Provider URL: ', (URL)=>{
    rl.question('User address: ', (address)=>{
        rl.question('User private key: ',(privatekey)=>{
            rl.question('contract address: ',(contract)=>{
                providerURL     = URL;
                userAddress     = address;
                userPrivateKey  = privatekey;
                contractAddress = contract; 
                rl.close();
            });
        });
    });

});