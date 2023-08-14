import React from "react";
import { FooterContainer } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="info">
        <div className="info__card">
          <h3>Contacto</h3>
          <p>+351 220137052</p>
        </div>
        <div className="info__card">
          <h3>Localização</h3>
          <p>Praça Gomes Teixeira n˚25 </p>
        </div>
        <div className="info__card">
          <h3>Horário</h3>
          <p>De 2˚ a 6˚ …… 09:30h-13:00h / 14:30h-19:00h </p>
          <p>Sábados …… 10:00h-12:30h </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
