const express = require('express');
const app = express();

app.get('/show-keys', (req, res)=>{
    console.log('key delivered');
    res.status(200).send("XXX");	
   
});

app.listen(3000, () => {
    console.log("Vault Test");
});
