import { FC, InputHTMLAttributes, useState } from "react";
import { CheckIcon } from "../../assets/icons/SvgIcon";
import styles from "./styles.module.css";
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label }) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = () => {
    setIsCheck(!isCheck);
  };

  return (
    <label className={styles.status} onClick={handleClick}>
      <div className={styles.checkbox} data-checked={isCheck}>
        {isCheck && <CheckIcon />}
      </div>
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
