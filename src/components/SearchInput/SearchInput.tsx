import { FC, InputHTMLAttributes } from "react";
import { SearchIcon } from "../../assets/icons/SvgIcon";
import styles from "./styles.module.css";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        {...props}
        type="text"
        placeholder="Search by Name, Region, Subregion"
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
