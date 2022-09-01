import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, NavigationDots, Sidebar, SidebarCollision } from './Components';
import React from 'react';
import './App.scss';


const App = () => {
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

export default App;