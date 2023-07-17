const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
       
    },
    mobile: {
        type: Number,
       
    },
    work: {
        type: String,
        
    },
    add: {
        type: String,
        
    },
    desc: {
        type: String,
       
    },
    password:{
        type:String
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;