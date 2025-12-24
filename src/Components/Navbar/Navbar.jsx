import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo2.png'
import search from '../../assets/search.png'



function Navbar() {
  return (
    <div className='Nav'>
    <div className='Navdiv'>
        <img className='logo' src={logo} alt="log-img"/>
        <h3>Home</h3>
        <h3>Redeem</h3>
        <h3>My movies</h3>
    </div>
        <div className='Navdiv1'>
        <img className='searchLogo' src={search} alt="" />
        <h3>Sign In</h3>
        <button className='navButton'>Sign up now</button>
    </div>
    </div>
  )
}

export default Navbar