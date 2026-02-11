import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar2 from '../Navbar/Navbar2'
import TitleCards from '../../TitleCards/TitleCards'
import MiniCards from '../../miniCards/MiniCards'
import Slide from '../Slide/Slide'
import MiniCards3 from '../../miniCards/MiniCards3'
import MiniCards2 from '../../miniCards/MiniCards2'
import Footer from '../Footer/Footer'

function Foryou() {
  return (
       <div className='HomeDiv'>
        <Navbar/>
        <Navbar2/>
         <Slide/>
        <TitleCards/>
            <TitleCards/>
                <TitleCards/>
                    <MiniCards/>
             <MiniCards2/>
             <MiniCards3/>
        <Footer/>
    </div>
  )
}

export default Foryou