import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide1 = ({ children, responsive }) => {
  return (
    <div style={{ marginLeft: "30px", marginTop: "40px" }}>
      <Carousel responsive={responsive}>{children}</Carousel>
    </div>
  );
};

export default Slide1;
