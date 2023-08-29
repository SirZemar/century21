import styled from "styled-components";
import { heightNoNavbar } from "../../utils.styles";
import { device } from "../../devices";
export const LocationContainer = styled.div`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
      height: ${heightNoNavbar("80vh")};
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
    padding: 40px 20px;

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
        @media ${device.tablet} {
          font-size: 1.2rem;
          white-space: normal;
        }
        @media ${device.laptop} {
          font-size: 1rem;
        }

        &__value {
          padding: 0;
          padding-left: 20px;
        }
      }
    }
  }
  .map-container {
    display: block;
    height: ${heightNoNavbar("100vh")};
    @media ${device.tablet} {
      height: 100%;
    }
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
