const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());

app.get('/api/auth/signin',(req,res)=>{
    res.json(req.body);
});

module.exports = app;
