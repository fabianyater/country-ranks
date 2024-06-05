import { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
