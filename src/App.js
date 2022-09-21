import { Routes, Route } from 'react-router-dom';
import NasaApi from './Projects/NasaApi/NasaApi';
import Portfolio from './Portfolio';
import React from 'react'
// import SpaceObjects from './Projects/NasaApi/container/SpaceObjects/SpaceObjects';
// import { compareByGeneratedPositionsDeflated } from 'requirejs';



const App = () => {
  // console.log(window.location);
  return (
    <>
    <p>TEST</p>
      <Routes>
      
        <Route path="/" element={<Portfolio />} />
        <Route path="/nasa-api" element={<NasaApi />} />
        
      </Routes>
    </>
  )
}

export default App