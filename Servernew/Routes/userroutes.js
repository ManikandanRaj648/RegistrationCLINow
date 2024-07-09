const express=require('express')

const usercontroller=require('../Controller/Usercontroller')

const router=express.Router()

router.post('/rampage',usercontroller.createusercontroller)
module.exports=router