
const express = require('express')
const router = express.Router()
const { registerLogic, loginLogic, updateName, Authentication } = require('../controllers/userController')

router.post('/user/signup', registerLogic)
router.post('/user/login', loginLogic)
router.post('/user/update',Authentication, updateName)

module.exports = router