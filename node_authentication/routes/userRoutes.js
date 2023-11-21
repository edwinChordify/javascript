
const express=require('express')
const router=express.Router()
const{registerLogic, loginLogic}=require('../controllers/userController')

router.post('/user/signup',registerLogic )
router.post('/user/login',loginLogic )
module.exports=router