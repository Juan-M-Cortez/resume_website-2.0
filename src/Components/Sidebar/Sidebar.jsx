import React, { useState, useEffect, useRef } from 'react';
import { Section1, Section2 } from './Sections';
import './Sidebar.scss';

const Sidebar = () => {
  const [navHeight, setNavHeight] = useState(0)
  const ref = useRef(0);

  useEffect(() => {
    ref.current = document.getElementsByClassName('app__navbar')[0].clientHeight;
    setNavHeight(ref.current)
  }, []);
 
  return (
    <div className='app__sidebar' style={{ marginTop: navHeight }}>
      <Section1 />
      
    </div>
  );
};

export default Sidebar