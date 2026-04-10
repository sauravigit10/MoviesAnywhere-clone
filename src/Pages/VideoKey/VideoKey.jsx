import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './VideoKey.css';
function VideoKey({ videokey, setVideoKeyasProp, moviesTitle }) {

  if (!moviesTitle) return null;

  return (
    <>
   <Navbar  MoviesClicked="true" />
    
    <div className="video-overlay" onClick={setVideoKeyasProp}>
     
      <div  
        className="video-container"
        onClick={(e) => e.stopPropagation()}
      >
      
        <button className="close-btn" onClick={setVideoKeyasProp}>
          ✖
        </button>

       <div >
          <iframe
            src={`https://www.youtube.com/embed/${videokey}?autoplay=1&loop=1&mute=1&controls=0`}
            title="Movie Trailer"
            
            allow="autoplay; encrypted-media"
            ></iframe>
            </div>

           <div className="poster">
          <img 
            src={`https://image.tmdb.org/t/p/w500${moviesTitle?.poster_path}`}
            alt={moviesTitle?.title}
          />
          <h2>{moviesTitle?.title}</h2>
        </div>
        
      </div>

    </div>
      </>
  );
}

export default VideoKey;