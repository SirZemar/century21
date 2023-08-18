import React from "react";
import { TitleLine } from "../../../images";
import { Image, TitleDecoratorContainer } from "./TitleDecorator.styles";

export enum TitleDecoratorImgSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TitleDecoratorImgColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type ImageColor =
  | TitleDecoratorImgColor.PRIMARY
  | TitleDecoratorImgColor.SECONDARY;

export type ImageSize =
  | TitleDecoratorImgSize.SMALL
  | TitleDecoratorImgSize.MEDIUM
  | TitleDecoratorImgSize.LARGE;
interface Props {
  children: string;
  size?: ImageSize;
  color?: ImageColor;
}
const TitleDecorator: React.FC<Props> = ({
  children,
  size = TitleDecoratorImgSize.SMALL,
  color = TitleDecoratorImgColor.SECONDARY,
}) => {
  let imageSize = "";
  let imageColor = "";
  if (size === TitleDecoratorImgSize.SMALL) {
    imageSize = "20px";
  } else if (size === TitleDecoratorImgSize.MEDIUM) {
    imageSize = "40px";
  } else if (size === TitleDecoratorImgSize.LARGE) {
    imageSize = "60px";
  }

  if (color === TitleDecoratorImgColor.PRIMARY) {
    imageColor = "var(--primary)";
  } else if (color == TitleDecoratorImgColor.SECONDARY) {
    imageColor = "var(--secondary)";
  }

  return (
    <TitleDecoratorContainer>
      <span>
        <Image src={TitleLine} size={imageSize} color={color} />
      </span>
      {children}
      <span>
        <Image src={TitleLine} size={imageSize} color={color} />
      </span>
    </TitleDecoratorContainer>
  );
};

export default TitleDecorator;
