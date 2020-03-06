const express = require('express');
const evc = require('./evc_app');
const user = require('./user');


const app = express();

app.use('/evocoin', evc);
app.use('/user', user);
app.get('/*',(req,res)=>{res.status(200).send('API Blockchain: Bad URL');});

app.listen(3001,()=>{console.log('app running on 3001')});



