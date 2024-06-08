export type SortType = "Population" | "Area" | "Name";
export type FilterValues =
  | "Europe"
  | "Americas"
  | "Antartic"
  | "Oceania"
  | "Africa"
  | "Asia";

export type StatusValues = "unMember" | "independent";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  population: number;
  area: number;
  region: string;
  subregion: string;
  continents: string[];
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  borders: string[];
  cca2: string;
  cca3: string;
  cioc: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  unMember: boolean;
  independent: boolean;
}
