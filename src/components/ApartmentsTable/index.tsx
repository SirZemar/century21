import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { apartmentsData } from "../../services/ApartmentsData";
import { ApartmentsTableContainer } from "./ApartmentsTable.styles";
import useWindowResize from "../../hooks/useWindowResize";
import { sizes } from "../../devices";
import { useTranslate } from "../../hooks/useTranslate";
import { useNavigate } from "react-router-dom";
import {
  FractionNature,
  FractionStatus,
  PriceTableCells,
  PriceTableFields,
} from "./ApartmentsTable.types";

type Props = {
  setFormMessage: React.Dispatch<React.SetStateAction<string>>;
};

const ApartmentsTable: React.FC<Props> = ({ setFormMessage }) => {
  const screenWidth = useWindowResize();
  const translate = useTranslate();
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const headerLabels = {
    fraction: translate.APARTMENTS.TABLE.HEADER.FRACTION,
    nature: translate.APARTMENTS.TABLE.HEADER.NATURE,
    topology: translate.APARTMENTS.TABLE.HEADER.TOPOLOGY,
    floor: translate.APARTMENTS.TABLE.HEADER.FLOOR,
    areRaw: translate.APARTMENTS.TABLE.HEADER.AREARAW,
    areaExterior: translate.APARTMENTS.TABLE.HEADER.AREAEXTERIOR,
    areaGarage: translate.APARTMENTS.TABLE.HEADER.AREAGARAGE,
    areaStorage: translate.APARTMENTS.TABLE.HEADER.AREASTORAGE,
    priceSale: translate.APARTMENTS.TABLE.HEADER.PRICESALE,
    pricePreSale: translate.APARTMENTS.TABLE.HEADER.PRICEPRESALE,
    info: translate.APARTMENTS.TABLE.HEADER.ACTION,
  };
  useEffect(() => {
    if (screenWidth >= sizes.laptop && isSmallScreen) {
      setIsSmallScreen(false);
    } else if (screenWidth < sizes.laptop && !isSmallScreen) {
      setIsSmallScreen(true);
    }
  }, [screenWidth]);

  const handleBlueprintsButtonClick = (blueprint: string) => {
    navigate(`blueprints/${blueprint}`);
  };

  const handleReservationButtonClick = (fraction: string) => {
    setFormMessage(
      `${translate.APARTMENTS.TABLE.FRACTION.MESSAGE} ${fraction}.`
    );
  };
  return (
    <ApartmentsTableContainer>
      {!isSmallScreen && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{headerLabels.fraction}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.nature}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.topology}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.floor}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.areRaw}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.areaExterior}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.areaGarage}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.areaStorage}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.priceSale}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.pricePreSale}</Table.HeaderCell>
              <Table.HeaderCell>{headerLabels.info}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {apartmentsData.map((apartment, i) => {
              return (
                <Table.Row
                  key={apartment.fraction}
                  style={{
                    backgroundColor:
                      i % 2
                        ? "var(--neutralLightest)"
                        : "var(--secondaryLight)",
                  }}
                >
                  <Table.Cell>{apartment.fraction}</Table.Cell>
                  <Table.Cell>
                    {apartment.nature === FractionNature.TOWNHOUSE
                      ? translate.APARTMENTS.TABLE.FRACTION.NATURE.TOWNHOUSE
                      : translate.APARTMENTS.TABLE.FRACTION.NATURE.APARTMENT}
                  </Table.Cell>
                  <Table.Cell>{apartment.topology}</Table.Cell>
                  <Table.Cell>{apartment.floor}</Table.Cell>
                  <Table.Cell>{apartment.areaRaw}</Table.Cell>
                  <Table.Cell>{apartment.areaExterior}</Table.Cell>
                  <Table.Cell>{apartment.areaGarage}</Table.Cell>
                  <Table.Cell>{apartment.areaStorage}</Table.Cell>
                  <PriceTableCellsBigScreen
                    status={apartment.status}
                    pricePreSale={apartment.pricePreSale}
                    priceSale={apartment.priceSale}
                  />
                  <Table.Cell
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <Button
                      onClick={() =>
                        handleBlueprintsButtonClick(apartment.blueprintId)
                      }
                      className="blueprint-button"
                    >
                      {translate.APARTMENTS.TABLE.FRACTION.ACTION.BLUEPRINT}
                    </Button>
                    <a style={{ color: "rgba(0,0,0,.6)" }} href="#contact">
                      <Button
                        onClick={() =>
                          handleReservationButtonClick(apartment.fraction)
                        }
                        className="blueprint-button"
                      >
                        {translate.APARTMENTS.TABLE.FRACTION.ACTION.CONTACT}
                      </Button>
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
      {isSmallScreen &&
        apartmentsData.map((apartment, i) => {
          return (
            <Table unstackable={true} key={apartment.fraction}>
              <Table.Body className="unstackable">
                <Table.Row
                  key={apartment.fraction}
                  style={{
                    backgroundColor:
                      i % 2
                        ? "var(--neutralLightest)"
                        : "var(--secondaryLight)",
                  }}
                >
                  <Table.Cell>
                    <LabelAndValueSmallScreen
                      label={headerLabels.fraction}
                      value={apartment.fraction}
                    />
                    <LabelAndValueSmallScreen
                      label={headerLabels.nature}
                      value={
                        apartment.nature === FractionNature.TOWNHOUSE
                          ? translate.APARTMENTS.TABLE.FRACTION.NATURE.TOWNHOUSE
                          : translate.APARTMENTS.TABLE.FRACTION.NATURE.APARTMENT
                      }
                    />
                    <LabelAndValueSmallScreen
                      label={headerLabels.topology}
                      value={apartment.topology}
                    />
                    <LabelAndValueSmallScreen
                      label={headerLabels.floor}
                      value={apartment.floor}
                    />
                    <LabelAndValueSmallScreen
                      label={headerLabels.areRaw}
                      value={apartment.areaRaw}
                    />
                    <LabelAndValueSmallScreen
                      label={headerLabels.areaExterior}
                      value={apartment.areaExterior}
                    />
                    <LabelAndValueSmallScreen
                      label={headerLabels.areaStorage}
                      value={apartment.areaStorage}
                    />
                    <PriceTableCellsSmallScreen
                      status={apartment.status}
                      pricePreSale={apartment.pricePreSale}
                      priceSale={apartment.priceSale}
                      pricePreSaleLabel={headerLabels.pricePreSale}
                      priceSaleLabel={headerLabels.priceSale}
                    />
                  </Table.Cell>
                  <Table.Cell
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "250px",
                      gap: "40px",
                    }}
                  >
                    <Button
                      onClick={() =>
                        handleBlueprintsButtonClick(apartment.blueprintId)
                      }
                      className="blueprint-button"
                    >
                      {translate.APARTMENTS.TABLE.FRACTION.ACTION.BLUEPRINT}
                    </Button>
                    <a style={{ color: "rgba(0,0,0,.6)" }} href="#contact">
                      <Button
                        onClick={() =>
                          handleReservationButtonClick(apartment.fraction)
                        }
                        className="blueprint-button"
                      >
                        {translate.APARTMENTS.TABLE.FRACTION.ACTION.CONTACT}
                      </Button>
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          );
        })}
    </ApartmentsTableContainer>
  );
};

