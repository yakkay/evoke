const express = require('express');
const user = require('./user');
const camp = require('./camp');



const app = express();
app.use('/user', user);
app.use('/campaign', camp);
app.get('/*',(req,res)=>{res.status(200).send('Campaign info API');});

app.listen(3001,()=>{console.log('app running on 3001')});



