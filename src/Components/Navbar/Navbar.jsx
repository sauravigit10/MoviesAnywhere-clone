import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo2.png'
import search from '../../assets/search.png'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div className='Nav'>
    <div className='Navdiv'>
        <img className='logo' src={logo} alt="log-img"/>
        <h3 className='nav' > <Link style={{textDecoration:"none"}} to="/home">Home</Link></h3>
        <h3 className='nav'> <Link style={{textDecoration:"none"}} to="/redeem">Redeem</Link></h3>
        <h3 className='nav'> <Link style={{textDecoration:"none"}} to="/mymovies">My movies</Link></h3>
    </div>
        <div className='Navdiv1'>
        <img className='searchLogo' src={search} alt="" />
        <h3 className='Signin'><Link style={{textDecoration:"none"}} to="/login">Sign In</Link></h3>
        <button className='navButton'><Link style={{textDecoration:"none"}} to="/signup">Sign up now</Link></button>
    </div>
    </div>
  )
}

export default Navbar