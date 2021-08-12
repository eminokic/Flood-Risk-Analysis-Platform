import React,{useState} from "react";
import "@reach/combobox/styles.css";
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import * as locationdata from "../data/newlocationdata.json"

import Heatmap from "./heatmap-component.js";
import icon from "./images/icon.png";
import IOBlogo from "./images/InNOut2.png";

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
  width: "100%",
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
  lat: 34.128,
  lng: -118.3456, 
};

export default function Markers(props) {

  // const [selectedRest, setSelectedRest] = useState(null);

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

    <GoogleMap  
      mapContainerStyle={mapContainerStyle} 
      zoom={9.6} 
      center={center}
    >
      <Heatmap></Heatmap>

      {/* Maps restaurant location data from json to map markers */}
      {locationdata.results.map(restaurant => (
        <Marker 
        key={restaurant.ID} 
        position = {{lat : restaurant.Lat, lng : restaurant.Long}}  
        icon= {{
          url: icon,
          scaledSize: new window.google.maps.Size(30,40),
          
        }}
        onClick = {(event) => {
          props.onClick(restaurant)
        }}
        
        />
      ))}

      {/* conditonal for if restaurant is selected */}
      {props.rest && (
        <InfoWindow
        position = {{lat : (props.rest.Lat + .02), lng : props.rest.Long}}  
        
        // ensure that selected restaurant is reset
        onCloseClick = {(event) => {
          props.onCloseClick(null)
        }}
        >

          <div>
            <div class="IOBlogo">
              <img src={IOBlogo} alt="Salient_Logo" />
            </div>
            IOB Location : {props.rest.Address}
            <br></br>
            Risk Rating : {(Math.random() * 100).toFixed(2)}%
          </div>

        </InfoWindow>
      )}

    </GoogleMap>    
  </div>
    
  
}