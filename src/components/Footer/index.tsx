import React from "react";
import { FooterContainer } from "./Footer.styles";
import { useTranslate } from "../../hooks/translate";

const Footer: React.FC = () => {
  const translate = useTranslate();
  return (
    <FooterContainer>
      <div className="info">
        <div className="info__card">
          <h3>{translate.FOOTER.CONTACT.TITLE}</h3>
          <p>+351 220137052</p>
        </div>
        <div className="info__card">
          <h3>{translate.FOOTER.LOCATION.TITLE}</h3>
          <p>{translate.FOOTER.LOCATION.ADDRESS}</p>
        </div>
        <div className="info__card">
          <h3>{translate.FOOTER.SCHEDULE.TITLE}</h3>
          <p>
            {translate.FOOTER.SCHEDULE.DAYS.PART1} ……{" "}
            {translate.FOOTER.SCHEDULE.TIME.PART1}
          </p>
          <p>
            {translate.FOOTER.SCHEDULE.DAYS.PART2} ……{" "}
            {translate.FOOTER.SCHEDULE.TIME.PART2}{" "}
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
