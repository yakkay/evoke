const express = require('express');
const evc = require('./evocoin');
const user = require('./user');
const app = express();

app.use('/evocoin', evc);
app.use('/user', user);

app.listen(3001,()=>{console.log('app running')});



