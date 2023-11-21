
const bcrypt = require('bcryptjs')
const json = require('jsonwebtoken')
const jwtsecret = '32716b297df0651e2867c59195e1c07a983e68642abfbdb6fa16892bb453cda91e3b1c'


const User=require('../models/user')

const registerLogic = async function (req, res) {
    try {

        const userData = new User()
        userData.name = req.body.name
        userData.email = req.body.email
        userData.mobile = req.body.mobile

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
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
}

const loginLogic = async function (req, res) {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findOne({ email})
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
        console.log(error);
        res.status(500).json(error)

    }
}
module.exports = {
    registerLogic, loginLogic
}