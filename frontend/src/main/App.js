import React from "react";
import { 
  useLoadScript,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import '../css/App.css';

import MainComponent from "../components/main-page/main-component";

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
    <MainComponent></MainComponent>
    </div>
}
