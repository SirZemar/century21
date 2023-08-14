import styled from "styled-components";
import { heightNoNavbar } from "../../utils.styles";
import { device } from "../../devices";
export const LocationContainer = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${heightNoNavbar("80vh")};

    @media ${device.tablet} {
      flex-direction: row;
    }
  }
  .location__info {
    color: var(--light);
    background: var(--primary);
    width: 100%;
    height: 100%;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      width: 80%;
    }

    @media ${device.laptop} {
      width: 40%;
    }
    &__header {
    }
    &__title {
    }
    &__list {
      &__item {
        font-size: 1.4rem;
        white-space: nowrap;
        @media ${device.tablet} {
          font-size: 1.2rem;
          white-space: normal;
        }
        @media ${device.laptop} {
          font-size: 1rem;
        }
      }
    }
  }
  .map-container {
    display: block;
    height: 100%;
    width: 100%;
    /* background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
  }
  .map {
    width: 100%;
    height: 100%;
  }
`;
