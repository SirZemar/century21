const exponent = "²";
const euro = "€";

type Apartment = {
  fraction: string;
  nature: string;
  topology: string;
  floor: string;
  areaRaw: string;
  areaExterior: string;
  areaGarage: string;
  areaStorage: string;
  priceSale: string;
  pricePreSale: string;
  blueprintId: string;
};

type ApartmentField = {
  label: string;
};

export const apartmentsData: Apartment[] = [
  {
    fraction: "A",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T2 DUPLEX",
    areaRaw: "119.30m²",
    areaExterior: "12.00m²",
    areaGarage: "34.70m²",
    areaStorage: "7.50m²",
    priceSale: "-", //795 000 €
    pricePreSale: "-", //715 500 €
    blueprintId: "1WjOLjZltug9izZjpv1J33TgGA06-Miwy",
  },
  {
    fraction: "B",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T3 DUPLEX",
    areaRaw: "156.60m²",
    areaExterior: "34.00m²",
    priceSale: "-",
    pricePreSale: "RESERVADO",
    areaStorage: "30.90m²",
    areaGarage: "7.40m²",
    blueprintId: "1SUbA8JRtS3tBBK_YioCIOFjoOi_b9Ddr",
  },
  {
    fraction: "C",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T3 DUPLEX",
    areaRaw: "156.60m²",
    areaExterior: "34.00m²",
    priceSale: "-", //1 150 000 €
    pricePreSale: "-", //1 035 000 €
    areaStorage: "31.00m²",
    areaGarage: "7.40m²",
    blueprintId: "1VVB2ahH_00opBcIMkdoIHayeB8YLY4Y9",
  },
  {
    fraction: "D",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T3 DUPLEX",
    areaRaw: "156.60m²",
    areaExterior: "34.00m²",
    priceSale: "1 150 000 €",
    pricePreSale: "1 035 000 €",
    areaStorage: "31.00m²",
    areaGarage: "7.40m²",
    blueprintId: "1H1n-6DPmDZ1WlY3DCRKhu04mir1S2CEv",
  },
  {
    fraction: "E",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T3 DUPLEX",
    areaRaw: "156.60m²",
    areaExterior: "34.00m²",
    priceSale: "-", //1 150 000 €
    pricePreSale: "-", //1 035 000 €
    areaStorage: "25.48m²",
    areaGarage: "7.40m²",
    blueprintId: "193vOTSTLz4M7oMj_g38kSlT6qulzZOUs",
  },
  {
    fraction: "F",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T3 DUPLEX",
    areaRaw: "156.20m²",
    areaExterior: "34.00m²",
    priceSale: "-", //1 150 000 €
    pricePreSale: "-", //1 035 000 €
    areaStorage: "25.48m²",
    areaGarage: "7.40m²",
    blueprintId: "14vrhhG23dScbjgQwAOhmKZsP7XDx8AZJ",
  },
  {
    fraction: "G",
    nature: "TOWNHOUSE",
    floor: "2",
    topology: "T2 DUPLEX",
    areaRaw: "126.00m²",
    areaExterior: "25.00m²",
    priceSale: "-", //935 000 €
    pricePreSale: "-", //841 500 €
    areaStorage: "13.32m²",
    areaGarage: "7.50m²",
    blueprintId: "19puKKbcc8bBkIyDRTD3mBatJGaDqDEHR",
  },
  {
    fraction: "H",
    nature: "APARTAMENTO",
    floor: "5",
    topology: "T2 DUPLEX",
    areaRaw: "103.80m²",
    areaExterior: "10.00m²",
    priceSale: "-", //750 000 €
    pricePreSale: "-", //675 000 €
    areaStorage: "26.30m²",
    areaGarage: "5.00m²",
    blueprintId: "1tuNPUjBXF0fTSgEKx-IX1Amc57soXJHQ",
  },
  {
    fraction: "I",
    nature: "APARTAMENTO",
    floor: "5",
    topology: "T2 DUPLEX",
    areaRaw: "100.00m²",
    areaExterior: "10.00m²",
    priceSale: "750 000 €",
    pricePreSale: "675 000 €",
    areaStorage: "26.30m²",
    areaGarage: "5.00m²",
    blueprintId: "1zR1XW_yC8uDIq9dS-vXzeYk3f12mcvnm",
  },
  {
    fraction: "J",
    nature: "APARTAMENTO",
    floor: "5",
    topology: "T2 DUPLEX",
    areaRaw: "100.00m²",
    areaExterior: "10.00m²",
    priceSale: "-", //750 000 €
    pricePreSale: "-", //675 000 €
    areaStorage: "26.30m²",
    areaGarage: "5.00m²",
    blueprintId: "1EQWnYfpZzG1qFtVqjPjk17-a3lfyNZgn",
  },
  {
    fraction: "K",
    nature: "APARTAMENTO",
    floor: "5",
    topology: "T2 DUPLEX",
    areaRaw: "103.80m²",
    areaExterior: "10.00m²",
    priceSale: "-",
    pricePreSale: "RESERVADO",
    areaStorage: "26.30m²",
    areaGarage: "5.00m²",
    blueprintId: "1v_TxzgAk0KLseclJLL7CEFdDKUXABEqK",
  },
  {
    fraction: "L",
    nature: "APARTAMENTO",
    floor: "4",
    topology: "T2",
    areaRaw: "91.20m²",
    areaExterior: "16.00m²",
    priceSale: "-", //675 000 €
    pricePreSale: "-", //607 500 €
    areaStorage: "18.80",
    areaGarage: "5.00m²",
    blueprintId: "1fpIKJI_3Xks4WG8QhMwryYI1z8alWMSA",
  },
  {
    fraction: "M",
    nature: "APARTAMENTO",
    floor: "4",
    topology: "T2",
    areaRaw: "91.20m²",
    areaExterior: "16.00m²",
    priceSale: "675 000 €",
    pricePreSale: "607 500 €",
    areaStorage: "18.00m²",
    areaGarage: "5.00m²",
    blueprintId: "1u1sKFWEwGGpzTdgwfKs2LE5PpnpYJMsF",
  },
];
