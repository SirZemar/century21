import styled, { keyframes } from "styled-components";
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

  &&#overview,
  &&#apartments,
  &&#location,
  &&#contact {
    scroll-margin-block-start: calc(var(--navbarHeight) - 20px);
  }
  @media ${device.tablet} {
    padding: 40px 0;
  }
`;

export const Container = styled.div``;

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

const kf = keyframes`
  to{ filter:none}
`;

export const HeroImage = styled.div`
  filter: grayscale(100%) brightness(20%);
  display: block;
  width: 100%;
  height: 100vh;
  animation: ${kf} 1s linear forwards;
  img {
    &.loaded {
      width: 100%;
      height: 100%;
      aspect-ratio: 1/ 1;
      object-fit: cover;
      object-position: 50% 50%;
    }

    &.loading {
      display: none;
    }
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${heightNoNavbar("80vh")};
  color: var(--light);
  padding: 40px 0;

  .overview {
    &__text {
      max-width: 600px;
      text-align: center;
    }
  }

  @media ${device.tablet} {
    min-height: 40vh;
  }
`;

export const Views = styled.div`
  .views {
    &__image-one,
    &__image-two {
      width: 100%;
      height: 100%;
      max-width: 100%;
      object-fit: cover;
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

export const Apartments = styled.div`
  .showmore-hide {
    display: block;
    @media ${device.laptop} {
      display: none;
    }
  }
  .table-hide {
    display: none;
    @media ${device.laptop} {
      display: flex !important;
    }
  }
  .show {
    display: flex !important;
  }
`;

export const BlueprintsContainer = styled.div`
  padding: 40px 0px;
  text-align: center;
`;
