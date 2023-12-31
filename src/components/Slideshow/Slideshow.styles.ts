import styled from "styled-components";
import { heightNoNavbar } from "../../utils.styles";
import { device } from "../../devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 40px;

  @media ${device.tablet} {
    padding-top: 0;
  }
`;

export const SlideshowContainer = styled.div`
  .slideshow {
    max-width: 100%;
    background-color: var(--primary);
    height: ${heightNoNavbar("90vh")};

    &__slide-image {
      max-width: 100%;
      user-select: none;
      object-fit: contain;
      cursor: grab;
    }

    .images-wrap,
    .images-wrap > div {
      height: 100%;
    }
  }
  .indicators {
    margin-top: -20px !important;
    li::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      padding: 5px;
      opacity: 0.8;
      background-color: var(--primary);
    }

    button::before {
      transform: translate(1.5px, 1.5px);
      background: var(--secondary) !important;
      border: 1px outset white;
    }
  }
`;
