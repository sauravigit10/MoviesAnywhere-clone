import React from 'react'
import './../Redeem/Redeem.css'
import redeemImg from '../../assets/redeem.png'

function RedeemBox() {
  return (
    <div className='mainDiv'>
        <div className="midDiv">
                <h2>Redeem a Digital Code</h2> <br /> <br />
                <p>Grow your Movies Anywhere collection and watch digitally by redeeming
                    codes from DVD or Blu-ray™ inserts, emails, and <a href="">more</a></p>

                    <img src={redeemImg} alt="" />
        <br /> <br /> <br /> <br /> 
        <div style={{display:"flex",height:"30vh",width:"40vw",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                <div htmlFor="input">Enter Code:</div>
                <input type="text" name="input" id="input" /> <br /> <br />
                <button>Enter</button>
            </div>
        </div>

    </div>
  )
}

export default RedeemBox