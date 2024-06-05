import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CountryContextProvider } from "./context/CountryContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </React.StrictMode>
);
