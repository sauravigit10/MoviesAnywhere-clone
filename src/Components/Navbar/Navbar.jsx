import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/logo2.png';
import { Link, NavLink } from 'react-router-dom';
import {FaSearch, FaArrowLeft } from "react-icons/fa";

function Navbar({cards}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredCards = cards
    ? cards.filter(card =>
        card.title.toLowerCase().includes(query.toLowerCase())
      )
    :[1000];

  return (
    <>
      <div className='Nav'>
        <div className='Navdiv'>
          <img className='logo' src={logo} alt="logo-img"/>
          <NavLink to="/home" className='navLink' style={{textDecoration:"none"}}><h3>Home</h3></NavLink>
          <NavLink to="/redeem" className='navLink' style={{textDecoration:"none"}}><h3>Redeem</h3></NavLink>
          <NavLink to="/mymovies" className='navLink' style={{textDecoration:"none"}}><h3>My Movies</h3></NavLink>
        </div>
        <div className='Navdiv1'>
          <FaSearch className='searchLogo' onClick={() => setSearchOpen(true)} />
          <h3 className='Signin'><Link style={{textDecoration:"none"}} to="/login">Sign In</Link></h3>
          <button className='navButton'><Link style={{textDecoration:"none"}} to="/signup">Sign up now</Link></button>
        </div>
      </div>

     
      {searchOpen && (
        <div className="searchOverlay">
          <div className="searchHeader">

            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FaArrowLeft onClick={() => setSearchOpen(false)} style={{cursor:"pointer"}} />
          </div>

          <div className="searchCards">
            {filteredCards.map(cardd => (
              <div className="cardd" key={cardd.id}>
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