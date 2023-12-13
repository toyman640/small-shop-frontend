import React from 'react';
import Banner from './homeComponents/Banner';
import LatestProducts from './homeComponents/LatestProduct';
import Trending from './homeComponents/Trending';

const Home = () => (
  <div className="Home-page">
    <Banner />
    <LatestProducts />
    <Trending />
  </div>
);

export default Home;
