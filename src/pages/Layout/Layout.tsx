import { FC, ReactNode, useEffect } from "react";
import logo from "../../assets/Logo.svg";
import bgImage from "../../assets/hero-image-wr.jpg";
import styles from "./styles.module.css";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className={styles.backgoundImage}>
        <img src={bgImage} alt="Image of the planet form space" />
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} alt="World Ranks logo" />
        </header>
        {children}
      </div>
    </>
  );
};

export default Layout;
