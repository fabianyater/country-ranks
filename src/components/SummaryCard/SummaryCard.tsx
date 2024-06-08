import { FC } from "react";
import styles from "./styles.module.css";

type SummaryCardProps = {
  label: string;
  value: number;
};

const SummaryCard: FC<SummaryCardProps> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.text} ${styles.border}`}>{label}</span>
      <span className={styles.text}>{value.toLocaleString("es-ES")}</span>
    </div>
  );
};

export default SummaryCard;
