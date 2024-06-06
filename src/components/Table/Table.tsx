import { useCountryContext } from "../../hooks/useCountry";
import { tableHeaders } from "../../utils";
import styles from "./styles.module.css";

const Table = () => {
  const { countries, sortType, isCountriesLoading } = useCountryContext();

  const sortedBy = (sortType: string) => {
    return countries.sort((a, b) => {
      if (sortType === "Population") {
        return b.population - a.population;
      } else if (sortType === "Area") {
        return b.area - a.area;
      } else if (sortType === "Name") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return 0;
      }
    });
  };

  const sortedCountries = sortedBy(sortType);

  return (
    <table className={styles.table}>
      <thead className={styles.table_header}>
        <tr>
          {tableHeaders.map((option, index) => (
            <th key={index} scope="col" className={styles.col_header}>
              {option.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isCountriesLoading ? (
          <tr>
            <td>
              <span className={styles.text}>Loading...</span>
            </td>
          </tr>
        ) : countries.length === 0 ? (
          <tr>
            <td>
              <span className={styles.text}>No countries found</span>
            </td>
          </tr>
        ) : (
          sortedCountries.map((country, index) => (
            <tr key={index} className={styles.row_body}>
              <td className={styles.flag}>
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className={styles.flag}
                />
              </td>
              <td className={styles.text}>{country.name.common}</td>
              <td className={styles.text}>
                {country.population.toLocaleString("es-ES")}
              </td>
              <td className={styles.text}>
                {country.area.toLocaleString("es-ES")}
              </td>
              <td className={styles.text}>{country.region}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
