import React from "react"
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import './App.css';

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
const center = {
  lat: 34.052235,
  long: -118.243683, 
};

export default function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: ProcessingInstruction.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
  if(!isLoaded) {
    return "Rendering Map...";
  }

  return <div>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center}
    >
    </GoogleMap>
    </div>
}
