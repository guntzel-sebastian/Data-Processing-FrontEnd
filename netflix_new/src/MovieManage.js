import React from 'react'
import './Style.css';
import movie from'./movie.png';
import episode from'./episode.png';

function MovieManage() {
  return (
    <div className='MovieMange'> 
      <div>
        <h3 id='title'>Most popular movies:</h3>
        <div className='media'>
          <img src={movie} alt='Movie'/>
          <img src={episode} alt='Eposide'/>
          <img src={movie} alt='Movie'/>
          <img src={episode} alt='Eposide'/>
        </div>
      </div>
    </div>
  )
}

export default MovieManage