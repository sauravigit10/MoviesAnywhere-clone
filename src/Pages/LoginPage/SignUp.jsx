import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./SignUp.css"
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <Navbar/>
        <div className='SignInDiv'>
            <div className='SignInContainer'>
                <div className='Heading'>
            <h2 className='SignUpHeading'>Sign Up</h2>
             <h4 className='SignUpSubHeading'>Sign Up using:</h4>
                </div>
                <div className='SignUpContent'> 
            <button className='LoginButton'>Continue with email</button>
        <hr style={{border:"1px solid grey",width:"95%"}} />
        <button className='LoginButton'>Continue with Google</button>
        <button className='LoginButton'>Continue with Apple</button>   
        <div className='Reminder'>Have an account already? <Link to="/login" className='link'>Sign in</Link></div>                                                 
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SignUp