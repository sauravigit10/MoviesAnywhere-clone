import React, { useEffect, useState } from 'react'
import '../TitleCards/TitleCards.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function TitleCards({ title, category, seeall }) {

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getmovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }

  useEffect(() => {
    getmovie()
  }, [category])

  function handleClick() {
    navigate(`/${title}`)
  }
             function handleHtml() {
           return seeall ? (
             <FaArrowLeft onClick={()=>navigate(-1)} style={{ cursor: "pointer" }} />
           ) : "See All";
         }
  return (
    <div className={seeall ? "Cards1":"Cards"}>
      <div className={seeall ? "card1" : "card"}>
        <div className='Category'>
          <h2>{title}</h2>
           <h4 onClick={handleClick} style={{cursor:"pointer"}}>
        {handleHtml()}
      </h4>  
        </div>

       <div className={`images ${seeall ? "images-wrap" : ""}`}>
          {movies.map((movie) => (
            <div className='img' key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TitleCards