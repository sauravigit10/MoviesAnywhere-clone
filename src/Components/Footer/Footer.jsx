import React from 'react'
import './../Footer/Footer.css'
import poweredBy from '../../assets/keychest.png'

function Footer() {
  return (
    <div className='Footer'>
        <div className='midFooter'>
            <div className='mid1'>
              <div className='mid2'>
                 <h5>Home</h5>
                 <h5>Reedem </h5>
                  <h5>My Movies</h5>
                  </div>
            </div>
                 <div className='mid1'>
                  <div  className='mid3'>
                <h5>Help Center & Contact us </h5>
                 <h5>Legal Notices</h5>
                  <h5>Privacy Policy</h5>
                  <h5>Terms of use</h5>
                  <h5>Activate Your Device</h5>
                  </div>
            </div>
                 <div className='mid1'>
                  <div  className='mid4'>
                <h5>Interest Based Ads</h5>
                 <h5>Your US State Privacy Rights</h5>
                  <h5>Do not Sell or Share My Personal Information</h5>
                  <h5>Closed Captioning Inquires</h5>
                  </div>
            </div>
                 <div className='mid1'>
                  <div  className='mid5'>
                <h5>c 2025 Movies Anywhere .All Rights Reserved </h5>
                </div>
              </div>
          
                 <div className='mid1'>
                <img className='PoweredBy' src={poweredBy} alt="" />
            </div>

        </div>
    </div>
  
  )
}

export default Footer