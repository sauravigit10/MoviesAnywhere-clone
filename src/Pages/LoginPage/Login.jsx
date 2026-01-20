import React from 'react'
import "./Login.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
function Login() {
  return (
    <div>
        <Navbar/>
        <div className='LoginDiv'>
         <div className='LoginContent'>
         <div className='LoginContent2'>
        <div1>
        <h4 className='LoginHeading'>Welcome Back!</h4>
        <h3 className='LoginSubheading'>Sign in using</h3>
        </div1>
        <div1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        </div1>
        <div1>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        </div1>
        <div className='remeber'>
         <div style={{display:"flex",width:"10vw",flexDirection:"row",margin:"0",alignItems:"center",}}>
         <input type="checkbox" style={{}}/>
         <span style={{color:"black",width:"40vw",}}>Remember me</span>

                   </div>
         <div style={{display:"flex",flexDirection:"row",alignItems:"center",fontSize:"14px",justifyContent:"center"}}>  
   <a className='link'  href="/signup">Reset Password</a>
        </div>
        </div>
        <button className='LoginButton'>Continue</button>
        <hr style={{border:"1px solid grey",width:"95%"}} />
        <button className='LoginButton'>Continue with Google</button>
        <button className='LoginButton'>Continue with Apple</button>
            <div>
        <span style={{color:"black"}}>New Here? <a style={{color:"#00a0eb",textDecoration:"none"}} href="/signup">Sign Up</a></span>
              </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login