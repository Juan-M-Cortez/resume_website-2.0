import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, NavigationDots, Sidebar, SidebarCollision } from './Components';
import React, { useState, useEffect } from 'react';
import './App.scss';
import MobileBar from './Components/MobileBar/MobileBar';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(windowDimensions.width);
  console.log(test);

  /*------------------Desktop View | Tablet------------------*/
  if (windowDimensions.width > 900) {
    return (
      <div className='appbar'>
        <Navbar />
        <Sidebar />
        <SidebarCollision />
        <div className='app'>
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </div>
      </div>
    );
  }
  /*------------------Mobile View------------------*/
  else {
    return (
      <div className='app'>
        <Navbar />
        <MobileBar />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    );
  }


}

export default App;