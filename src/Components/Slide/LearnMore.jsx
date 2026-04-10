import React, { useState } from 'react'
import '../Slide/Learnmore.css'
import Navbar from '../Navbar/Navbar'
import link from '../../assets/Link.jpg'
import link2 from '../../assets/link2.jpg'
import link3 from '../../assets/link3.jpg'
import link4 from '../../assets/link4.jpg'
import link5 from '../../assets/link5.jpg'
import link6 from '../../assets/link6.jpg'
import link7 from '../../assets/link7.jpg'
import link8 from '../../assets/link8.jpg'
import link9 from '../../assets/link9.jpg'
import TitleCards from '../../TitleCards/TitleCards'
import Footer from '../Footer/Footer'
import sponser from '../../assets/Welcome _ Movies Anywhere_files/sponser.png'
import { FaChevronDown,FaChevronUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
function LearnMore() {  
   const[openIndex,setOpenIndex]=useState(null);
   const toggle=(index)=>
    {
        setOpenIndex(openIndex=== index ? null: index);
    } 
  return (
    <>
    <div className='LearnMainDiv'>
          <Navbar MoviesClicked="true" />
        <div className='miniLearnDiv'>
            <div className='left'>
                    <h1>Your Movies ,Together at Last <sup>TM</sup></h1>
                    <h4>Because right now is a good time to have your collection in one place.</h4>
                    <NavLink to='./signup'><button className='leftButton'>Sign Up Now -Free</button></NavLink>
                    <p>Open to U.S. residents 13+</p>
            </div>
            <div className='right'>
                <img src={link} alt="not available" />
            </div>
        </div>
        <div className='nextminiLearnDiv'>
                <div className="part11">
                        <h1>No Subscription, No Fees</h1>
                        <p>You choose where to purchase your favorite movies, bringing your collection together is free.</p>
                </div>
                <div className="part12">
                    <div className='right'>
                <img src={link2} alt="not available" />
            </div>
                     <div className='left'>
                    <h1>Connect & Collect <sup>TM</sup></h1>
                    <h4>Connect your digital retail accounts and we'll create one synced collection of you favorite movies. It's collecting made easy.</h4>
                   
            </div>
            
                </div>
        </div>
          <div className='nextminiLearnDivv'>
              <div className="part12">
                    
                     <div className='left'>
                    <h1>More Access in More Places</h1>
                    <h4>No matter where you are or where you go, we make sure your favorite movies are with you.</h4>
                   
            </div>
                <div className='right'>
                    <img src={link3} alt="not available" />
                </div>
            
                </div>
                <div className="part111">   
                        <h1>Build Your Ultimate Collection</h1>
                        <div className='divthree'>
                            <div className="img1">
                                <img src={link4} alt="" />
                                <div>
                                <h3>Daily Deals</h3>
                                <h4>See great new deals every day.</h4>
                                </div>
                            </div>
                            <div className="img1">
                                 <img src={link5} alt="" />
                                  <div>
                                <h3>Redeem</h3>
                                <h4>Enter digital codes from DVDs and Blu-rays™.</h4>
                                </div>
                            </div>
                            <div className="img1">
                                     <img src={link6} alt="" />
                                      <div>
                                <h3>Save Offline</h3>
                                <h4>Download movies to watch on the go.</h4>
                                </div>
                            </div>
                        </div>
                </div>
              
        </div>
        <div className="part111">   
                        <h1>And So Much More...</h1>
                        <div className='divthree'>
                            <div className="img11">
                                <img src={link7} alt="" />
                                 <h3>Premium Movie Watching</h3>
                                <div>
                               
                               <li>Support 4K UHD, HDR, Dolby Vision™</li>
                                    <li>Support for 5.1 Surround, Dolby ATMOS™</li>
                                    <li>Bonus content</li>
                                </div>
                            </div>
                            <div className="img11">
                                 <img src={link8} alt="" />
                                  <h3>Special Features</h3>
                                  <div>
                               <li>View your collection in new ways with My Sets</li>
                                    <li>Organize your movies with My Lists</li>
                                    <li>Build a Wishlist to collect your favorites</li>
                                </div>
                            </div>
                            <div className="img11">
                                     <img src={link9} alt="" />
                                      <h3>Discover New Movies</h3>
                                      <div>   
                                            <div>
                                            <li>Browse upcoming titles to preorder</li>
                                            <li>Get exclusive sneak peeks</li>
                                            <li>View ratings powered by Rotten Tomatoes®</li>
                                      </div>
                                     </div>
                            </div>
                        </div>
                </div>
               
                
    </div>
    
     <TitleCards title="TopRated" category="top_rated" seeall={false}/>
     <div className='sponser'>
        <h1>Brought to You by the Studios You Love</h1>
        <p>Finally, a true movie collector's experience—one synced collection to enjoy wherever you go.</p>
        <img src={sponser} alt="" />
     </div>
     <div className='Questions'>
            <h1>Frequently Asked Questions</h1>
          
            <div className={openIndex ===0 ?'notdiva':'diva'} onClick={()=> toggle(0)}>Is it free to use Movies Anywhere? {openIndex===0 ? (<FaChevronUp onClick={(e)=>setClick(false)} style={{marginRight:"10px"}}/>):(<FaChevronDown onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>)} </div>
             {openIndex===0 && <div className='clicked'>
                <p>It is absolutely free to sign up and use all the great features of Movies Anywhere 
                    – you only pay for the movies you want to add to your collection via purchases made
                     through your connected digital retailers. No subscription fee, no commitments, no extra
                      charges – ever. NOTE: All transactions are subject to applicable license terms and conditions.
                       See your digital retailer for details.</p>
        </div> }
        
            <div className={openIndex ===1 ?'notdiva':'diva'}  onClick={()=> toggle(1)}>Can I purchase movies through Movies Anywhere? {openIndex===1 ? (<FaChevronUp onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>):(<FaChevronDown onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>)} 
              </div>   {openIndex===1 && <div className='clicked'>
                <p>It is absolutely free to sign up and use all the great features of Movies Anywhere 
                    – you only pay for the movies you want to add to your collection via purchases made
                     through your connected digital retailers. No subscription fee, no commitments, no extra
                      charges – ever. NOTE: All transactions are subject to applicable license terms and conditions.
                       See your digital retailer for details.</p>
        </div> }
            
            <div className={openIndex ===2 ?'notdiva':'diva'}  onClick={()=> toggle(2)}>How does Movies Anywhere bring my movies together?  {openIndex===2 ? (<FaChevronUp onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>):(<FaChevronDown onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>)} 
               </div>   {openIndex===2 && <div className='clicked'>
                <p>It is absolutely free to sign up and use all the great features of Movies Anywhere 
                    – you only pay for the movies you want to add to your collection via purchases made
                     through your connected digital retailers. No subscription fee, no commitments, no extra
                      charges – ever. NOTE: All transactions are subject to applicable license terms and conditions.
                       See your digital retailer for details.</p>
        </div> }
           
            <div className={openIndex ===3 ?'notdiva':'diva'}   onClick={()=> toggle(3)}>Can I redeem a digital code on Movies Anywhere?  {openIndex===3 ? (<FaChevronUp onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>):(<FaChevronDown onClick={(e)=>setClick(true)} style={{marginRight:"10px"}}/>)}
               </div>   {openIndex===3 && <div className='clicked'>
                <p>It is absolutely free to sign up and use all the great features of Movies Anywhere 
                    – you only pay for the movies you want to add to your collection via purchases made
                     through your connected digital retailers. No subscription fee, no commitments, no extra
                      charges – ever. NOTE: All transactions are subject to applicable license terms and conditions.
                       See your digital retailer for details.</p>
        </div> }
           

   
       </div>
       <div className='lastdiv'>
                <div className='Last-div-mid'>
                <span>Now available on digital:</span> <br/>
                <p>Wonder Woman, ™ & © DC Comics. © 2019 Warner Bros. Entertainment Inc. All rights reserved. Jurassic World: Fallen Kingdom™ and © 2019 Universal Studios and Amblin Entertainment, Inc. All rights reserved. Spider-Man: Into the Spider-Verse, © 2018 Sony Pictures Animation Inc. All rights reserved. | MARVEL and all related character names: © & ™ 2019 MARVEL. Star Wars: A New Hope, © 2019 & ™ Lucasfilm Ltd. Marvel Studios’ Avengers: Endgame, © 2019 MAR</p>
                <br />
                <p>Registration with Movies Anywhere required. Movies Anywhere is open to U.S. residents 13+. Subject to the Movies Anywhere <NavLink className='navlink' to='/termsofuse'>Terms of use</NavLink> and  <NavLink className='navlink' to='/privacypolicy'>Privacy Policy</NavLink></p>
                </div>
       </div>
    
     <Footer/>
     </>
    
  )
}

export default LearnMore