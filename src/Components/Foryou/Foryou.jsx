import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar2 from '../Navbar/Navbar2'
import TitleCards from '../../TitleCards/TitleCards'
// import MiniCards from '../../miniCards/MiniCards'
import Slide from '../Slide/Slide'
import MiniCards3 from '../../miniCards/MiniCards3'
import MiniCards2 from '../../miniCards/MiniCards2'
import Footer from '../Footer/Footer'
import MiniCards from '../../miniCards/MiniCards'

function Foryou() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=61ba9839bf7e2d04c438b30a39c4e3ef&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
       <div className='HomeDiv'>
        <Navbar cards={movies}/>
        <Navbar2/>
        <Slide/>
      <TitleCards title="NowPlaying" category="now_playing" seeall={false} />
      <TitleCards title="TopRated" category="top_rated" seeall={false}  />
      <TitleCards title="Upcoming" category="upcoming" seeall={false}  />
      <TitleCards title="Popular" category="popular" seeall={false} />
      <MiniCards category="recommendations" title="Series_Collection" seeall={false}/>
      <MiniCards2 category="popular" title="Popular_series_Collection" seeall={false}/>
      <MiniCards2 category="top_rated" title="Top_Rated_series_Collection" seeall={false}/>
     {/* <MiniCards3 personId={287} title="Brad Pitt TV Shows"/>  */} 
        <Footer/>
    </div>
  )
}

export default Foryou