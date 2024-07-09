const userservice=require('../Service/Loginservice')

async function logincontroller(req,res){
    try{
        const {email,password}=req.body
        const token=await userservice.login(email,password)
        res.json({token:token})
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}
module.exports={logincontroller}