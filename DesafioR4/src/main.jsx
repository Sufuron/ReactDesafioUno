import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PokemonCard from "./components/PokemonCard.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css/animate.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
