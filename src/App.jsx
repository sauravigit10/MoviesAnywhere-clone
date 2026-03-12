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
import Upcoming from './Pages/SeeAll/Upcoming'
import Popular from './Pages/SeeAll/Popular'
import SeriesCollection from './Pages/SeeAll/SeriesCollection'
import PopularSeriesCollection from './Pages/SeeAll/PopularSeriesCollection'
import TopRatedCollection from './Pages/SeeAll/TopRatedCollection'
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
    <Route path='/Upcoming' element={<Upcoming/>}/>
    <Route path='/Popular' element={<Popular/>}/>
    <Route path='/Series_Collection' element={<SeriesCollection/>}/>
    <Route path='/Popular_series_Collection' element={<PopularSeriesCollection/>}/>
    <Route path='/Top_Rated_series_Collection' element={<TopRatedCollection/>}/>
    
    

  </Routes>
   </BrowserRouter>
  )
}

export default App
