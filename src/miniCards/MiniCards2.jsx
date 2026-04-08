import React, { useEffect, useRef, useState } from 'react'
import '../miniCards/MiniCards.css'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function MiniCards2({category,title,seeall}) {

  const [mini, setMini] = useState([]);
  const[VideoKey,setVideoKey]=useState(null);
  const nav=useNavigate();
  const ref=useRef();

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
         const handleRef=()=>
    {
      ref.current.scrollLeft -=300;
    }
    const handleRight =()=>
    {
      ref.current.scrollLeft +=300
    }
    const handleMovieClick=(id)=>
    {
       fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
        .then(res=>res.json())
        .then(data=> {
          if(data.results.length >0)
          {
            setVideoKey(data.results[0].key);
          }
          else{
            alert("Trailer not availabele");
          }
        })
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
           <div className='wrap'>
              { seeall? null:(<button  onClick={handleRef} className="arrow Left">
                 <FaArrowLeft/>
               </button>) }
         <div ref={ref} className={`images ${seeall ? "images-wrap" : ""}`}>
          {mini.map((show) => (
            <div className='imgg' key={show.id} onClick={()=>handleMovieClick(show.id)}>
              <img className='imagee'
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
            </div>
          ))}
        </div>
      
         { seeall? null:(<button  onClick={handleRight} className="arrow right">
                             <FaArrowRight/>
                           </button>)
                         
                                         }
          </div>
        {VideoKey &&  (
        <div className="video-player">
            <iframe  width="1100"
              height="650"
              
              src={`https://www.youtube.com/embed/${VideoKey}`}
              title="Movie Trailer"
              allowFullScreen></iframe>
              <button className="close-btn" onClick={()=>setVideoKey(null)}>Go Back</button>
        </div>
       )}

          
          </div>
    </div>
  )
}

export default MiniCards2