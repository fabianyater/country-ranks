import { FC } from "react";
import styles from "./styles.module.css";

type InfoRowProps = {
  label: string;
  value: string;
};

const InfoRow: FC<InfoRowProps> = ({ label, value }) => (
  <div className={styles.container}>
    <span className={`${styles.text} ${styles.title}`}>{label}</span>
    <span className={`${styles.text} ${styles.subtitle}`}>{value}</span>
  </div>
);

export default InfoRow;
