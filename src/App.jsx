import { useState } from 'react'
import Home from './Pages/Home'
import Redeem from './Pages/Redeem/Redeem'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Mymovies from './Pages/Mymovies/Mymovies'
import Login from './Pages/LoginPage/Login'
import SignUp from './Pages/LoginPage/SignUp'
import Foryou from './Components/Foryou/Foryou'
import Deals from './Components/Deals/Deals'
import MySets from './Components/Mysets/MySets'  
import NowPlaying from './Pages/SeeAll/NowPlaying'
import TopRated from './Pages/SeeAll/TopRated'
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
    <Route path='/foryou' element={<Foryou/>}/>
    <Route path='/deals' element={<Deals/>}/>
    <Route path='/mysets' element={<MySets/>}/>
    <Route path='/NowPlaying' element={<NowPlaying/>}/> 
    <Route path='/TopRated' element={<TopRated/>}/>

    

  </Routes>
   </BrowserRouter>
  )
}

export default App
