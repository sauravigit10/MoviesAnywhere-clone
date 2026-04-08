import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar2 from '../Navbar/Navbar2'
import Footer from '../Footer/Footer'
import '../Deals/Deals.css'
import images from '../../assets/dealss.jpg'
import TitleCards from '../../TitleCards/TitleCards'
import MiniCards from '../../miniCards/MiniCards'
import MiniCards2 from '../../miniCards/MiniCards2'

function Deals() {
  return (
    <div className='Deals'>
        <Navbar/>
        <Navbar2/>
        <div className='MainDeals'>
            <img src={images} alt="" />
        </div>
        <TitleCards title="Upcoming" category="upcoming" seeall={false}/>
        <TitleCards title="TopRated" category="top_rated" seeall={false}  />
        <TitleCards title="Upcoming" category="upcoming" seeall={false}  />
        <TitleCards title="Popular" category="popular" seeall={false} />
        <MiniCards category="recommendations" title="Series_Collection" seeall={false}/>
        <MiniCards2 category="popular" title="Popular_series_Collection" seeall={false}/>
        <MiniCards2 category="top_rated" title="Top_Rated_series_Collection" seeall={false}/>
        <Footer/>
    </div>
  )
}

export default Deals