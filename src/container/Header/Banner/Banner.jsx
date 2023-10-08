import compilerImg from '../../../assets/compilerImg2.png';
import TypingAnimation from './TypingAnimation/TypingAnimation';
import ImgGif from '../../../assets/Programming.gif';
import React, { useRef, useEffect } from 'react';
import './Banner.scss';

const Banner = () => {
  /*
    const videoRef = useRef(null);
  
    useEffect(() => {
      
      const videoElement = videoRef.current;
  
      const handleLoadedMetadata = () => {
        // When the video's metadata is loaded (after page load),
        // unmute the video by setting the volume to a non-zero value
        videoElement.volume = 1; // Set the volume to unmute (0 is muted)
      };
  
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
  
      return () => {
        // Clean up the event listener when the component unmounts
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, []);
    */
  return (
    <div className='app__banner'>
      {/*-- <TypingAnimation /> */}

      <div className='banner-gif'>
      <img src={ImgGif} >
      </img>
      </div>

      {/* Banner Video 
      <div className='video-container'>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/872219161?h=4b190fa44c"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    */}
    </div>
  );
};

export default Banner;