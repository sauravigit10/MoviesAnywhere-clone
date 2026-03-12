import React from 'react'
import MiniCards from '../../miniCards/MiniCards'
import MiniCards2 from '../../miniCards/MiniCards2'

function PopularSeriesCollection() {
  return (
    <div className='main'>
      <MiniCards2 category="popular" title="Popular_series_Collection" seeall={true}/>

    </div>
  )
}

export default PopularSeriesCollection