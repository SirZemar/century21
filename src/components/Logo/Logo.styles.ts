import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;

  h2 {
    font-family: initial;
  }

  &.short {
    position: absolute;
    padding-right: 5px;
    margin-left: 50px;
    justify-content: flex-end;
    top: 0;
    width: calc(100% - 50px);
    z-index: 2000;
  }
`;
