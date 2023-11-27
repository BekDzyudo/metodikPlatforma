import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PortfolioProvider } from "./pages/profil/components/contexts/editPortfolioContext.jsx";
import { MalumotProvider } from "./pages/profil/components/contexts/editMalumotlarContext.jsx";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <PortfolioProvider>
      <MalumotProvider>
        <App />
      </MalumotProvider>
    </PortfolioProvider>
  </>
);
