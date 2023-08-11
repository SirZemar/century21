import styled from "styled-components";
import { HeroHouse } from "../../images";
import { heightNoNavbar } from "../../utils.styles";
import { device } from "../../devices";

export const ProjectContainer = styled.div`
  h2 {
  }

  header {
    margin: 10px;
  }

  p,
  h2 {
    padding: 20px;
  }
`;

export const Section = styled.section`
  width: 100vw;

  &.background-color-primary {
    background-color: var(--primary);
  }

  &.background-color-secondary {
    background-color: var(--secondary);
  }

  &.background-color-light {
    background-color: var(--light);
  }

  @media ${device.tablet} {
    padding: 40px 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  @media ${device.laptopL} {
    max-width: 1000px;
  }

  @media ${device.desktop} {
    max-width: 1200px;
  }
`;

export const HeroImage = styled.div`
  background-image: url("${HeroHouse}");
  background-position: center;
  display: block;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${heightNoNavbar("80vh")};
  color: var(--light);

  .overview {
    &__text {
      max-width: 600px;
      text-align: center;
    }
  }

  @media ${device.tablet} {
    min-height: 30vh;
  }
`;

export const Views = styled.div`
  min-height: ${heightNoNavbar("60vh")};
  .views {
    &__image-one,
    &__image-two {
      max-width: 100%;
    }

    &__text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: ${heightNoNavbar("30vh")};
      min-height: 300px;

      @media ${device.laptop} {
        height: auto;
        min-height: auto;
      }
    }
    &__text {
      text-align: center;

      @media ${device.tablet} {
        text-align: start;
      }
    }
  }

  @media ${device.tablet} {
    padding: 20px;
    display: grid;
    grid-template:
      "a b" 45%
      "c b" 55% / 40% 60%;
    .views {
      &__image-one,
      &__image-two {
        max-height: 100%;
        padding: 20px;
      }
      &__image-one {
        grid-area: a;
        place-self: start center;
      }

      &__image-two {
        grid-area: b;
        place-self: start center;
      }
      &__text {
        grid-area: c;
        place-self: center;
        padding: 10%;
      }
    }
  }

  @media ${device.laptop} {
    grid-template:
      "a b" 50%
      "c b" 50% / 50% 50%;
  }
  @media ${device.desktop} {
    grid-template:
      "a b" 80%
      "c b" 20% / 50% 50%;
  }
`;

export const Blueprints = styled.div`
  padding: 40px 0px;
  text-align: center;

  @media ${device.laptop} {
    padding: 0px;
  }
`;