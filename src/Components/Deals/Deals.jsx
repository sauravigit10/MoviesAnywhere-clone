import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar2 from '../Navbar/Navbar2'
import Footer from '../Footer/Footer'
import '../Deals/Deals.css'
import images from '../../assets/dealss.jpg'

function Deals() {
  return (
    <div className='Deals'>
        <Navbar/>
        <Navbar2/>
        <div className='MainDeals'>
            <img src={images} alt="" />
        </div>
        <Footer/>


    </div>
  )
}

export default Deals