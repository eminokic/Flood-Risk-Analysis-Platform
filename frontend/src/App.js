import React, {useState} from "react";
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import './App.css';

import * as locationdata from "./LocationData.json"

/** 
 * You can implement the places api key as follows to avoid redundant rerendering.
 * const libraries = ["places"];
 */ 

/**
 * Map Container Variable
 * Description: This variable sets the width and height for the UI component of react Google maps.
 * vh and vw are relative formatting for view height and view width.
 */
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
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
  lat: 34.0522,
  lng: -118.2436, 
};

export default function App() {
  
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

  //const [selectedRest, setSelectedRest] = useState(null);

  return <div>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center}
    >


    /**
     Maps restaurant location data from json to map markers
    */
    {locationdata.results.map(restaurant => (
      <Marker 
      key={restaurant.reference} 
      position = {{lat : restaurant.geometry.location.lat, lng : restaurant.geometry.location.lng}}  
      
      /** 
      onClick = {() => {
        setSelectedRest(restaurant); 
      }}
      */
      />
    ))}

    </GoogleMap>
    </div>
}
