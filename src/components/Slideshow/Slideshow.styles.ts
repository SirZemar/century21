import styled from "styled-components";
import { heightNoNavbar } from "../../utils.styles";

export const SlideshowContainer = styled.div<any>`
  .slideshow {
    max-width: 100%;
    &__slide {
      height: ${heightNoNavbar("60vh")};
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-color: var(--primary);
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
