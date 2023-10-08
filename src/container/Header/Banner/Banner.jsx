import compilerImg from '../../../assets/compilerImg2.png';
import TypingAnimation from './TypingAnimation/TypingAnimation';
import IntroVideo from '../../../assets/sample.mp4';
import React, {useRef, useEffect} from 'react';
import './Banner.scss';

const Banner = () => {

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

  return (
    <div className='app__banner'>
      {/*-- <TypingAnimation /> */}

      {/* Banner Video */}
      <div className='video-container'>
        {/*<video controls autoPlay muted>*/}
        <video autoPlay controls ref={videoRef}>
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default Banner;