import React, { useEffect, useRef, useState } from 'react'
import '../TitleCards/TitleCards.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function TitleCards({ title, category, seeall }) {

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const newRef=useRef();

  const getmovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }
  const handleRefernece=()=>
  {
    newRef.current.scrollIntoView({behavior:"smooth"})
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
                 const handleRef=()=>
    {
      newRef.current.scrollLeft -=300;
    }
    const handleRight =()=>
    {
      newRef.current.scrollLeft +=300
    }
  return (
    <div className={seeall ? "Cards1":"Cards"}>
      <div className={seeall ? "card1" : "card"}>
        <div className='Category'>
          <h2 onClick={handleRefernece}>{title}</h2>
           <h4 ref={newRef} onClick={handleClick} style={{cursor:"pointer"}}>
        {handleHtml()}
      </h4>  
        </div>
          <div className='wrap'>
          { seeall? null:(<button  onClick={handleRef} className="arrow Left">
             <FaArrowLeft/>
           </button>) }

       <div ref={newRef} className={`images ${seeall ? "images-wrap" : ""}`}>
          {movies.map((movie) => (
            <div className='img' key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
                            
                    </div>
                      { seeall? null:(<button  onClick={handleRight} className="arrow right">
                        <FaArrowRight/>
                      </button>)
                       }
        </div>

      </div>
    </div>
  )
}

export default TitleCards