import "../styles/carousel.css";
import ArrowRight from "../assets/arrowRight.png";
import ArrowLeft from "../assets/arrowLeft.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../datas/data.json";

function Carousel(slides) {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length.pictures.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <img src={ArrowLeft} className="left-arrow" onClick={prevSlide} />
      <img src={ArrowRight} className="right-arrow" onClick={nextSlide} />
      {data
        .filter((rowdata) => rowdata.id === id)
        .map((rowdata, i) =>
          rowdata.pictures.map((subRowData, k) => (
            <div className={k === current ? "slide active" : "slide"} key={k}>
              <img src={subRowData} alt="" className="image" />

              <span className="numbers">
                {current + 1}/{rowdata.pictures.length}
              </span>
            </div>
          ))
        )}
    </div>
  );
}

export default Carousel;
