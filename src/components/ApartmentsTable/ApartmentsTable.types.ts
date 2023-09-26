export enum FractionNature {
  TOWNHOUSE = "TOWNHOUSE",
  APARTMENT = "APARTAMENTO",
}

export enum FractionStatus {
  SOLD = "SOLD",
  RESERVED = "RESERVED",
  HIDDEN = "HIDDEN",
  OPEN = "OPEN",
}

export type PriceTableCells = {
  status: Status;
  priceSale: string;
};
export type PriceTableFields = PriceTableCells & {
  priceSaleLabel: string;
};

type Nature = FractionNature.TOWNHOUSE | FractionNature.APARTMENT;
export type Status = FractionStatus;

export type Apartment = {
  fraction: string;
  nature: Nature;
  topology: string;
  floor: string;
  areaRaw: string;
  areaExterior: string;
  areaGarage: string;
  areaStorage: string;
  priceSale: string;
  pricePreSale: string;
  blueprintId: string;
  status: Status;
};
