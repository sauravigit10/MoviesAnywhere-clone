import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

function VideoKey({videokey,setVideoKeyasProp}) {
  return (
    <div style={{height:"200vh"}}>
        <Navbar/>
          <div className="video-player">
            
            <iframe
              width="300"
              height="640"
              
              src={`https://www.youtube.com/embed/${videokey}`}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>

            <button 
              className="close-btn"
              onClick={()=> {setVideoKeyasProp}}
            >
              Back
            </button>
          </div>
    </div>
  )
}

export default VideoKey