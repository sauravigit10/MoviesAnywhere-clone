import React from 'react'
import '../Mysets/MySetsMid.css'
import img from '../../assets/mysets.png'

function MySetsMid() {
  return (
    <div className='MySetsMid'>
        <div className="anothermid">
           <div className="midd1">
            <div style={{height:"80px",alignItems:"flex-start",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",gap:"5px"}}>
                 <h1>My Sets</h1>
                <p>Track-and grow - your collection</p>
            </div>
             <div style={{width:"14vw",alignItems:"flex-start",display:"flex",}}>
               <a href="#" style={{textDecoration:"none"}}>Learn more --</a>
             </div>
           </div>
           <div className="midd2">
                    <img src={img} alt="" />
           </div>
        </div>
        <div className="mysetsmid2">
            <div className='sets1'> <div><h1>0</h1></div> <div style={{fontSize:"12px"}}>SETS DISCOVERED </div> </div>
            <div className='sets1'> <div><h1>0</h1></div> <div style={{fontSize:"12px"}}>COMPLETED SETS </div> </div>
        </div>
        
        <div className='lastSets'>
            <div className='last1'>My Sets</div>
            <div className='last2'>
                 <h3>Were not seeing any sets in your 
                  colection <br/> yet.Check back as you add more movies!!
                 </h3>
            </div>
        </div>


    </div>
  )
}

export default MySetsMid