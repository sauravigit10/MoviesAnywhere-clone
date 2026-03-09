import React, { useEffect, useState } from 'react'
import '../TitleCards/TitleCards.css'

function TitleCards({ title, category }) {

  const [movies, setMovies] = useState([]);

  const getmovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }

  useEffect(() => {
    getmovie()
  }, [category])

  return (
    <div className='Cards'>
      <div className='card'>

        <div className='Category'>
          <h2>{title}</h2>
          <div style={{fontSize:"13px"}}>SEE ALL</div>
        </div>

        <div className='images'>
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