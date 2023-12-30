import React from 'react';
import '@/style/episode-information.css';
import episode from '@/episode.png';

const EpisodeInformation = () => {
  return (
    <div className='episodeInfoMain'>
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
            <img className='img' src={episode} alt='Episode' />
          </div>
      </div>
    </div>
  );
}

export default EpisodeInformation;
