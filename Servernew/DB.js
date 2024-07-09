const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/NewBackend")

mongoose.connection.on("connected",()=>{
    console.log("DB is connected")
})
mongoose.connection.on("Error",()=>{
    console.log("Error was disabled.")
})

module.exports=mongoose