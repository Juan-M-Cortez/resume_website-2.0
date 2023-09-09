import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a className='social-a' href='https://github.com/Juan-M-Cortez'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a className='social-a' href='https://www.linkedin.com/in/juancort3z/'>
        <BsLinkedin />
      </a>
    </div>
    <div >
      <a className='social-a' href='https://www.instagram.com/juanmcort3z/'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
