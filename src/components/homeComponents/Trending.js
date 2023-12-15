import React from 'react';
import FristImg from '../../images/cards/card-1.jpg';
import SecondImg from '../../images/cards/card-2.jpg';
import ThridImg from '../../images/cards/card-3.jpg';
import FourthImg from '../../images/cards/card-4.jpg';

const Trending = () => (
  <div className="TrendCover">
    <div className="TrendSection">
      <p className="SectionTrend">Trending</p>
      <hr className="TitleUnderTrend" />
      <div className="CardGroup">
        <div className="Card">
          <img src={FristImg} className="CardImage" alt="Product Display" />
          <div className="Caption">
            <p>Product Name</p>
          </div>
        </div>
        <div className="Card">
          <img src={SecondImg} className="CardImage" alt="Product Display" />
          <div className="Caption">
            <p>Product Name</p>
          </div>
        </div>
        <div className="Card">
          <img src={ThridImg} className="CardImage" alt="Product Display" />
          <div className="Caption">
            <p>Product Name</p>
          </div>
        </div>
        <div className="Card">
          <img src={FourthImg} className="CardImage" alt="Product Display" />
          <div className="Caption">
            <p>Product Name</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Trending;
