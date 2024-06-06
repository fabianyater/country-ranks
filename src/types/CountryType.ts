export type SortType = "Population" | "Area" | "Name";

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
  status: string;
}
