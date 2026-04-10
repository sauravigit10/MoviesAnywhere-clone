import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/logo2.png';
import { Link, NavLink } from 'react-router-dom';
import {FaSearch, FaArrowLeft } from "react-icons/fa";

function Navbar({cards,MoviesClicked}, ) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredCards = cards
    ? cards.filter(card =>
        card.title.toLowerCase().includes(query.toLowerCase())
      )
    :[];

  return (
    <>
   <div  className={MoviesClicked ? 'NavwithnoBackground':'Nav'}>
  

  <div className='Navdiv'>
    <NavLink className="logos" to="/home">
      <img className='logo' src={logo} alt="logo-img"/>
    </NavLink> 

    <div className={`navLinks ${menuOpen ? "active" : ""}`}>
      <NavLink to="/home" className='navLink'><span>Home</span></NavLink> 
      <NavLink to="/redeem" className='navLink'><span>Redeem</span></NavLink> 
      <NavLink to="/mymovies" className='navLink'><span>My Movies</span></NavLink> 
    </div>
  </div>


  <div className='Navdiv1'> 
    <FaSearch className='searchLogo' onClick={() => setSearchOpen(true)} />

    <h3 className='Signin'>
      <Link className='linkk' to="/login">Sign In</Link>
    </h3>

    <button className='navButton'>
      <Link className='linkkk' to="/signup">Sign up Now</Link>
    </button>

    <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </div>
  </div>
</div>

     
      {searchOpen && (
        <div className="searchOverlay">
          <div className="searchHeader">
<FaArrowLeft onClick={() => setSearchOpen(false)} style={{cursor:"pointer"}} />

            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
              </div>

          <div className="searchCards">
            {filteredCards.map(cardd => (
              <div className="carddd" key={cardd.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cardd.poster_path}`}
                  alt={cardd.title}      
                /> 
                <h5>{cardd.title}</h5>
              </div>
            ))} 
          </div> 
        </div> 
      )}
    </>
  );
}

export default Navbar;