const express = require('express');
const user = require('./evocoin');
const newValue = require('./newValue');

const app = express();

app.use('/evocoin', user);
app.use('/newValue', newValue);

app.listen(3001,()=>{console.log('app running')});



