import styled from "styled-components";
import { device } from "../../devices";

export const FooterContainer = styled.footer`
  color: var(--light);

  p {
    padding: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: left;

    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-evenly;
    }
    &__card {
      padding: 20px 0;
      width: 100%;

      @media ${device.tablet} {
        width: 50%;
      }
      @media ${device.laptop} {
        padding: 0;
        width: auto;
      }
    }
  }
`;
