import styled from "styled-components";
import { device } from "../../devices";

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 0;
  }
  padding: 40px 0;

  .form {
    max-width: 80%;
    width: 100%;

    @media ${device.tablet} {
      max-width: 60%;
    }

    #form-input-control-phone-country-code {
      min-width: 100px;
    }

    & .fields {
      margin: 0;
      padding: 0;
      gap: 0.5em;
      & .field {
        margin: 0;
        padding: 0;
      }
    }
    & .fields .field:not(.field:has(#form-input-control-phone-number)) {
      margin: 0 0 1em;
    }
    & .field:has(#form-input-control-phone-number) {
      flex: 1 1 auto;
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

    #form-submit-button {
      font-size: 1.1rem;
      background-color: var(--secondary);
      width: 100%;

      @media ${device.tablet} {
        width: auto;
      }
      &:hover {
        background-color: var(--secondaryDark);
      }
    }
    .error-message {
      p {
        padding: 0;
      }
    }
  }
`;
