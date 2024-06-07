import React, { ReactNode, useEffect, useState } from "react";
import { fetchAllCountries } from "../api/countryApi";
import {
  Country,
  FilterValues,
  SortType,
  StatusValues,
} from "../types/CountryType";

interface CountryContextType {
  totalCountries: number;
  countries: Country[];
  sortType: SortType;
  isCountriesLoading: boolean;
  selectedFilters: FilterValues[];
  selectedStatus: StatusValues[];
  setTotalCountries: React.Dispatch<React.SetStateAction<number>>;
  updateSortType: (value: SortType) => void;
  handleSelectedFilter: (filterValue: FilterValues) => void;
  handleSelectedStatus: (statusValue: StatusValues) => void;
  filterByRegions: (countries: Country[], regions: FilterValues[]) => Country[];
  filterByStatus: (status: StatusValues[]) => Country[];
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
  const [selectedStatus, setSelectedStatus] = useState<StatusValues[]>([]);

  const handleSelectedFilter = (filterValue: FilterValues) => {
    setSelectedFilters((prevSelectedFilter) =>
      prevSelectedFilter.includes(filterValue)
        ? prevSelectedFilter.filter((value) => value !== filterValue)
        : [...prevSelectedFilter, filterValue]
    );
  };

  const handleSelectedStatus = (statusValue: StatusValues) => {
    setSelectedStatus((prevSelectedStatus) =>
      prevSelectedStatus.includes(statusValue)
        ? prevSelectedStatus.filter((value) => value !== statusValue)
        : [...prevSelectedStatus, statusValue]
    );
  };

  function filterByRegions(
    countries: Country[],
    regions: FilterValues[]
  ): Country[] {
    if (!selectedFilters.length) return countries;
    return countries.filter((country) =>
      regions.includes(country.region as FilterValues)
    );
  }

  function filterByStatus(selectedStatus: StatusValues[]): Country[] {
    if (!selectedStatus.length) return countries;
    return countries.filter((country) => {
      return selectedStatus.some((status) => {
        if (status === "unMember" && country.unMember) return true;
        if (status === "independent" && country.independent) return true;
        return false;
      });
    });
  }

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
        selectedStatus,
        isCountriesLoading,
        setTotalCountries,
        updateSortType,
        handleSelectedFilter,
        handleSelectedStatus,
        filterByRegions,
        filterByStatus,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
