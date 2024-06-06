import { FC, useState } from "react";
import { FilterValues } from "../../types/CountryType";
import styles from "./styles.module.css";

type TagsProps = {
  title: string;
  handleSelectedFilter: (filterValue: FilterValues) => void;
};

const Tags: FC<TagsProps> = ({ title, handleSelectedFilter }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
    handleSelectedFilter(title as FilterValues);
  };

  return (
    <div className={styles.tags} onClick={handleClick} data-selected={selected}>
      <span>{title}</span>
    </div>
  );
};

export default Tags;
