const app = require('./config/express');

app.get('/api/auth/signin',(req,res)=>{
    res.json({
        status: 'success'
    });
});

module.exports = app;