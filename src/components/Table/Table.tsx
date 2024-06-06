import { useCountryContext } from "../../hooks/useCountry";
import { tableHeaders } from "../../utils";
import styles from "./styles.module.css";

const Table = () => {
  const { countries, isCountriesLoading } = useCountryContext();

  /*   if (isCountriesLoading) {
    return <h1>Loading...</h1>;
  } */

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
          <span className={styles.text}>Loading...</span>
        ) : countries.length === 0 ? (
          <span className={styles.text}>No countries found</span>
        ) : (
          countries.map((country, index) => (
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
