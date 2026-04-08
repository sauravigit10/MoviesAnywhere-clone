import React, { useState } from 'react'

const Home= React.lazy(()=> import('./Pages/Home'))
const LazyRedeem= React.lazy(()=> import('./Pages/Redeem/Redeem'))
const LazyLogin= React.lazy(()=> import('./Pages/LoginPage/Login'))
const LazySignUp= React.lazy(()=> import('./Pages/LoginPage/SignUp'))
const Mymovies= React.lazy(()=> import('./Pages/Mymovies/Mymovies'))
const LazyForyou= React.lazy(()=> import('./Components/Foryou/Foryou'))
const LazyDeals= React.lazy(()=> import('./Components/Deals/Deals'))
const MySets= React.lazy(()=> import('./Components/Mysets/MySets' ))
const NowPlaying= React.lazy(()=> import('./Pages/SeeAll/NowPlaying' ))
const TopRated= React.lazy(()=> import('./Pages/SeeAll/TopRated'))
const Upcoming= React.lazy(()=> import('./Pages/SeeAll/Upcoming'))
const Popular= React.lazy(()=> import('./Pages/SeeAll/Popular'))
const SeriesCollection= React.lazy(()=> import('./Pages/SeeAll/SeriesCollection'))
const PopularSeriesCollection= React.lazy(()=> import( './Pages/SeeAll/PopularSeriesCollection'))
const TopRatedCollection= React.lazy(()=> import('./Pages/SeeAll/TopRatedCollection'))
const LearnMore= React.lazy(()=> import('./Components/Slide/LearnMore'))
const Termsofuse= React.lazy(()=> import('./Components/Slide/Links/Termsofuse'))
const Privacypolicy= React.lazy(()=> import('./Components/Slide/Links/Privacypolicy'))
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
   <React.Suspense fallback={<h2>Loading...</h2>}>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/redeem' element={<LazyRedeem/>}/>  
      <Route path='/mymovies' element={<Mymovies/>}/>
      <Route path='/login' element={<LazyLogin/>}/>
      <Route path='/signup' element={<LazySignUp/>}/>
      <Route path='/foryou' element={<LazyForyou/>}/>
      <Route path='/deals' element={<LazyDeals/>}/>
      <Route path='/mysets' element={<MySets/>}/>
      <Route path='/NowPlaying' element={<NowPlaying/>}/> 
      <Route path='/TopRated' element={<TopRated/>}/>
      <Route path='/Upcoming' element={<Upcoming/>}/>
      <Route path='/Popular' element={<Popular/>}/>
      <Route path='/Series_Collection' element={<SeriesCollection/>}/>
      <Route path='/Popular_series_Collection' element={<PopularSeriesCollection/>}/>
      <Route path='/Top_Rated_series_Collection' element={<TopRatedCollection/>}/> 
      <Route path='/movies' element={<LearnMore/>}/>
      <Route path='/termsofuse' element={<Termsofuse/>}/>
      <Route path='/privacypolicy' element={<Privacypolicy/>}/>
  </Routes>
  </React.Suspense>
   </BrowserRouter>
  )
}
export default App
