const router=require('express').Router()
const {User, user1}=require("../Models/User")
const joi=require('joi')
const bcrypt=require('bcrypt')


router.post("/",async(req,res)=>{
    try{
        const {error}=validate(req.body)
        if(error)
            return res.status(404).send({message:error.details[0].message})
        const user=await user1.findOne({email:req.body.email})
        if(!user)
            return res.status(401).send({message:"Invalid email or password"})
        const validpassword=await bcrypt.compare(
            req.body.password, user.password
        )
        if(!validpassword){
            return res.status(401).send({message:"Invalid email or password"})
        }
        const token=user.generateAuthToken();
        return res.status(200).send({data:token, message:"Logged In successfully"})
    }catch(error){
        return res.status(500).send({message:"Internal server error"})
    }
})

const validate=(data)=>{
    const schema=joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required().label("Password")
    })
    return schema.validate(data)
}
module.exports=router