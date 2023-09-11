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

  &.medium-size {
    font-size: 2rem;
    padding-bottom: 20px;
  }

  &.large-size {
    font-size: 2.6rem;
    padding-bottom: 30px;
  }
  //TODO should padding be included in size class?
  // TODO smal size missing
`;

export const TitleDecorator = styled.span<Props>`
  width: 3em;
  height: 20px;
  display: block;
  border-bottom: 3px solid ${({ color }) => `var(--${color})`};
`;