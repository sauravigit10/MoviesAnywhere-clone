import React, { useEffect, useRef, useState } from 'react';
import '../TitleCards/TitleCards.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import VideoKey from '../Pages/VideoKey/VideoKey';

function TitleCards({ title, category, seeall }) {

  const [movies, setMovies] = useState([]);
  const [videoKey, setVideoKey] = useState(null);
  const navigate = useNavigate();
  const scrollRef = useRef();
  
  const getmovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setMovies(json.results));
  };

  useEffect(() => {
    getmovie();
  }, [category]);

  const handleLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const handleRight = () => {
    scrollRef.current.scrollLeft += 300;
  };


  function handleClick() {
    navigate(`/${title}`);
  }

  function handleHtml() {
    return seeall ? (
      <FaArrowLeft onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
    ) : "See All";
  }

  const handleMovieClick = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(data => {
        if (data.results.length > 0) {
          setVideoKey(data.results[0].key);   
        } else {
          alert("No trailer available");
        }
      });
  };

  function VideoKeyToNull()
  {
    console.log("clicked");
      setVideoKey(null);
  }

  return (
    <div className={seeall ? "Cards1" : "Cards"}>
      <div className={seeall ? "card1" : "card"}>

       
        <div className='Category'>
          <h2>{title}</h2>
          <h4 onClick={handleClick} style={{ cursor: "pointer" }}>
            {handleHtml()}
          </h4>
        </div>

      
        <div className='wrap'>

          {!seeall && (
            <button onClick={handleLeft} className="arrow Left">
              <FaArrowLeft />
            </button>
          )}

          <div ref={scrollRef} className={`images ${seeall ? "images-wrap" : ""}`}>
            {movies.map((movie) => (
              <div 
                className='img' 
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>

          {!seeall && (
            <button onClick={handleRight} className="arrow right">
              <FaArrowRight />
            </button>
          )}

        </div>

      
        {videoKey && (
         <>
              <VideoKey videokey={videoKey} setVideoKeyasProp={VideoKeyToNull}/>
             </>
        )}

      </div>
    </div>
  );
}

export default TitleCards;