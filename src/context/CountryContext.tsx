import React, { ReactNode, useEffect, useState } from "react";
import { fetchAllCountries } from "../api/countryApi";
import { Country, FilterValues, SortType } from "../types/CountryType";

interface CountryContextType {
  totalCountries: number;
  countries: Country[];
  sortType: SortType;
  isCountriesLoading: boolean;
  selectedFilters: FilterValues[];
  setTotalCountries: React.Dispatch<React.SetStateAction<number>>;
  updateSortType: (value: SortType) => void;
  handleSelectedFilter: (filterValue: FilterValues) => void;
}

export const CountryContext = React.createContext<
  CountryContextType | undefined
>(undefined);

interface CountryContextProviderProps {
  children: ReactNode;
}

export const CountryContextProvider = ({
  children,
}: CountryContextProviderProps) => {
  const [totalCountries, setTotalCountries] = useState<number>(0);
  const [countries, setCountries] = useState<Country[]>([]);
  const [isCountriesLoading, setCountriesLoading] = useState<boolean>(false);
  const [sortType, setSortType] = useState<SortType>("Population");
  const [selectedFilters, setSelectedFilters] = useState<FilterValues[]>([]);

  const handleSelectedFilter = (filterValue: FilterValues) => {
    setSelectedFilters((prevSelectedFilter) =>
      prevSelectedFilter.includes(filterValue)
        ? prevSelectedFilter.filter((value) => value !== filterValue)
        : [...prevSelectedFilter, filterValue]
    );
  };

  const updateSortType = (value: SortType) => {
    setSortType(value);
  };

  const getCountries = async () => {
    try {
      setCountriesLoading(true);
      const countries = await fetchAllCountries();
      setTotalCountries(countries.length);
      setCountries(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setCountriesLoading(false);
    } finally {
      setCountriesLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        totalCountries,
        countries,
        sortType,
        selectedFilters,
        isCountriesLoading,
        setTotalCountries,
        updateSortType,
        handleSelectedFilter,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
