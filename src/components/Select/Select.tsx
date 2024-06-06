import { ChangeEvent } from "react";
import { useCountryContext } from "../../hooks/useCountry";
import { sortOptions } from "../../utils";
import styles from "./styles.module.css";

const Select = () => {
  const { updateSortType } = useCountryContext();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateSortType(e.target.value);
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
