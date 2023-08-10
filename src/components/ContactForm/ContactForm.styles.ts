import styled from "styled-components";
import { device } from "../../devices";

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  && .form {
    max-width: 80%;
    width: 100%;

    @media ${device.tablet} {
      max-width: 100%;
    }

    .error-message {
      p {
        padding: 0;
      }
    }
  }
`;