import React from 'react'
import '../SeeAll/Seeall.css'
import TitleCards from '../../TitleCards/TitleCards'
function TopRated() {
  return (
    <div className='main'>
      <TitleCards title="TopRated" category="top_rated" seeall={true}  />
     
    </div>
  )
}

export default TopRated