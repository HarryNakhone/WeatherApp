import React from "react";

import "./App.css";
import DisplayWeather from "./components/DisplayWeather";
import Description from "./components/Description";
import SearchPlace from "./components/SearchPlace";
import WeatherContext from "./WeatherContext";

function App() {
  return (
    <div className="App">
      <SearchPlace />
      <DisplayWeather />
      <Description />
    </div>
  );
}

export default App;
