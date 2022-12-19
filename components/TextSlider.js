import React, { useState } from "react";
import { SliderData } from "./SliderData";

const TextSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>

    <section className="slider shadow">
    <div className="title">ève wolfs</div>
      <div className="left-arrow" onClick={prevSlide}>
      &#8592;
      </div>
    
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
                    <div className="slider-text">{slide.text}</div>
            )}
        
          </div>
        );
      })}
        <div className="right-arrow" onClick={nextSlide}>
        &#8594;
      </div>
    </section>
    </> );
};

export default TextSlider;
