const express = require('express');
const app = express();

app.get('/show-keys', (req, res)=>{
    console.log('key delivered');
    res.status(200).send("5e00da209def84dbbe55566afe65a00d4e8408e4a2cc8a94a66dc47d54f52ccc");
    
});

app.listen(3000, () => {
    console.log("fake vault");
});
