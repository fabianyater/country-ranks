import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { CheckIcon } from "../../assets/icons/SvgIcon";
import { useCountryContext } from "../../hooks/useCountry";
import { StatusValues } from "../../types/CountryType";
import styles from "./styles.module.css";
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label, value }) => {
  const { selectedStatus, handleSelectedStatus } = useCountryContext();
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = () => {
    setIsCheck(!isCheck);
    handleSelectedStatus(value as StatusValues);
  };

  useEffect(() => {
    setIsCheck(selectedStatus.includes(value as StatusValues));
  }, [selectedStatus, value]);

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
