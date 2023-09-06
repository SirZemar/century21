import styled from "styled-components";
import { heightNoNavbar } from "../../utils.styles";
import { device } from "../../devices";
export const LocationContainer = styled.div`
  & {
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
        padding: 20px 0;

        @media ${device.tablet} {
          font-size: 1.2rem;
          white-space: normal;
          padding: 10px 0;
        }
        @media ${device.laptop} {
          font-size: 1rem;
        }
        &__reference {
          display: flex;
          align-items: center;
          &__icon {
            -webkit-user-drag: none;
            user-select: none;
            width: 30px;
            height: 30px;
            margin: 0 10px;
          }
          &__text {
            padding: 0;
            line-height: 1.8rem;
            @media ${device.laptop} {
              line-height: 1.5rem;
            }
            &__distance {
              padding-left: 5px;
              font-size: 0.9em;
              color: var(--neutralLighter);
            }
          }
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
  }
  .map {
    width: 100%;
    height: 100%;
  }
`;
