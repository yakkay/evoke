const express = require('express');
const user = require('./user');
const newValue = require('./newValue');

const app = express();

app.use('/user', user);
app.use('/newValue', newValue);

app.listen(3001,()=>{console.log('app running')});



