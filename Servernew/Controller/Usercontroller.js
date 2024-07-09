const userservice=require("../Service/Userservice")

async function createusercontroller(req,res){
    try{
        const userdata=req.body
        const userlevel=await userservice.createUser(userdata)
        res.status(201).json({
            userlevel:userlevel,message:"User created successfully"
        })
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}
module.exports={createusercontroller}