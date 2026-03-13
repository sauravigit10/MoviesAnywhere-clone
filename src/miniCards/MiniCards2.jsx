import React, { useEffect, useState } from 'react'
import '../miniCards/MiniCards.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function MiniCards2({category,title,seeall}) {

  const [mini, setMini] = useState([]);
  const nav=useNavigate();

  const getSeries = () => {
    fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(json => setMini(json.results))
  }

  useEffect(() => {
    getSeries()
  }, [category])
    function handleClick()
    {
      nav(`/${title}`)
    }
            function handleHtml() {
          return seeall ? (
            <FaArrowLeft onClick={()=>nav(-1)} style={{ cursor: "pointer" }} />
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

         <div className={`images ${seeall ? "images-wrap" : ""}`}>
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