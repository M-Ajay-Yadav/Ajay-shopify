const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter')

require('dotenv').config();
require("./Modules/User");
const connectDb = require("./Modules/db")

const PORT = process.env.PORT || 5000


app.get("/",(req, res) => {
       res.send('Hello world ...')
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter );


try {
    connectDb().then(() => {

        app.listen(PORT,() => {
            console.log(`server is running on server http://localhost:${PORT}`);
        });

    })
    
} catch (error) {
    console.log("server",error);
}