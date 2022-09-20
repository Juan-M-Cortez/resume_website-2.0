import React from 'react';
import { 
  FooterBanner,
  HeroBanner,
  Product
} from '../components';

const Home = () => {
  return (
    <div className='home'>
      HeroBanner

      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakera of many variations</p>
      </div>

      <div className='products-container'>
      {
        ['Product 1', 'Product 2'].map((product) => product)
      }
      </div>

      Footer
    </div>
  );
};

export default Home;