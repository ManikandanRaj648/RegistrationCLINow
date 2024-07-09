require('dotenv').config()
const express=require("express")
const app=express()
const cors=require('cors')
const userroutes=require("./routes/Userroute")
const authroutes=require("./routes/Authroutes")

//DB conncection
const connection=require('./DB')
connection()
//middlewares
app.use(express.json())
app.use(cors())

app.use("/api/users", userroutes)
app.use("/api/auth", authroutes)

const port=process.env.PORT||3001
app.listen(()=>{console.log(`Listening of port ${port}`)})