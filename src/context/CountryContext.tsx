import React, { ReactNode, useEffect, useState } from "react";
import { fetchAllCountries } from "../api/countryApi";

interface CountryContextType {
  totalCountries: number;
  setTotalCountries: React.Dispatch<React.SetStateAction<number>>;
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

  const getCountries = async () => {
    try {
      const countries = await fetchAllCountries();
      setTotalCountries(countries.length);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ totalCountries, setTotalCountries }}>
      {children}
    </CountryContext.Provider>
  );
};
