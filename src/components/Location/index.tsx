import React from "react";
import { LocationContainer } from "./Location.styles";
import SectionHeader from "../../common/components/SectionHeader";
import Map from "../Map";
import { useTranslate } from "../../hooks/useTranslate";
import {
  bridgeIcon,
  trainIcon,
  bullseyeIcon,
  busIcon,
} from "../../images/icons";
import { ItemIndex } from "../../hooks/useTranslate/translate.types";

type Item = {
  icon: string;
  id: ItemIndex;
  description: string;
};
const Location: React.FC = () => {
  const translate = useTranslate();

  const items: Item[] = [
    { icon: trainIcon, id: "ITEM1", description: "Train icon" },
    { icon: busIcon, id: "ITEM2", description: "Bus icon" },
    { icon: bullseyeIcon, id: "ITEM3", description: "Bullseye icon" },
    { icon: bridgeIcon, id: "ITEM4", description: "Bridge icon" },
  ];
  return (
    <LocationContainer>
      <div className="location__info">
        <SectionHeader>{translate.LOCATION.HEADER}</SectionHeader>
        <h2 className="location__info__title">{translate.LOCATION.TITLE}</h2>
        <ul className="location__info__list">
          {items.map((item) => {
            return (
              <li key={item.id} className="location__info__list__item">
                <div className="location__info__list__item__reference">
                  <img
                    alt={item.description}
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
