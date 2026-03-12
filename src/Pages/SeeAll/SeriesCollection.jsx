import React from 'react'
import '../SeeAll/seeall.css'
import MiniCards from '../../miniCards/MiniCards'

function SeriesCollection() {
  return (
    <div className='main'>
      <MiniCards category="recommendations" title="Series_Collection" seeall={true}/>
   
      
    </div>
  )
}

export default SeriesCollection