import React from 'react';


import "./Banner.scss";

 function Banner({bannerImage, title}) {
  return (
    <div className="banner">
      <img src={bannerImage} alt="banner-home" className="banner__kasa" />
      <div className="banner__overlay"></div>
      <h1 className="banner__title">
      {title}
      </h1>
    </div>
  )
}
export default Banner;