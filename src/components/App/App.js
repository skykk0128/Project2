import React from "react";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="app__container">
      <div className="app__container__top">
        <div className="temperaturebanner"></div>
        <div className="otherfeatures"></div>
      </div>
      <div className="app__container__bottom">
        <div className="othercities">
            <h2>Other Cities</h2>
        </div>
        <div className="forecast">
          <h2>Forecast</h2>
        </div>
      </div>
    </div>
  </div>
);

export default App;
