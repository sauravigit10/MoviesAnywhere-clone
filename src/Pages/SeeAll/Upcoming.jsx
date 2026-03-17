import React from 'react'
import TitleCards from '../../TitleCards/TitleCards'
import '../SeeAll/Seeall.css'

function Upcoming() {
  return (
    <div className='main'>
      <TitleCards title="Upcoming" category="upcoming" seeall={true}  />
      
    </div>  
  )
}

export default Upcoming