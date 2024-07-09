const express=require('express')
const userroute=require('./Routes/userroutes')
const bodyparser=require('body-parser')
const cors=require('cors')
const adminAccount=require('./Script/adminscript')
const loginaccount=require('./Routes/Loginroutes')

const app=express()
app.use(cors())
app.use(bodyparser.json())
adminAccount()

app.use("/user",userroute)
app.use("/loginuser",loginaccount)
app.listen(3001,()=>{
    console.log("server is running.")
})