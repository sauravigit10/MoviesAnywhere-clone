import { useState } from 'react'
import Home from './Pages/Home'
import Redeem from './Pages/Redeem/Redeem'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Mymovies from './Pages/Mymovies/Mymovies'
import Login from './Pages/LoginPage/Login'
import SignUp from './Pages/LoginPage/SignUp'

function App() {

  return (
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/redeem' element={<Redeem/>}/>
    <Route path='/mymovies' element={<Mymovies/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
   </BrowserRouter>
  )
}

export default App
