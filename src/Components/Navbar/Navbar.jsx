import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { images } from '../../constants';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
    
      {/*----------------------BLOCK----------------------
      <div className='app__navbar-logo'>
        <img src={images.logoTemp} alt="logo" />
      </div>
      */}

      {/*----------------------BLOCK: Desktop Nav----------------------*/}
      <ul className='app__navbar-links'>
        {['home', 'certificates', 'projects', 'skills', 'testimonials', 'contact'].map((item) => {
          return (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
          )
        }
        )}
      </ul>
      {/*----------------------BLOCK: Mobile Nav----------------------*/}
      <div className='app__navbar-menu'>

        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && ( <motion.div
            whileInView={{ y: [0, 320] }}
            transition={{ duration: .45, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />

            {/*----Dropdown: Menu-List----*/}
            <ul className='menu'>
              {['profile', 'certificates', 'projects', 'skills', 'testimonials', 'contact'].map((item) =>
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>

              )}

            </ul>

          </motion.div>
        )
        
        }

      </div>

    </nav>
  );
};

export default Navbar;