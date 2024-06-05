import { Country } from "../types/CountryType";

const API_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${API_URL}/all`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Fetch error: ${error.message}`);
    } else {
      throw new Error("Unknown error");
    }
  }
};
