const mongoose=require('mongoose')

const employeeschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const empmodel=mongoose.model("employees1",employeeschema)
module.exports=empmodel