import { FC, useState } from "react";
import styles from "./styles.module.css";

type TagsProps = {
  title: string;
};

const Tags: FC<TagsProps> = ({ title }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className={styles.tags} onClick={handleClick} data-selected={selected}>
      <span>{title}</span>
    </div>
  );
};

export default Tags;
