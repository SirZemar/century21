import React from "react";
import { SectionHeaderContainer } from "./SectionHeader.styles";
import TitleDecorator from "../TitleDecorator";
import {
  TitleDecoratorImgSize,
  ImageSize,
  TitleDecoratorImgColor,
  ImageColor,
} from "../TitleDecorator";

interface Props {
  children: string;
  size?: ImageSize;
  color?: ImageColor;
}

const SectionHeader: React.FC<Props> = ({
  children,
  size = TitleDecoratorImgSize.SMALL,
  color = TitleDecoratorImgColor.SECONDARY,
}) => {
  return (
    <SectionHeaderContainer
      className={size === TitleDecoratorImgSize.MEDIUM ? "medium-size" : ""}
    >
      <TitleDecorator size={size} color={color}>
        {children}
      </TitleDecorator>
    </SectionHeaderContainer>
  );
};

export default SectionHeader;
