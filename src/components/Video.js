import React from 'react'
import ReactPlayer from 'react-player'
import video from '../sample-mp4-file-small.mp4';
import './Video.css';

function Video() {
  return (
    <>
        <h1 className='videoText'>Cleveland Inventory Instructions</h1>
        <div className='player-wrapper'>
            <ReactPlayer className="react-player"
                url={video}
                controls={true}
                width="100%"
                height="100%"
            />
          </div>
    </>
  );
}

export default Video;
