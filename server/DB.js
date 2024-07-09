const mongoose=require('mongoose')

module.exports=()=>{
    // const connectionparams={
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // }
    try{
        mongoose.connect(process.env.DB)
        console.log("Connection to Database successfully.")
    }catch(error){
        console.log(error)
        console.log("DB was not connected.")
    }
}