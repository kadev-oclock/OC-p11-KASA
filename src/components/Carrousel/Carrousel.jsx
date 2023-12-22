import React from "react";
import { useState } from "react";
import arrowLeft from "/src/assets/img/fleche_gauche.svg";
import arrowRight from "/src/assets/img/fleche_droite.svg";
import "./Carrousel.scss";

function Carrousel({ sliders }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = (currentIndex - 1 + sliders.length) % sliders.length;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % sliders.length;
    setCurrentIndex(index);
  };

  console.log({ sliders });
  return (
    <>
    <div className="carrousel">
      <div className="carrousel__content">
        {sliders.map((slider, index) => (
        <img src={slider} alt={`Image ${index + 1}`} 
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
        />
        ))} 
      </div>
      
      {sliders.length>1 && <>
      <div className="arrow">
        <div onClick={prevSlide} className="arrow__prev">
          <img src={arrowLeft} alt="Left Arrow" />
        </div>
        <div onClick={nextSlide} className="arrow__next">
          <img src={arrowRight} alt="Right Arrow" />
        </div>
      </div>
      <div>
        {currentIndex+1}/{sliders.length}
      </div>
      </>}
    </div>
 
    </>
  );
}
export default Carrousel;
