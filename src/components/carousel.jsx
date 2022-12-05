import "../styles/carousel.css";
import ArrowRight from "../assets/arrowRight.png";
import ArrowLeft from "../assets/arrowLeft.png";
import { useState } from "react";

function Carousel(pictures) {
  const [current, setCurrent] = useState(0);
  let length = pictures;
  console.log(pictures);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <img src={ArrowLeft} className="left-arrow" onClick={prevSlide} />
      <img src={ArrowRight} className="right-arrow" onClick={nextSlide} />
      {pictures.pictures.map((subRowData, k) => (
        <div className={k === current ? "slide active" : "slide"} key={k}>
          <img src={subRowData} alt="" className="image" />

          <span className="numbers">
            {current + 1}/{pictures.pictures.length}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
