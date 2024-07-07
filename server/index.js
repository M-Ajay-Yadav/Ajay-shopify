const express = require("express");
require('dotenv').config();
require("./Modules/User");
const connectDb = require("./Modules/db")

const PORT = process.env.PORT || 5000

const app = express();

app.get("/",(req, res) => {
       res.send('Hello world ...')
})
try {
    connectDb().then(() => {

        app.listen(PORT,() => {
            console.log(`server is running on server http://localhost:${PORT}`);
        });

    })
    
} catch (error) {
    console.log("server",error);
}