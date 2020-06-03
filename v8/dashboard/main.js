const express = require('express')
const camp = require('./campaign')
const port = 3000
const message = '<h1>Evoke Colombia 2020</h1><p> Dashboard enpoint: GET /campaign</p>'

const app = express()
app.use('/campaign', camp)
app.get('/*',(req,res)=>{res.status(200).send(message);});

app.listen(port,()=>{console.log(`Evoke dahsboard API server running ${port} port.`)});



