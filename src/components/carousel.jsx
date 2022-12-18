import "../styles/carousel.css";
import ArrowRight from "../assets/arrowRight.png";
import ArrowLeft from "../assets/arrowLeft.png";
import { useState } from "react";

function Carousel(json) {
  const [current, setCurrent] = useState(0);
  let length = json.pictures.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slides">
      <div className="slider">
        <div className={json.pictures.length <= 1 ? "displaySlider" : ""}>
          <img src={ArrowLeft} className="left-arrow" onClick={prevSlide} />
          <img src={ArrowRight} className="right-arrow" onClick={nextSlide} />
        </div>

        {json.pictures.map((subRowData, k) => (
          <div className={k === current ? "slide active" : "slide"} key={k}>
            <img src={subRowData} alt="" className="image" />

            <span
              className={
                json.pictures.length <= 1 ? "displaySlider" : "numbers"
              }
            >
              {current + 1}/{json.pictures.length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
