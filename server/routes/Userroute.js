const { validate, user1 } = require('../Models/User')

const router=require('express').Router()
const bcrypt=require('bcrypt')
router.post("/",async(req,res)=>{
    try{
        const {error}=validate(req.body)
        if(error)
            return res.status(400).send({message:error.details[0].message})
            const user=await user1.findOne({email:req.body.email})
            if(user)
                return res.status(409).send({message:"User with gmail already exists"})
            const salt=await bcrypt.genSalt(Number(process.env.SALT))
            const hashpassword=await bcrypt.hash(req.body.password,salt)
            await new user1({...req.body, password:hashpassword}).save()  
            res.status(201).send({message:"User created successfully"})
        }catch(error){
            res.status(500).send({message:"Internal server error"})
    }
})
module.exports=router