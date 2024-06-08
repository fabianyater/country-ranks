import Aside from "../../components/Aside";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/Table";
import { useCountryContext } from "../../hooks/useCountry";
import { addPluralText } from "../../utils";
import Layout from "../Layout";
import styles from "./styles.module.css";

function Home() {
  const { totalCountries } = useCountryContext();
  return (
    <Layout title="World Ranks">
      <main className={styles.main}>
        <section className={styles.content__header}>
          <span className={styles.total__countries}>
            {addPluralText(totalCountries)}
          </span>
          <SearchInput type="search" />
        </section>
        <section className={styles.content__body}>
          <Aside />
          <section className={styles.table_wrapper}>
            <Table />
          </section>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
