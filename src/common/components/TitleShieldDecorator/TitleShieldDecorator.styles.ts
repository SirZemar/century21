import styled from "styled-components";
import { TitleDecoratorImgColor } from ".";

interface Props {
  size: string;
  color: string;
}
export const TitleShieldDecoratorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img<Props>`
  max-height: ${({ size }) => size};
  width: 100%;
  // Needs to be change to be able to select an exact color
  filter: ${({ color }) =>
    color === TitleDecoratorImgColor.PRIMARY
      ? "nonde"
      : "invert(100%) sepia(100%) saturate(1000%) hue-rotate(-40deg)"};
`;
