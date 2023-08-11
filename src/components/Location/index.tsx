import React from "react";
import { LocationContainer } from "./Location.styles";
import { Map } from "../../images";
import TitleDecoration from "../../comon/components/TitleDecoration";
import { translate } from "../../translate";
import SectionHeader from "../../comon/components/SectionHeader";

const Location: React.FC = () => {
  return (
    <LocationContainer>
      <div className="location__info">
        <SectionHeader>{translate.LOCATION.HEADER}</SectionHeader>
        <h2 className="location__info__title">{translate.LOCATION.TITLE}</h2>
        <ul className="location__info__list">
          <li className="location__info__list__item">
            {translate.LOCATION.DESCRIPTION.ITEM1}
          </li>
          <li className="location__info__list__item">
            {translate.LOCATION.DESCRIPTION.ITEM2}
          </li>
          <li className="location__info__list__item">
            {translate.LOCATION.DESCRIPTION.ITEM3}
          </li>
        </ul>
      </div>
      <div className="map"></div>
    </LocationContainer>
  );
};

export default Location;
