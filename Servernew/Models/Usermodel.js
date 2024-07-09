const mongoose=require("../DB")

const usermodel=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String,enum:["admin","customer"], default:"customer"}
})

module.exports=mongoose.model("user12",usermodel) 