import React from 'react'
import "./Mymovies.css"
import Navbar from '../../Components/Navbar/Navbar'
import Navbar2 from '../../Components/Navbar/Navbar2'
import Footer from '../../Components/Footer/Footer'
import MymoviesContent from '../../Components/MymoviesComponents/MymoviesContent'
import Navbar3 from '../../Components/Navbar/Navbar3'

function Mymovies() {
  return (
         <div className='HomeDiv1'>
        <Navbar/>
        <Navbar3/>
        <MymoviesContent/>
        <Footer/>
    </div>
  
  )
}

export default Mymovies