
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtsecret = '32716b297df0651e2867c59195e1c07essea983e68642abfbdb6fa16892bb453cda91e3b1c'


const User = require('../models/user')


const Authentication = async (req, res, next) => {
    try {


        const apitoken = req.body.tokenapi
        const data = jwt.verify(apitoken, jwtsecret)
        const userData = await User.findOne({ email: data.email })
        if (!userData) {
            return res.status(401).json({ message: "User not found" })
        }
        else {

            next()

        }
    } catch (error) {
        res.status(401).json(error)

    }


}

const registerLogic = async function (req, res) {
    const email=req.body.email
    const prevUser = await User.findOne({ email })
    if (prevUser) {
        res.status(402).json("user already exist")
        console.log("user already exist");
    } else {


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
}

const loginLogic = async function (req, res) {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await User.findOne({ email })
        console.log(user);
        if (!user) {
            res.status(200).json({
                message: "user not available"

            })
        } else if
            (await bcrypt.compare(password, user.password)) {
            const tokenPayload = {
                email: email
            }

            const acessToken = jwt.sign({ email: email }, jwtsecret)
            res.status(200).json({
                status: 'success',
                message: 'User Logged in',
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
const updateName = async function (req, res) {


    try {
        const { name, id } = req.body
        const user = await User.findById(id)
        if (user) {
            user.name = name
            await user.save()
            console.log("Name is updated");
            res.status(200).json({
                status: 'success',
                message: 'name updated'

            })
        }

    } catch (error) {
        res.status(401).json(error)
    }



}

module.exports = {
    registerLogic, loginLogic, updateName, Authentication,
}