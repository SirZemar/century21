import React, { useState, useEffect } from "react";
import { Container, SlideshowContainer } from "./Slideshow.styles";
import { Slide } from "react-slideshow-image";
import { sizes as deviceWidth, sizes } from "../../devices";
import { slideshowImages } from "../../images/apartment";
import SectionHeader from "../../common/components/SectionHeader";
import {
  TitleDecoratorImgColor,
  TitleDecoratorImgSize,
} from "../../common/components/TitleShieldDecorator";
import useWindowResize from "../../hooks/useWindowResize";
import { useTranslate } from "../../hooks/useTranslate";

const Slideshow: React.FC = () => {
  const [slideSpeed, setSlideSpeed] = useState(0);
  const screenWidth = useWindowResize();
  const translate = useTranslate();

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

  useEffect(() => {
    screenWidth > deviceWidth.laptop ? setSlideSpeed(1000) : setSlideSpeed(100);
  }, [screenWidth]);

  return (
    <>
      <Container
        className="center-row"
        style={{
          backgroundColor:
            screenWidth < sizes.tablet ? "var(--primary)" : "var(--light)",
          marginBottom: "-2px",
          color: screenWidth < sizes.tablet ? "var(--light)" : "var(--primary)",
        }}
      >
        <SectionHeader
          color={
            screenWidth < sizes.tablet
              ? TitleDecoratorImgColor.SECONDARY
              : TitleDecoratorImgColor.PRIMARY
          }
          size={TitleDecoratorImgSize.LARGE}
        >
          {translate.SLIDESHOW.HEADER}
        </SectionHeader>
      </Container>
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
                alt="Apartment"
                draggable={false}
                src={image}
                className="slideshow__slide-image"
              />
            </div>
          ))}
        </Slide>
      </SlideshowContainer>
    </>
  );
};

export default Slideshow;
