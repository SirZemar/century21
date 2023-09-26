import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  user-select: none;
  white-space: nowrap;
  h2 {
    font-family: initial;
  }

  &.short {
    justify-content: flex-end;
    order: 3;
  }
`;
