import logo from "../../assets/Logo.svg";
import bgImage from "../../assets/hero-image-wr.jpg";
import Aside from "../../components/Aside";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/Table";
import { useCountryContext } from "../../hooks/useCountry";
import { addPluralText } from "../../utils";
import styles from "./styles.module.css";

function Home() {
  const { totalCountries } = useCountryContext();
  return (
    <>
      <div className={styles.backgoundImage}>
        <img src={bgImage} alt="Image of the planet form space" />
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} alt="World Ranks logo" />
        </header>
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
      </div>
    </>
  );
}

export default Home;
