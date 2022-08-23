import React from "react";
import {
  SiCss3,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiFramer,
  SiJquery,
  SiTailwindcss,
} from "react-icons/si";
import Carousel from "react-elastic-carousel";

//images array
const images = [
  { img: <SiReact />, name: "React.js" },
  { img: <SiJavascript />, name: "Javascript" },
  { img: <SiCss3 />, name: "CSS3" },
  { img: <SiSass />, name: "Sass" },
  { img: <SiTailwindcss />, name: "Tailwind CSS" },
  { img: <SiHtml5 />, name: "HTML5" },
  { img: <SiFramer />, name: "Framer Motion" },
  { img: <SiJquery />, name: "Jquery" },
];

//breakpoints for the carousel slider
const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 400,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 992,
    itemsToShow: 4,
  },
  {
    width: 1200,
    itemsToShow: 5,
  },
];

function Slider() {
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
