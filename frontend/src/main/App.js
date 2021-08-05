import React from "react";
import { 
  useLoadScript,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import '../css/App.css';

import Markers from "../components/markers-component.js";
import DataTable from "../components/data-table-component.js";
import SalientHeader from '../components/header.js';

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
    <SalientHeader></SalientHeader>
    <Markers></Markers>
    <DataTable></DataTable>
    </div>
}
