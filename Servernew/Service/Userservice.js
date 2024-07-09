const user22=require("../Models/Usermodel")
const bcrypt=require("bcrypt")

async function createUser(userdata){
    const {name,email,password}=userdata
    const hashpassword=await bcrypt.hash(password,10)
    const createuser12=new user22({
        name,
        email,
        password:hashpassword,
        role:'customer'
    })
    const saveuser=await createuser12.save()
    return saveuser
}
module.exports={createUser}