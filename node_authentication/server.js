const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser');
const json = require('jsonwebtoken')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log("dadtabase conncetd"))
    .catch((err) => {
        console.log("error", err);
    })

const UserDatabase = mongoose.model('UserDatabase', { name: String, email: String, password: String });

const port = 9000

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hello world")
})

app.post('/user/signup', async function (req, res) {
    try {
        const passwordtemp = req.body.password
        const hash = await bcrypt.hash(passwordtemp, 10)
        const userData = new UserDatabase()
        userData.name = req.body.name
        userData.email = req.body.email
        userData.password = hash
        await userData.save()
        res.status(200).json({
            message: "user successfully created",

        })
    }


    catch (error) {
        console.log("error");
        res.status(500).json(error)
    }
})
app.post('/user/login', async function (req, res) {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await UserDatabase.findOne({ email: email })
        if (!user) {
            res.status(200).json({
                message: "user not available"

            })
        } else if
            (await bcrypt.compare(password, user.password)) {
            const tokenPayload = {
                email: user.email,
            }

            const acessToken = json.sign(tokenPayload, 'SECRET')
            res.status(200).json({
                status: 'sucess',
                message: 'User Logged in',
                data: {
                    acessToken,
                }

            })


        } else {
            res.status(405).json({ message: "Login not succesful" })
        }


    }catch (error) {
        console.log("some error is there");
        res.status(500).json(error)

    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})