import { useNavigate } from "react-router-dom"

function Home(){
    const token=localStorage.getItem("token")
    console.log(token)
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("token")
        navigate('/login')
    }
    return(
        <div>
            <h1>Home Component</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
export default Home