import React from 'react';
import bannerImage from '/src/assets/img/banner.jpg'; 

import "./Banner.scss";

 function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="banner-home" className="banner__kasa" />
      <div className="banner__overlay"></div>
      <h1 className="banner__title">
      Chez vous, partout et ailleurs
      </h1>
    </div>
  )
}
export default Banner;