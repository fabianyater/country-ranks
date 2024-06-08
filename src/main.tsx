import React from "react";
import ReactDOM from "react-dom/client";
import { CountryContextProvider } from "./context/CountryContext.tsx";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryContextProvider>
      <AppRoutes />
    </CountryContextProvider>
  </React.StrictMode>
);
