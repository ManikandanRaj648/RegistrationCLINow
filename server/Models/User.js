const joi = require('joi')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const pword=require('joi-password-complexity')

const userschema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
userschema.methods.generateAuthToken=function(){
    const token=jwt.sign({id:this.id},process.env.JWTprivatekey,{expiresIn:"7d"})
    return token
}
const user1=mongoose.model("User21",userschema)
const validate=(data)=>{
    const schema=joi.object({
        firstname:joi.string().required().label("First Name"),
        lastname:joi.string().required().label("Last Name"),
        email:joi.string().required().label("Email"),
        password:pword().required().label("Password")
    })
    return schema.validate(data,validate)
}
module.exports={user1,validate}