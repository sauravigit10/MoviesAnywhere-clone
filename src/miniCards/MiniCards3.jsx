import React, { useEffect, useState } from 'react'
import '../miniCards/MiniCards.css'
import { FaArrowLeft } from 'react-icons/fa';

function MiniCards3({ personId, title,seeall }) {

  const [shows, setShows] = useState([]);

  const getPersonShows = () => {
    fetch(`https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setShows(json.cast)) 
  }

  useEffect(() => {
    getPersonShows()
  }, [personId])

    function handleClick()
    {
      nav(`/${title}`)
    }
            function handleHtml() {
          return seeall ? (
            <FaArrowLeft   onClick={()=>nav(-1)} style={{ cursor: "pointer" }} />
          ) : "See All";
        }

  return (
     <div className={seeall? "miniCards":"miniCards1"}>
     <div className={seeall? "cardds":"cardd"}>
        <div className='Category'>
          <h2>{title}</h2>
           <h4 onClick={handleClick} style={{cursor:"pointer"}}>
        {handleHtml()}
      </h4>
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