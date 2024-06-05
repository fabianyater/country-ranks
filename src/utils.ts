export const addPluralText = (totalCountries: number): string => {
  return `Found ${totalCountries} ${
    totalCountries === 1 ? "country" : "countries"
  }`;
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
