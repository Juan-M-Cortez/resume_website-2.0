import React, { useState, useEffect, useRef } from 'react';
import SocialMedia from '../SocialMedia';
import { Section1, Section2, Section3} from './Sections';
import Separation from './Separation/Separation';
import './Sidebar.scss';

const Sidebar = () => {
  const [navHeight, setNavHeight] = useState(0)
  const ref = useRef(0);

  useEffect(() => {
    ref.current = document.getElementsByClassName('app__navbar')[0].clientHeight;
    setNavHeight(ref.current)
  }, []);
 
  return (
    <div className='appbar__sidebar' style={{ paddingTop: navHeight }}>
      <Section1 />
      <Section2 />
      <Separation />
      <Section3 />
      {/*<Section4 />*/}
      <SocialMedia />
    </div>
  );
};

export default Sidebar