import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

function Slider({ images, breakPoints }) {
  return (
    <div className="slider-container">
      <Carousel className="slider" breakPoints={breakPoints}>
        {images.map((image) => {
          return (
            <div className="slider-image" key={image.img.type}>
              {image.img}
              <div key={image.name} className="slider-image-name">
                {image.name}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
