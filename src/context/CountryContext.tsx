import React, { ReactNode, useCallback, useEffect, useState } from "react";
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
  searchValue: string;
  selectedFilters: FilterValues[];
  selectedStatus: StatusValues[];
  setTotalCountries: React.Dispatch<React.SetStateAction<number>>;
  updateSortType: (value: SortType) => void;
  handleSelectedFilter: (filterValue: FilterValues) => void;
  handleSelectedStatus: (statusValue: StatusValues) => void;
  handleSearch: (value: string) => void;
  filterByRegions: (countries: Country[], regions: FilterValues[]) => Country[];
  filterByStatus: (status: StatusValues[]) => Country[];
  searchCountryName: (countries: Country[], name: string) => Country[];
  findCountryByCode: (code: string) => Country;
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
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

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

  function searchCountryName(countries: Country[], name: string) {
    if (!searchValue) return countries;
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(name.toLowerCase())
    );
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

  const findCountryByCode = useCallback(
    (code: string): Country => {
      const country = countries.find(
        (c) => c.cca2 === code || c.cca3 === code || c.cioc === code
      );

      if (!country) {
        throw new Error(`Country with code ${code} not found`);
      }

      return country;
    },
    [countries]
  );

  /* const findCountryByCode = (code: string): Country => {
    const country = countries.find(
      (c) => c.cca2 === code || c.cca3 === code || c.cioc === code
    );

    if (!country) {
      throw new Error(`Country with code ${code} not found`);
    }

    return country;
  }; */

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
        searchValue,
        isCountriesLoading,
        setTotalCountries,
        updateSortType,
        handleSelectedFilter,
        handleSelectedStatus,
        handleSearch,
        filterByRegions,
        filterByStatus,
        searchCountryName,
        findCountryByCode,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
