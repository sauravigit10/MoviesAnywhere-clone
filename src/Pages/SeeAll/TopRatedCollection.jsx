import React from 'react'
import MiniCards2 from '../../miniCards/MiniCards2'

function TopRatedCollection() {
  return (
      <div className='main'>
      <MiniCards2 category="top_rated" title="Top_Rated_series_Collection" seeall={true}/>
      
    </div>
  )
}

export default TopRatedCollection