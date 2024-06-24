import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll, responsive }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} responsive={responsive}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
