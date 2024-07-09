const express=require('express')
const cors=require('cors')
const login=require('../Controller/Logincontroller')

const router=express.Router()
router.use(cors())
router.post('/login',login.logincontroller)

module.exports=router