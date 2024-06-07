import React from "react";
import styles from "./styles.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <a href="/" className={styles.button}>
        Back home
      </a>
    </div>
  );
};

export default NotFound;
