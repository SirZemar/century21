import styled from "styled-components";

interface Props {
  size: string;
  color: string;
}
export const TitleDecorationContainer = styled.div`
  display: flex;
`;

export const Image = styled.img<Props>`
  max-height: 20px;
  filter: invert(100%) sepia(100%) saturate(1000%) hue-rotate(-40deg);
`;
