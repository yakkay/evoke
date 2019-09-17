const express = require('express');
const app = express();

app.get('/show-keys', (req, res)=>{
    console.log('key delivered');
    res.status(200).send("0xd7b61e052bacbb0ce0b9f8e932c2362574cfef7c");
    
});

app.listen(3000, () => {
    console.log("fake vault");
});
