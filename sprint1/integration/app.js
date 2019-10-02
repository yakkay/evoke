const express = require('express');
const evc = require('./parameters');
const user = require('./user_app');
const app = express();

app.use('/evocoin', evc);
app.use('/user', user);



app.listen(3001,()=>{console.log('app running')});



