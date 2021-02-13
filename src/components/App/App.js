import React from "react";
import cloudy from "./assets/images/cloudy.png";
import "./App.css";

const App = () => (
  <div className="app">
    <h1>Weather App</h1>
    <div className="app__container">
      <div className="app__container__top">
        <div className="temperaturebanner">
          <div className="temperaturebanner__temperature">
            <div className="degree">
              <div className="degree__figure">17</div>
              <div className="degree__symbol"></div>
              <div className="degree__celsius degree__measure">C</div>
              {/* <div className="degree__seperator">/</div>
              <div className="degree__figure">62.6</div>
              <div className="degree__symbol"></div>
              <div className="degree__fahrenheit degree__measure">F</div> */}
            </div>
            <div className="weather">Cloudy</div>
          </div>
          <div className="temperaturebanner__city">Melbourne</div>
        </div>
        <div className="otherfeatures">
          <div className="feature__humidity">
            <div className="feature__name">HUMIDITY</div>
            <div className="feature__figure">57%</div>
          </div>
          <div className="feature__wind">
            <div className="feature__name">WIND</div>
            <div className="feature__figure">s 21 km/h</div>
          </div>
        </div>
      </div>
      <div className="app__container__bottom">
        <div className="othercities">
          <h2>Other Cities</h2>
          <div className="othercities__singlelocation">
            <div className="othercities__city">Sydney</div>
            <div className="othercities__degree">
              <div className="citydegree__figure">19</div>
              <div className="citydegree__symbol"></div>
              <div className="citydegree__measure">C</div>
            </div>
            <div className="othercities__weather">
              <img src={cloudy} alt="cloudy" />
            </div>
          </div>
          <div className="othercities__singlelocation">
            <div className="othercities__city">Brisbane</div>
            <div className="othercities__degree">
              <div className="citydegree__figure">28</div>
              <div className="citydegree__symbol"></div>
              <div className="citydegree__measure">C</div>
            </div>
            <div className="othercities__weather">
              <img src={cloudy} alt="cloudy" />
            </div>
          </div>
          <div className="othercities__singlelocation">
            <div className="othercities__city">Canberra</div>
            <div className="othercities__degree">
              <div className="citydegree__figure">20</div>
              <div className="citydegree__symbol"></div>
              <div className="citydegree__measure">C</div>
            </div>
            <div className="othercities__weather">
              <img src={cloudy} alt="cloudy" />
            </div>
          </div>
        </div>
        <div className="forecast">
          <h2>Forecast</h2>
        </div>
      </div>
    </div>
  </div>
);

export default App;
