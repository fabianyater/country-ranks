import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoRow from "../../components/InfoRow";
import SummaryCard from "../../components/SummaryCard";
import { useCountryContext } from "../../hooks/useCountry";
import { Country } from "../../types/CountryType";
import Layout from "../Layout";
import styles from "./styles.module.css";

const CountryDetail: React.FC = () => {
  const navigate = useNavigate();
  const { findCountryByCode } = useCountryContext();
  const country = localStorage.getItem("countryDetails");
  const parsedCountry: Country | null = country ? JSON.parse(country) : null;
  const [neighborCountries, setNeighborCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (parsedCountry && parsedCountry.borders) {
      const neighbors = parsedCountry.borders
        .map((border) => findCountryByCode(border))
        .filter((neighbor): neighbor is Country => neighbor !== undefined);
      setNeighborCountries(neighbors);
    }
  }, [findCountryByCode, parsedCountry]);

  if (!country) {
    return <div>No country details available</div>;
  }

  if (!parsedCountry) {
    return <div>No country details available</div>;
  }

  const languageValues = Object.values(parsedCountry.languages).join(", ");
  const currencyValues = Object.values(parsedCountry.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(", ");

  const formatContinents = (continents: string[]): string => {
    return continents.join(", ");
  };

  const handleCountryDetail = (country: Country) => {
    localStorage.setItem("countryDetails", JSON.stringify(country));
    navigate(`/country/${country.name.common}`);
  };

  return (
    <Layout title={`${parsedCountry.name.common} Overview`}>
      <main className={styles.main}>
        <img
          src={parsedCountry.flags.png}
          alt={parsedCountry.flags.alt}
          className={styles.flag}
        />
        <div className={styles.groupName}>
          <h1>{parsedCountry.name.common}</h1>
          <span>{parsedCountry.name.official}</span>
        </div>
        <div className={styles.cards}>
          <SummaryCard label={"Population"} value={parsedCountry.population} />
          <SummaryCard label={"Area (km²)"} value={parsedCountry.area} />
        </div>
        <div className={styles.info}>
          <InfoRow label="Capital" value={parsedCountry.capital} />
          <InfoRow label="Subregion" value={parsedCountry.subregion} />
          <InfoRow label="Languages" value={languageValues} />
          <InfoRow label="Currencies" value={currencyValues} />
          <InfoRow
            label="Continents"
            value={formatContinents(parsedCountry.continents)}
          />
        </div>
        <footer className={styles.footer}>
          <span className={styles.footer_title}>Neighbouring Countries</span>
          <div className={styles.border_countries}>
            {neighborCountries.map((neighbor, index) => (
              <div
                key={index}
                className={styles.country}
                onClick={() => handleCountryDetail(neighbor)}
              >
                <img
                  src={neighbor.flags.png}
                  alt={neighbor.flags.alt}
                  className={styles.border_flag}
                />
                <span className={styles.border_text}>
                  {neighbor.name.common}
                </span>
              </div>
            ))}
          </div>
        </footer>
      </main>
    </Layout>
  );
};

export default CountryDetail;
