import { sortOptions } from "../../utils";
import styles from "./styles.module.css";

const Select = () => {
  return (
    <select className={styles.select} name="sortSelect" id="sortSelect">
      {sortOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
