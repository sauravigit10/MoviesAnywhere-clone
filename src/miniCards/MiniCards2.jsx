import React, { useEffect, useState } from 'react'
import '../miniCards/MiniCards.css'

function MiniCards2({category,title}) {

  const [mini, setMini] = useState([]);

  const getSeries = () => {
    fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setMini(json.results))
  }

  useEffect(() => {
    getSeries()
  }, [category])

  return (
    <div className='miniCards'>
      <div className='card'>
        <div className='Category'>
          <h2>{title}</h2>
        </div>

        <div className='images'>
          {mini.map((show) => (
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

export default MiniCards2