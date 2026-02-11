import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo2.png'
import search from '../../assets/search.png'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <div className='Nav'>
    <div className='Navdiv'>
        <img className='logo' src={logo} alt="log-img"/>
        <NavLink to="/home" className='navLink' style={{textDecoration:"none"}} ><h3>Home</h3></NavLink>
        <NavLink to="/redeem" className='navLink' style={{textDecoration:"none"}} ><h3>Redeem</h3></NavLink>
        <NavLink to="/mymovies" className='navLink' style={{textDecoration:"none"}} ><h3>My movies</h3></NavLink>
    </div>
        <div className='Navdiv1'>
          {/* <i className='searchLogo' class="fa-solid fa-magnifying-glass"></i> */}
        <img className='searchLogo' src={search} alt="" />
        <h3 className='Signin'><Link style={{textDecoration:"none"}} to="/login">Sign In</Link></h3>
        <button className='navButton'><Link style={{textDecoration:"none"}} to="/signup">Sign up now</Link></button>
    </div>
    </div>
    
  )
}

export default Navbar