import React from "react";
import { LocationContainer } from "./Location.styles";
import { translate } from "../../translate";
import SectionHeader from "../../common/components/SectionHeader";
import Map from "../Map";
const Location: React.FC = () => {
  return (
    <LocationContainer>
      <div className="location__info">
        <SectionHeader>{translate.LOCATION.HEADER}</SectionHeader>
        <h2 className="location__info__title">{translate.LOCATION.TITLE}</h2>
        <ul className="location__info__list">
          <li className="location__info__list__item">
            {translate.LOCATION.DESCRIPTION.ITEM1}
            <p className="location__info__list__item__value">- 200m</p>
          </li>
          <li className="location__info__list__item">
            {translate.LOCATION.DESCRIPTION.ITEM2}
            <p className="location__info__list__item__value">- 400m</p>
          </li>
          <li className="location__info__list__item">
            {translate.LOCATION.DESCRIPTION.ITEM3}
            <p className="location__info__list__item__value">- 450m</p>
          </li>
        </ul>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </LocationContainer>
  );
};

export default Location;
