import React from 'react';
import Banner from './homeComponents/Banner';
import LatestProducts from './homeComponents/LatestProduct';
import Trending from './homeComponents/Trending';
import Footer from './Footer';

const Home = () => (
  <div className="Home-page">
    <Banner />
    <LatestProducts />
    <Trending />
    <Footer />
  </div>
);

export default Home;
