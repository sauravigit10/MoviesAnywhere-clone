import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar/Navbar2'
import '../Pages/Home.css'
import Footer from '../Components/Footer/Footer'
import Foryou from '../Components/Foryou/Foryou'
function Home() {
  return (
    <div className='HomeDiv'>
        <Foryou/>
    </div>
  )
}

export default Home