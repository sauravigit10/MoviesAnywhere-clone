// import React, { useEffect, useState } from 'react'
// import '../miniCards/MiniCards.css'
// function MiniCards({title,category}) {
//   const[mini,setMini]=useState([]);
//   const getmovie = () => {
//       fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
//         .then(res => res.json())
//         .then(json => setMini(json.results))
//     }
  
//     useEffect(() => {
//       getmovie()
//     }, [category])
  
//   return (
    
//         <div className='miniCards'>
//       <div className='card'>
//         <div className='Category'>
//            <h2>{title}</h2> 
            
//         </div>
//         <div className='images'>
//            {mini.map((movie) => (
//             <div className='img' key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//             </div>
//           ))}

//                 </div>     
//         </div>
//     </div>

//   )
// }

// export default MiniCards