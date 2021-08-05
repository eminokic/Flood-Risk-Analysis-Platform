import React, {useState} from "react";
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import '../css/App.css';

import * as locationdata from "../data/LocationData.json"

import Heatmap from "../components/heatmap-component.js"
import Markers from "../components/markers-component.js"
import Derek from "../components/derek-component.js"
import {DataTable} from "../components/data-table-component";
import logo from '../components/images/Salient-Insure.jpg';

/**
 * Map Container Variable
 * Description: This variable sets the width and height for the UI component of react Google maps.
 * vh and vw are relative formatting for view height and view width.
 */
const mapContainerStyle = {
  width: "100vw",
  height: "50vh",
};

/**
 * The center variable centers the map to the view assigned.
 * The center of the map shall be Los Angeles, California with the corresponding latitude and longitude.
 */
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 34.002,
  lng: -118.2436, 
};

export default function App() {
  
  const [selectedRest, setSelectedRest] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });


  const mapRef = React.useRef();

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
    <div id = "head" class = "head group">
    <div id = "top" class = "top">
      <img src = {logo} class = "Logo"/>
    </div>
    <div id= "title" class ="title">
      <h1>Flood Risk Analysis</h1>
    </div>
    </div>
    
    <Markers></Markers>
    <DataTable></DataTable>
    <Derek></Derek>
    </div>
}
