import React from "react";
import { SlideshowContainer } from "./Slideshow.styles";
import { Slide } from "react-slideshow-image";

const Slideshow: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <SlideshowContainer>
      <Slide cssClass="slideshow">
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
