import React from "react";
import { 
  useLoadScript,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import '../css/App.css';


import HomePage from '../components/header.js';
import SecondPage from '../components/map-section.js';
import ThirdPage from '../components/analytic-section.js';

export default function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  /**
   * The loadError function is a flag for the case that the map does not render properly. 
   */
  if(loadError) {
    return "Error in rendering map. Try Again!";
  }

  /**
   * The isLoaded function checks to see if the map has been rendered each time and properly flags the case if not.
   */
  if(!isLoaded) {return "Rendering Map...";}

  return <div>
    <head>
      <title>Salient Insurance</title>
      <link rel="shortcut icon" type="image/png" href= "./components/images/icon.png" />
    </head>
    <HomePage></HomePage>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
    </div>
}
