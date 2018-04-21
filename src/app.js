const express = require('express');

const app = express();

module.exports = app;

app.get('/api/auth/signin',(req,res)=>{
    res.json(req.body);
});

