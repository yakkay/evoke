const express = require('express');
const evc = require('./evc');
const user = require('./user');
const camp = require('./camp');



const app = express();
app.use('/evc', evc);
app.use('/user', user);
app.use('/campaign', camp);
app.get('/*',(req,res)=>{res.status(200).send('API Blockchain: Bad URL');});

app.listen(3001,()=>{console.log('app running on 3001')});



