import React from "react";
import { LanSelectContainer } from "./LanSelect.styles";

const LanSelect: React.FC = () => {
  return (
    <LanSelectContainer>
      <span className="language__select" id="language__english">
        En
      </span>
      <span> | </span>
      <span className="language__select" id="language__portuguese">
        Pt
      </span>
    </LanSelectContainer>
  );
};

export default LanSelect;
