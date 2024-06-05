import { filterOptions } from "../../utils";
import AsideItem from "../AsideItem";
import Select from "../Select";
import Tags from "../Tags";
import styles from "./styles.module.css";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <AsideItem title="Sort by">
        <Select />
      </AsideItem>
      <AsideItem title="Region">
        <div className={styles.tags}>
          {filterOptions.map((option, index) => (
            <Tags key={index} title={option.label} />
          ))}
        </div>
      </AsideItem>
    </aside>
  );
};

export default Aside;
