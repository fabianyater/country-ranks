import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { SearchIcon } from "../../assets/icons/SvgIcon";
import { useCountryContext } from "../../hooks/useCountry";
import styles from "./styles.module.css";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = (props) => {
  const { handleSearch } = useCountryContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        {...props}
        type="text"
        placeholder="Search by Name, Region, Subregion"
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
