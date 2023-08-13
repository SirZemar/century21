import React, { useLayoutEffect, useState, useEffect } from "react";
import { SlideshowContainer } from "./Slideshow.styles";
import { Slide } from "react-slideshow-image";
import { sizes as deviceWidth } from "../../devices";
import { slideshowImages } from "../../images/slideshow";

const Slideshow: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [slideSpeed, setSlideSpeed] = useState(0);
  const images = slideshowImages;

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const arrowProperties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  const handleWindowResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    handleWindowResize();
    screenWidth > deviceWidth.laptop ? setSlideSpeed(1000) : setSlideSpeed(100);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => handleWindowResize());
    return window.removeEventListener("resize", () => handleWindowResize());
  }, [screenWidth]);

  return (
    <SlideshowContainer
      onMouseLeave={() => {
        if (screenWidth > deviceWidth.laptop) setSlideSpeed(1000);
      }}
      onMouseEnter={() => {
        if (screenWidth > deviceWidth.laptop) setSlideSpeed(200);
      }}
    >
      <Slide
        transitionDuration={slideSpeed}
        indicators={true}
        cssClass="slideshow"
        {...arrowProperties}
        autoplay={screenWidth > deviceWidth.laptop ? true : false}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src={image}
              className="slideshow__slide-image"
            />
          </div>
        ))}
      </Slide>
    </SlideshowContainer>
  );
};

export default Slideshow;
