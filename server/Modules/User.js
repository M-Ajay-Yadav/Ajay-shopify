 const mongoose = require("mongoose");
 const Schema = mongoose.Schema
 const UserSchema = new schema({
    name:{
        type: String,
        required: true,  
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        require: true
    }
 });

module.exports = mongoose.module("users",UserSchema);
 