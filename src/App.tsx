import styles from "./app.module.css";
import logo from "./assets/Logo.svg";
import bgImage from "./assets/hero-image-wr.jpg";
import Aside from "./components/Aside";
import SearchInput from "./components/SearchInput";
import { useCountryContext } from "./hooks/useCountry";
import { addPluralText } from "./utils";

function App() {
  const { totalCountries } = useCountryContext();
  return (
    <>
      <div style={{ position: "absolute", zIndex: "-1" }}>
        <img src={bgImage} alt="" />
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
            <section></section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
