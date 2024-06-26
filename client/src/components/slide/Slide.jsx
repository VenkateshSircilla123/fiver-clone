import React from "react";
import "./Slide.scss";
// import Slider from "infinite-react-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide = ({ children, slidesToShow, arrowsScroll, responsive }) => {
  return (
    <div className="slide">
      <div className="container">
        {/* <Slider
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          responsive={responsive}
        >
          {children}
        </Slider> */}
      </div>
    </div>
  );
};

export default Slide;
