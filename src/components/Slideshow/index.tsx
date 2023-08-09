import React, { useState } from "react";
import { SlideshowContainer } from "./Slideshow.styles";
import { Slide } from "react-slideshow-image";

const Slideshow: React.FC = () => {
  const [slideSpeed, setSlideSpeed] = useState(1000);
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
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

  console.log(slideSpeed);

  return (
    <SlideshowContainer
      onMouseLeave={() => {
        setSlideSpeed(1000);
      }}
      onMouseEnter={() => {
        setSlideSpeed(100);
      }}
    >
      <Slide
        transitionDuration={slideSpeed}
        indicators={true}
        cssClass="slideshow"
        {...properties}
      >
        <div>
          <div
            className="slideshow__slide"
            style={{
              backgroundImage: `url(${images[0]})`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="slideshow__slide"
            style={{
              backgroundImage: `url(${images[1]})`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="slideshow__slide"
            style={{
              backgroundImage: `url(${images[2]})`,
            }}
          ></div>
        </div>
      </Slide>
    </SlideshowContainer>
  );
};

export default Slideshow;
