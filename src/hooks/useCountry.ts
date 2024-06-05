import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error(
      "useCountryContext must be used within a CountryContextProvider"
    );
  }
  return context;
};
