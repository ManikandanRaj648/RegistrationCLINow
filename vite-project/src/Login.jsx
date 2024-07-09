import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    // const [name, setName]=useState('')
    // const [email,setemail]=useState('')
    // const [password,setpassword]=useState('')
    const navigate=useNavigate()
    const [formdata,setdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const handlevalue=(event)=>{
        const {name,value}=event.target
        setdata({
            ...formdata,
            [name]:value
        })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await axios.post("http://localhost:3001/loginuser/login",
            formdata
        )
        const result=await response.data
        //localStorage.setItem("token",result.token)
        console.log(result)
        navigate('/Home')
        }catch(err){
        console.log(err.message)
        }
    }
    return(
        <div>
             <h1>Login</h1>
            <form onSubmit={handlesubmit} method="POST">
               
                <div>
                    <label>
                        Email
                    </label>
                    <input type="text" name="email" onChange={handlevalue} autoComplete="off"/>
                </div>
                <div>
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" onChange={handlevalue} autoComplete="off"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login