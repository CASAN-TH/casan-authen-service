const mongoose = require('mongoose');

exports.connect = (callback) => {
    mongoose.connect('mongodb://localhost/database-test',(err)=>{
        if(err){
            console.log(err.message);
        }else{
            if(callback) callback();
        }
    })
}