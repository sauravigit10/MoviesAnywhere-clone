import React from 'react'
import TitleCards from '../../TitleCards/TitleCards'

function Popular() {
  return (
      <div className='main'>
      <TitleCards title="Popular" category="popular" seeall={true}/>
    </div>
  )
}

export default Popular