import React, { ReactNode, useEffect, useState } from "react";
import { fetchAllCountries } from "../api/countryApi";
import { Country, SortType } from "../types/CountryType";

interface CountryContextType {
  totalCountries: number;
  countries: Country[];
  sortType: SortType;
  isCountriesLoading: boolean;
  setTotalCountries: React.Dispatch<React.SetStateAction<number>>;
  updateSortType: (value: SortType) => void;
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
        isCountriesLoading,
        setTotalCountries,
        updateSortType,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
