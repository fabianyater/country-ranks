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
  };
  population: number;
  area: number;
  region: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  unMember: boolean;
  independent: boolean;
}
