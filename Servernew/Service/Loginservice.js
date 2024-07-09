const bcrypt=require('bcrypt')
const user=require('../Models/Usermodel')
const { generateToken } = require('../Utils/jwtutils')

async function login(email,password){
    try{
        const existinguser=await user.findOne({email})
        if(!existinguser){
            throw new Error("User not found")
        }
        const ispasswordv=bcrypt.compare(password,existinguser.password)
        if(!ispasswordv){
            throw new Error("Incorrect password")
        }
        const token=generateToken(existinguser)
        return token
    }catch(error){
        throw new Error("Invalid credentials")
    }
}
module.exports={login}