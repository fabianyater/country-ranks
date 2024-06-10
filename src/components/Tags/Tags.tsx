import { FC, useEffect, useState } from "react";
import { useCountryContext } from "../../hooks/useCountry";
import { FilterValues } from "../../types/CountryType";
import styles from "./styles.module.css";

type TagsProps = {
  title: string;
};

const Tags: FC<TagsProps> = ({ title }) => {
  const { selectedFilters, handleSelectedFilter } = useCountryContext();
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    handleSelectedFilter(title as FilterValues);
  };

  useEffect(() => {
    setSelected(selectedFilters.includes(title as FilterValues));
  }, [selectedFilters, title]);

  return (
    <div className={styles.tags} onClick={handleClick} data-selected={selected}>
      <span>{title}</span>
    </div>
  );
};

export default Tags;
