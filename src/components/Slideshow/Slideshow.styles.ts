import styled from "styled-components";
import { heightNoNavbar } from "../../utils.styles";

export const SlideshowContainer = styled.div`
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
`;
