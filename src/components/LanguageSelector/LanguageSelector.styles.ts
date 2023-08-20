import styled from "styled-components";

export const LanguageSelectorContainer = styled.ul`
  display: flex;
  align-items: center;
  color: var(--secondary);
  .language-selector__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &__language {
      padding: 5px;
      display: flex;
    }

    &__division {
    }
  }
`;
