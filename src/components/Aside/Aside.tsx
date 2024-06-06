import { useCountryContext } from "../../hooks/useCountry";
import { filterOptions } from "../../utils";
import AsideItem from "../AsideItem";
import CheckBox from "../CheckBox";
import Select from "../Select";
import Tags from "../Tags";
import styles from "./styles.module.css";

const Aside = () => {
  const { handleSelectedFilter } = useCountryContext();
  return (
    <aside className={styles.aside}>
      <AsideItem title="Sort by">
        <Select />
      </AsideItem>
      <AsideItem title="Region">
        <div className={styles.tags}>
          {filterOptions.map((option, index) => (
            <Tags
              key={index}
              title={option.label}
              handleSelectedFilter={handleSelectedFilter}
            />
          ))}
        </div>
      </AsideItem>
      <AsideItem title="Status">
        <CheckBox
          label="Member of the United Nations"
          value="unMember"
          id="unMember"
        />
        <CheckBox label="Independent" value="independent " id="independent" />
      </AsideItem>
    </aside>
  );
};

export default Aside;
