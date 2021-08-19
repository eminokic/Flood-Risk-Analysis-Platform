import React, { useEffect, useState } from "react";
import "./splash-screen.css";

import MainComponent from "../main-page/main-component.js";

import logo from '../../images/Salient-Insure.jpg';

function SplashScreenComponent() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://logistics.igniteme.dev/api/data")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>
                <div class="logo">
                <img src={logo} alt="Salient_Logo" />
                </div>
                </span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          <MainComponent></MainComponent>
        </>
      )}
    </>
  );
}

export default SplashScreenComponent;
