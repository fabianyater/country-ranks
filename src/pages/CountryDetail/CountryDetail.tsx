// src/pages/CountryDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
const CountryDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  // Lógica para obtener los detalles del país basado en countryId
  // Podrías hacer una llamada a una API aquí y usar useState y useEffect para manejar la data

  return (
    <div className={styles.detail}>
      <h1>Detalle del País</h1>
      <p>Nombre del País: {name}</p>
      {/* Aquí puedes renderizar más detalles sobre el país */}
    </div>
  );
};

export default CountryDetail;
