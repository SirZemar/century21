import styled from "styled-components";
import { Map } from "../../images";
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
      }
    }
  }
  .map {
    display: block;
    background-image: url(${Map});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
