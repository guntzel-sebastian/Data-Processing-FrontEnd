import React from 'react';
import '@/style/movie-information.css';
import '@/style/global.css';
import movie from '@/movie.png';

const MovieInformation = () => {
  return (
    <div className='movieInfoMain'>
      <div className='body'>
          <div className='info'>
            <div>Name:</div>
            <div>Language:</div>
            <div>Description</div>
            <div>Public date:</div>
            <div>Subtitle type:</div>
            <div>Support quality type:</div>
          </div>

          <div>
            <img className='img' src={movie} alt='Movie' />
          </div>
      </div>
    </div>
  );
}

export default MovieInformation;