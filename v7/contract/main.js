const express = require('express');

const app = express();
app.get('/*',(req,res)=>{res.status(200).send('Blockchain transactions module');});

app.listen(3002,()=>{console.log('app running on 3002')});



