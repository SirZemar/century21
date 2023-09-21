import React, { useEffect, useState } from "react";
import { Button, Grid, Table } from "semantic-ui-react";
import { apartmentsData } from "./ApartmentsTable.data";
import { ApartmentsTableContainer } from "./ApartmentsTable.styles";
import useWindowResize from "../../hooks/useWindowResize";
import { sizes } from "../../devices";
import { useTranslate } from "../../hooks/useTranslate";
import { useNavigate } from "react-router-dom";

const ApartmentsTable: React.FC = () => {
  const screenWidth = useWindowResize();
  const translate = useTranslate();
  const navigate = useNavigate();

  const [isSmallScreen, setIsMobile] = useState(false);

  const tableLabels = {
    fraction: "Fração",
    nature: "Natureza",
    topology: "Tipologia",
    floor: "Piso",
    areRaw: "Area Bruta",
    areaExterior: "Area Exterior",
    areaGarage: "Garagem",
    areaStorage: "Arrumos",
    priceSale: "Preço Venda",
    pricePreSale: "Pre Vendas",
    info: "Mais Info",
  };
  useEffect(() => {
    if (screenWidth >= sizes.laptop && isSmallScreen) {
      setIsMobile(false);
    } else if (screenWidth < sizes.laptop && !isSmallScreen) {
      setIsMobile(true);
    }
  }, [screenWidth]);

  const handleBlueprintsButtonClick = (blueprint: string) => {
    navigate(`blueprints/${blueprint}`);
  };
  return (
    <ApartmentsTableContainer>
      {!isSmallScreen && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{tableLabels.fraction}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.nature}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.topology}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.floor}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.areRaw}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.areaExterior}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.areaGarage}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.areaStorage}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.priceSale}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.pricePreSale}</Table.HeaderCell>
              <Table.HeaderCell>{tableLabels.info}</Table.HeaderCell>
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
                  <Table.Cell>{apartment.nature}</Table.Cell>
                  <Table.Cell>{apartment.topology}</Table.Cell>
                  <Table.Cell>{apartment.floor}</Table.Cell>
                  <Table.Cell>{apartment.areaRaw}</Table.Cell>
                  <Table.Cell>{apartment.areaExterior}</Table.Cell>
                  <Table.Cell>{apartment.areaGarage}</Table.Cell>
                  <Table.Cell>{apartment.areaStorage}</Table.Cell>
                  <Table.Cell>{apartment.priceSale}</Table.Cell>
                  <Table.Cell>{apartment.pricePreSale}</Table.Cell>
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
                      Planta
                    </Button>
                    <Button className="blueprint-button">Contactar</Button>
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
                    <p className="mobile-fraction-table">
                      {tableLabels.fraction}: {apartment.fraction}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.nature}: {apartment.nature}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.topology}: {apartment.topology}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.floor}: {apartment.floor}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.areRaw}: {apartment.areaRaw}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.areaExterior}: {apartment.areaExterior}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.areaExterior}: {apartment.areaGarage}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.areaExterior}: {apartment.areaStorage}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.pricePreSale}: {apartment.priceSale}
                    </p>
                    <p className="mobile-fraction-table">
                      {tableLabels.pricePreSale}: {apartment.pricePreSale}
                    </p>
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
                      Planta
                    </Button>
                    <Button className="blueprint-button">Contactar</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          );
        })}
    </ApartmentsTableContainer>
  );
};

export default ApartmentsTable;
