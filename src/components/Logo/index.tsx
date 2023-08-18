import React from "react";
import { LogoContainer } from "./Logo.styles";
import { Logo as LogoImage } from "../../images";
import { useNavigate } from "react-router-dom";

interface Props {
  short?: boolean;
}

const Logo: React.FC<Props> = ({ short = false }) => {
  const navigate = useNavigate();

  const logoHandleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0 });
  };
  return (
    <LogoContainer className={short ? "short" : ""}>
      <img
        alt="Logo"
        onClick={logoHandleClick}
        style={{ height: "60%", cursor: "pointer", padding: "0 10px " }}
        src={LogoImage}
      />
      {!short && (
        <div style={{ cursor: "pointer" }} onClick={logoHandleClick}>
          <h4 style={{ color: "var(--secondary)", lineHeight: "5px" }}>
            Douro 39
          </h4>
          <h2 style={{ color: "white", marginBottom: "-6px" }}>
            Riverside Apartments
          </h2>
        </div>
      )}
    </LogoContainer>
  );
};

export default Logo;
