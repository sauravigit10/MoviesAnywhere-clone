import React from 'react'
import '../SeeAll/Seeall.css'
import '../../TitleCards/TitleCards'
import TitleCards from '../../TitleCards/TitleCards'
function NowPlaying() {
  return (
    <div className='main'>
       <TitleCards title="NowPlaying" category="now_playing" seeall={true}/>  
          
    </div>
  )
}

export default NowPlaying