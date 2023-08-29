import styled from "styled-components";
import { TitleDecoratorImgColor } from "../TitleShieldDecorator";
import { TitleDecoratorImgSize } from "../TitleShieldDecorator";

interface Props {
  size?: string;
  color?: string;
}

export const SectionHeaderContainer = styled.header`
  white-space: nowrap;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  &&.medium-size {
    padding-bottom: 20px;
  }
`;

export const TitleDecorator = styled.span<Props>`
  width: 3em;
  height: 20px;
  display: block;
  border-bottom: 3px solid ${({ color }) => `var(--${color})`};
`;