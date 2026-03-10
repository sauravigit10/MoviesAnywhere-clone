import React, { useEffect, useState } from 'react'
import '../miniCards/MiniCards.css'

function MiniCards3({ personId, title }) {

  const [shows, setShows] = useState([]);

  const getPersonShows = () => {
    fetch(`https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setShows(json.cast)) 
  }

  useEffect(() => {
    getPersonShows()
  }, [personId])

  return (
    <div className='miniCards'>
      <div className='card'>
        <div className='Category'>
          <h2>{title}</h2>
        </div>

        <div className='images'>
          {shows.map((show) => (
            <div className='img' key={show.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default MiniCards3