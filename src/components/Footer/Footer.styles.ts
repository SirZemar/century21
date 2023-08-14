import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: var(--light);

  p {
    padding: 0;
  }
  .info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
    text-align: left;
    &__card {
    }
  }
`;
