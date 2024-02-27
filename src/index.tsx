import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeatherContext from "./WeatherContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <WeatherContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WeatherContext>
);
