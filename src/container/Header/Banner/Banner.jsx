import compilerImg from '../../../assets/compilerImg2.png';
import TypingAnimation from './TypingAnimation/TypingAnimation';
import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className='app__banner'>
      <TypingAnimation />
    </div>
  );
};

export default Banner;