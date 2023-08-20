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
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      aspect-ratio: 1/1;
      min-width: 30px;
    }

    &__language.selected {
      background-color: var(--secondary);
      border-radius: 50%;
      color: var(--primary);
    }

    &__division {
      margin: 2px;
      text-align: center;
    }
  }
`;
