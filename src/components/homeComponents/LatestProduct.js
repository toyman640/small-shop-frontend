import React from 'react';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';
import img6 from '../../images/img-6.jpg';
import img7 from '../../images/img-7.jpg';
import img8 from '../../images/img-8.jpg';

const LatestProducts = () => (
  <div className="LatestProduct">
    <p className="SectionTitle">Latest Collection</p>
    <hr className="TitleUnder" />
    <div className="ImageSection">
      <img className="ProductImage1" src={img1} alt="Product 1" />
      <img className="ProductImage2" src={img2} alt="Product 2" />
      <img className="ProductImage3" src={img3} alt="Product 3" />
      <img className="ProductImage4" src={img4} alt="Product 4" />
      <img className="ProductImage5" src={img5} alt="Product 5" />
      <img className="ProductImage6" src={img6} alt="Product 6" />
      <img className="ProductImage7" src={img7} alt="Product 7" />
      <img className="ProductImage8" src={img8} alt="Product 8" />
    </div>
  </div>
);

export default LatestProducts;
