import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar/Navbar2'
import '../Pages/Home.css'
import Slide from '../Components/Slide/Slide'
function Home() {
  return (
    <div className='HomeDiv'>
        <Navbar/>
        <Navbar2/>
        <Slide/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home