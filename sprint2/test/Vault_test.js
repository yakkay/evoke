const express = require('express');
const app = express();

app.use(express.json());

app.post('/show-keys', (req, res)=>{
    console.log('Account delivered');
    res.status(200).send(

    );	 
});

app.post('/store-key',(req,res)=>{
    console.log(req.body);
    res.status(200).send("account received");
});

app.listen(3000, () => {
    console.log("Vault Test");
});

