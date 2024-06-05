import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type AsideItemProps = {
  title: string;
  children?: ReactNode;
};

const AsideItem: FC<AsideItemProps> = ({ title, children }) => {
  return (
    <div className={styles.item}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  );
};

export default AsideItem;