const PriceTableCellsBigScreen: React.FC<PriceTableCells> = ({
  status,
  priceSale,
  pricePreSale,
}) => {
  const translate = useTranslate();

  if (status === FractionStatus.OPEN) {
    return (
      <>
        <Table.Cell>{priceSale}</Table.Cell>
        <Table.Cell>{pricePreSale}</Table.Cell>
      </>
    );
  } else if (status === FractionStatus.HIDDEN) {
    return (
      <>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>-</Table.Cell>
      </>
    );
  } else if (status === FractionStatus.RESERVED) {
    return (
      <>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>
          {translate.APARTMENTS.TABLE.FRACTION.STATUS.RESERVED}
        </Table.Cell>
      </>
    );
  } else if (status === FractionStatus.SOLD) {
    return (
      <>
        <Table.Cell>
          {translate.APARTMENTS.TABLE.FRACTION.STATUS.SOLD}
        </Table.Cell>
        <Table.Cell>-</Table.Cell>
      </>
    );
  }
  return null;
};

const PriceTableCellsSmallScreen: React.FC<PriceTableFields> = ({
  status,
  priceSale,
  pricePreSale,
  priceSaleLabel,
  pricePreSaleLabel,
}) => {
  const translate = useTranslate();

  if (status === FractionStatus.OPEN) {
    return (
      <>
        <LabelAndValueSmallScreen label={priceSaleLabel} value={priceSale} />
        <LabelAndValueSmallScreen
          label={pricePreSaleLabel}
          value={pricePreSale}
        />
      </>
    );
  } else if (status === FractionStatus.HIDDEN) {
    return (
      <>
        <LabelAndValueSmallScreen label={priceSaleLabel} value={"-"} />
        <LabelAndValueSmallScreen label={pricePreSaleLabel} value={"-"} />
      </>
    );
  } else if (status === FractionStatus.RESERVED) {
    return (
      <>
        <LabelAndValueSmallScreen label={priceSaleLabel} value={"-"} />
        <LabelAndValueSmallScreen
          label={pricePreSaleLabel}
          value={translate.APARTMENTS.TABLE.FRACTION.STATUS.RESERVED}
        />
      </>
    );
  } else if (status === FractionStatus.SOLD) {
    return (
      <>
        <LabelAndValueSmallScreen
          label={priceSaleLabel}
          value={translate.APARTMENTS.TABLE.FRACTION.STATUS.SOLD}
        />
        <LabelAndValueSmallScreen label={pricePreSaleLabel} value={"-"} />
      </>
    );
  }
  return null;
};

const LabelAndValueSmallScreen: React.FC<any> = ({ label, value }) => (
  <p className="mobile-fraction-table">
    <b>{label}: </b>
    {value}
  </p>
);

export default ApartmentsTable;
