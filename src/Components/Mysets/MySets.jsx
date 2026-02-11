import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar2 from '../Navbar/Navbar2'
import '../Mysets/Mysets.css'
import Footer from '../Footer/Footer'
import MySetsMid from './MySetsMid'

function MySets() {
  return (
    <div className='MySets'>
         <Navbar/>
         <Navbar2/>
         <MySetsMid/>
         <Footer/>
    </div>
  )
}

export default MySets