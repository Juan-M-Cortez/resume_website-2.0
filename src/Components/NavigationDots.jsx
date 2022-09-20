/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React, { useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const NavigationDots = ({ active }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  let sections = ['certificates', 'projects', 'skills', 'testimonials', 'contact'];
  windowDimensions.width > 900 ?
  sections.unshift('home') :
  sections.unshift('profile');


  return (
    <div className="app__navigation">
      {sections.map((item, index) => (
            <a
              href={`#${item}`}
              key={item + index}
              className="app__navigation-dot"
              style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />))
      }
    </div>
  );
};

export default NavigationDots;
