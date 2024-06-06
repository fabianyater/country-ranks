import { Country, SortType } from "./types/CountryType";

export const addPluralText = (totalCountries: number): string => {
  return `Found ${totalCountries} ${
    totalCountries === 1 ? "country" : "countries"
  }`;
};

export const capitalize = (word: string): SortType => {
  if (!word) throw new Error("Invalid input: word cannot be empty");

  const capitalized =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  if (["Population", "Area", "Name"].includes(capitalized)) {
    return capitalized as SortType;
  }

  throw new Error(`Invalid input: "${capitalized}" is not a valid SortType`);
};

export const sortCountries = (countries: Country[], sortType: SortType) => {
  const compareFunctions: {
    [key in SortType]: (a: Country, b: Country) => number;
  } = {
    Population: (a: Country, b: Country) => b.population - a.population,
    Area: (a: Country, b: Country) => b.area - a.area,
    Name: (a: Country, b: Country) =>
      a.name.common.localeCompare(b.name.common),
  };

  const compare = compareFunctions[sortType];
  return countries.slice().sort(compare);
};

export const sortOptions = [
  {
    label: "Population",
    value: "population",
  },
  {
    label: "Area",
    value: "area",
  },
  {
    label: "Name",
    value: "name",
  },
];

export const filterOptions = [
  {
    label: "Oceania",
  },
  {
    label: "Africa",
  },
  {
    label: "Asia",
  },
  {
    label: "Europe",
  },
  {
    label: "Americas",
  },
  {
    label: "Antartic",
  },
];

export const tableHeaders = [
  {
    title: "Flag",
  },
  {
    title: "Name",
  },
  {
    title: "Population",
  },
  {
    title: "Area (km²)",
  },
  {
    title: "Region",
  },
];
