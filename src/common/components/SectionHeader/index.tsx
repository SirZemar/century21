import React from "react";
import { SectionHeaderContainer } from "./SectionHeader.styles";
import { TitleDecorator } from "./SectionHeader.styles";
import {
  TitleDecoratorImgSize,
  ImageSize,
  TitleDecoratorImgColor,
  ImageColor,
} from "../TitleShieldDecorator";

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

  let sizeClass = "";
  if (size === TitleDecoratorImgSize.SMALL) {
    sizeClass = "small-size";
  } else if (size === TitleDecoratorImgSize.MEDIUM) {
    sizeClass = "medium-size";
  } else if (size === TitleDecoratorImgSize.LARGE) {
    sizeClass = "large-size";
  }
  return (
    <SectionHeaderContainer className={sizeClass}>
      <TitleDecorator
        color={color}
        style={{ borderRight: `3px solid var(--${color})` }}
      />
      {children}
      <TitleDecorator
        color={color}
        style={{ borderLeft: `3px solid var(--${color})` }}
      />
    </SectionHeaderContainer>
  );
};

export default SectionHeader;
