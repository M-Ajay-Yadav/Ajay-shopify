const mongoose = require("mongoose");

const URL = process.env.MONGO_DB;

const connectDb = async() => {
    try{
       await mongoose.connect(URL);
        console.log("Database connected successfully")
    
    }catch(error) {
        console.log(error,"error from db");
        process.exit(0);
    }
};

module.exports = connectDb
