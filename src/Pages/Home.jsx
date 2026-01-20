import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar/Navbar2'
import '../Pages/Home.css'
import Slide from '../Components/Slide/Slide'
import Footer from '../Components/Footer/Footer'
import TitleCards from '../TitleCards/TitleCards'
import MiniCards from '../miniCards/MiniCards'
import MiniCards3 from '../miniCards/MiniCards3'
import MiniCards2 from '../miniCards/MiniCards2'
function Home() {
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

export default Home