const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000

const app = express();

app.get("/robo",(req, res) => {
       res.send('Hello world ...')
}
)

app.listen(PORT,() => {
    console.log("server is running on server http://localhost:",PORT);
})