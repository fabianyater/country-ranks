import { ChangeEvent } from "react";
import { useCountryContext } from "../../hooks/useCountry";
import { capitalize, sortOptions } from "../../utils";
import styles from "./styles.module.css";

const Select = () => {
  const { updateSortType } = useCountryContext();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const capitalizedWord = capitalize(e.target.value);
    updateSortType(capitalizedWord);
  };

  return (
    <select
      className={styles.select}
      name="sortSelect"
      id="sortSelect"
      onChange={handleChange}
    >
      {sortOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
