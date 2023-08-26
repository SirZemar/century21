import styled from "styled-components";
import { device } from "../../devices";

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  header {
    font-size: 2rem;
  }

  .form {
    max-width: 80%;
    width: 100%;

    @media ${device.tablet} {
      max-width: 60%;
    }

    .field.hidden-label > label {
      visibility: hidden;
    }
    .field > label {
      font-size: 1.2rem;

      @media ${device.laptop} {
        font-size: 1rem;
      }
    }
    .error-message {
      p {
        padding: 0;
      }
    }
  }
`;
