import { useCountryContext } from "../../hooks/useCountry";
import { sortCountries, tableHeaders } from "../../utils";
import styles from "./styles.module.css";

const Table = () => {
  const { countries, sortType, isCountriesLoading } = useCountryContext();

  const sortedCountries = sortCountries(countries, sortType);

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
