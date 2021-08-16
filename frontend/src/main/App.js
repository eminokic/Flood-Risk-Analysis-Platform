import React from "react";
import { 
  useLoadScript,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import '../css/App.css';


import HomePage from '../components/header-component/header.js';
import SecondPage from '../components/map-component/map-section.js';
import ThirdPage from '../components/data-table/analytic-section.js';

export default function App() {

  /**
   * This load script calls the google maps api key locally. 
   * To do this on your own, create a .env.local file in the top level and copy the following template.
   * 
   * REACT_APP_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
   * 
   */
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="text/javascript" src="../components/jquery.js"></script>
		  <script type="text/javascript" src="../components/declarativeToggle.js"></script>
    </head>
    <body>
    <HomePage></HomePage>
    <div class="background background1"></div>
    <SecondPage></SecondPage>
    <div class="background background1"></div>
    <ThirdPage></ThirdPage>
    </body>
    </div>
}
