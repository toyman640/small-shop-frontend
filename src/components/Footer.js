import React from 'react';
import Inst from '../images/socials/instagram2.png';
import Fb from '../images/socials/facebook.png';
import Twit from '../images/socials/twitter.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="FooterSection">
      <p className="FooterTitle">Milky way gadgets</p>
      <ul className="SocialGroup">
        <li>
          <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
            <img className="SocialIcons" src={Fb} alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img className="SocialIcons" src={Inst} alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img className="SocialIcons" src={Twit} alt="Twitter logo" />
          </a>
        </li>
      </ul>
      <p className="CopyRight">
        &#169;
        {currentYear}
        .
        All right reserved.
      </p>
    </div>
  );
};

export default Footer;
