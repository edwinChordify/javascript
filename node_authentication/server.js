const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const json = require('jsonwebtoken')
const app = express()
app.use(cors())
app.use(express.json())
require('./models/index')
require('dotenv').config()





const port = 9000


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hello world")
})



app.use('/',require('./routes/userRoutes'))



app.listen(port, () => {
    console.log(`server is running at ${port}`);
})