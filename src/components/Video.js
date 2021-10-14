import React from 'react'
import ReactPlayer from 'react-player'
import video from '../sample-mp4-file-small.mp4';
import './Video.css';

function Video() {
  return (
    <div className='video_container'>
        <h1>Cleveland Inventory Instructions</h1>
            <ReactPlayer className="video"
                url={video}
                controls={true}
            />
    </div>
  );
}

export default Video;
