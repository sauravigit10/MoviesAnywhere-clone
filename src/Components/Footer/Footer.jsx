import React from 'react'
import './../Footer/Footer.css'
import poweredBy from '../../assets/keychest.png'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
        <div className='midFooter'>
            <div className='mid1'>
              <div className='mid2'>
                 <NavLink style={{textDecoration:"none"}} to='/home'><h5>Home</h5></NavLink>
                  <NavLink style={{textDecoration:"none"}} to={'/redeem'}><h5>Reedem</h5></NavLink>
                   <NavLink style={{textDecoration:"none"}} to={'/Mymovies'}><h5>My Movies</h5></NavLink>
                
                  </div>
            </div>
                 <div className='mid1'>
                  <div  className='mid3'>
                <a className='anchor' href='https://help.moviesanywhere.com/hc/en-us' >Help Center & Contact us </a>
                  <a className='anchor' href='https://moviesanywhere.com/legal-notices' >Legal Notices</a>
                   <a className='anchor' href='https://moviesanywhere.com/privacy-policy' >Privacy Policy</a>
                   <a className='anchor' href='https://moviesanywhere.com/terms-of-use' >Terms of use</a>
                   <a className='anchor' href='https://moviesanywhere.com/login?redirectURI=%2Fconnect-device' >Activate Your Device</a>
                  </div>
            </div>
                 <div className='mid1'>
                  <div  className='mid4'>
                 <a className='anchor' href='https://moviesanywhere.com/privacy-policy#online-tracking-and-advertising' >Interest Based Ads</a>
                  <a className='anchor' href='https://moviesanywhere.com/your-us-state-privacy-rights' >Your US State Privacy Rights</a>
                   <a className='anchor' href='https://moviesanywhere.com/legal-notices' >Do not Sell or Share My Personal Information</a>
                   <a className='anchor' href='https://help.moviesanywhere.com/hc/en-us/articles/115004648366-I-m-having-trouble-with-closed-captions' >Closed Captioning Inquires</a>
                  </div>
            </div>
                 <div className='mid1'>
                  <div  className='mid5'>
                <h5>c 2025 Movies Anywhere .All Rights Reserved </h5>
                </div>
              </div>
          
                 <div className='mid1'>
                <img className='PoweredBy' src={poweredBy} alt=""/>
            </div>

        </div>
    </div>
  
  )
}

export default Footer