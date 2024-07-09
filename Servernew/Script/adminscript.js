const user=require('../Models/Usermodel')
const bcrypt=require('bcrypt')
async function adminAccount(){
    try{
        const existingadmin=await user.findOne({email:'admin@test.com'})
        if(!existingadmin){
            const newadmin=new user({
                email:'admin@test.com',
                name:'Admin',
                password:await bcrypt.hash('admin',10),
                role:'admin'
            })
            await newadmin.save()
            console.log("Admin account created successfully")
        }else{
            console.log("Already admin account")
        }
    }catch(error){
        console.log(error.message)
    }
}
module.exports=adminAccount