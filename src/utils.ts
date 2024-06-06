export const addPluralText = (totalCountries: number): string => {
  return `Found ${totalCountries} ${
    totalCountries === 1 ? "country" : "countries"
  }`;
};

export const capitalize = (word: string): string => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
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
