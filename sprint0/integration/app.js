const express = require('express');
const user = require('./evocoin');

const app = express();

app.use('/evocoin', user);

app.listen(3001,()=>{console.log('app running')});



