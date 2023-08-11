import React from "react";
import { TitleLine } from "../../../images";
import { Image, TitleDecorationContainer } from "./TitleDecoration.styles";

interface Props {
  children: string;
  size?: string;
  color?: string;
}
const TitleDecoration: React.FC<Props> = ({
  children,
  size = "20px",
  color = "var(--secondary)",
}) => {
  return (
    <TitleDecorationContainer>
      <span>
        <Image src={TitleLine} size={size} color={color} />
      </span>
      {children}
      <span>
        <Image src={TitleLine} size={size} color={color} />
      </span>
    </TitleDecorationContainer>
  );
};

export default TitleDecoration;
