import React from 'react'
import "./MymoviesContent.css"
import { Link } from 'react-router-dom'

function MymoviesContent() {
  return (
    <div className='ContentDiv'>
            <div className='MymoviesDiv'>
        <h1 className='MymoviesHeading'>Welcome</h1>
        <h3 className='MymoviesSubheading'>Sign in to get started</h3>
        <button className='MymoviesButton'><Link style={{textDecoration:"none"}} to="/login">Sign in</Link></button>
            </div>
    </div>
  )
}

export default MymoviesContent