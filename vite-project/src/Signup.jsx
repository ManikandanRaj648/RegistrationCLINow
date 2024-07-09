//import { useState } from "react";
import axios from 'axios'
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

function Signup(){
    // const [name, setName]=useState('')
    // const [email,setemail]=useState('')
    // const [password,setpassword]=useState('')
    //const navigate=useNavigate()
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
            await axios.post("http://localhost:3001/user/rampage",
            formdata
        )
        .then(res=>console.log(res))
        }catch(err){
        console.log(err.message)
        }
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handlesubmit} method='POST'>
                <div>
                <label htmlFor="firstname">Name</label>
                <input type="text" name="name" autoComplete="off" placeholder="Enter Your Name" onChange={handlevalue}/>
                </div>
                <div>
                <label htmlFor='lastname'>Email</label>
                <input type='text' name='email' autoComplete="off" placeholder='Enter Your Last name' onChange={handlevalue}/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" autoComplete="off" placeholder="Enter your password" onChange={handlevalue}/>
                </div>
                <button className="regbtn" type="submit">Register</button>
            </form>
         </div>
    )
}
export default Signup;