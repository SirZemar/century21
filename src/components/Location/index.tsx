import React from "react";
import { LocationContainer } from "./Location.styles";
import SectionHeader from "../../common/components/SectionHeader";
import Map from "../Map";
import { useTranslate } from "../../hooks/translate";
import {
  bridgeIcon,
  trainIcon,
  bullseyeIcon,
  busIcon,
} from "../../images/icons";
import { ItemIndex } from "../../hooks/translate/translate.types";

type Item = {
  icon: string;
  id: ItemIndex;
};
const Location: React.FC = () => {
  const translate = useTranslate();

  const items: Item[] = [
    { icon: trainIcon, id: "ITEM1" },
    { icon: busIcon, id: "ITEM2" },
    { icon: bullseyeIcon, id: "ITEM3" },
    { icon: bridgeIcon, id: "ITEM4" },
  ];
  return (
    <LocationContainer>
      <div className="location__info">
        <SectionHeader>{translate.LOCATION.HEADER}</SectionHeader>
        <h2 className="location__info__title">{translate.LOCATION.TITLE}</h2>
        <ul className="location__info__list">
          {items.map((item) => {
            return (
              <li className="location__info__list__item">
                <div className="location__info__list__item__reference">
                  <img
                    className="location__info__list__item__reference__icon"
                    src={item.icon}
                  />
                  <p className="location__info__list__item__reference__text">
                    {translate.LOCATION.DESCRIPTION[`${item.id}`]}
                    <span className="location__info__list__item__reference__text__distance">
                      | {translate.LOCATION.DISTANCE[`${item.id}`]}
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </LocationContainer>
  );
};

export default Location;
