const express = require('express');
const camp = require('./camp');



const app = express();
app.use('/campaign', camp);
app.get('/*',(req,res)=>{res.status(200).send('Evoke Colombia 2020 | Dashboard API');});

app.listen(3001,()=>{console.log('port 3000')});



