import React from "react";
import { SectionHeaderContainer } from "./SectionHeader.styles";
import TitleDecoration from "../TitleDecoration";

interface Props {
  children: string;
}
const SectionHeader: React.FC<Props> = ({ children }) => {
  return (
    <SectionHeaderContainer>
      <TitleDecoration>{children}</TitleDecoration>
    </SectionHeaderContainer>
  );
};

export default SectionHeader;
