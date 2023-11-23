
const multer=require('multer')
const storage=multer.diskStorage({
    destination:"uploads/",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})
const express = require('express')
const router = express.Router()
const { registerLogic, loginLogic, updateName, Authentication } = require('../controllers/userController')

router.post('/user/signup',upload.single("edwin"), registerLogic)
router.post('/user/login', loginLogic)
router.post('/user/update',Authentication, updateName)

module.exports = router