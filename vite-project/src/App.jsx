
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
 import Login from './Login'
 import Home from './Home'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
       <Routes>
         <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
         <Route path='/home' element={<Home/>}></Route> 
         <Route path='/' element={<Navigate replace to="/login"/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
