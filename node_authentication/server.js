const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser');
const json = require('jsonwebtoken')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/temp')
    .then(() => console.log("dadtabase conncetd"))
    .catch((err) => {
        console.log("error", err);
    })

const User = mongoose.model('User', { name: String, email: String, password: String, mobile: Number });

const port = 8000
const jwtsecret = '32716b297df0651e2867c59195e1c07a983e68642abfbdb6fa16892bb453cda91e3b1c'


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hello world")
})




app.post('/user/signup', async function (req, res) {
    try {

        const userData = new User()
        userData.name = req.body.name
        userData.email = req.body.email
        userData.mobile = req.body.mobile

        const hashedPassword =await  bcrypt.hash(req.body.password, 10);
        userData.password = hashedPassword;
        await userData.save()
        res.status(200).json({
            message: "user successfully created",

        })
    }


    catch (error) {
        console.log(error);
        res.send(error)
    }
})
app.post('/user/login', async function (req, res) {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findOne({ email: email })
        console.log(user);
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
                status: 'success',
                message: 'User Logggged in',
                data: {
                    acessToken,
                }

            })


        } else {
            res.status(405).json({ message: "Login not succesful" })
        }


    } catch (error) {
        console.log("some error is there");
        res.status(500).json(error)

    }
})



app.listen(port, () => {
    console.log(`server is running at ${port}`);
})