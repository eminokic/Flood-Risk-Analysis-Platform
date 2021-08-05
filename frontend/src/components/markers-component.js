import React,{useState} from "react";
import "@reach/combobox/styles.css";
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import * as locationdata from "../data/LocationData.json"



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

export default function Markers(props) {

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

  return <div
    // style={{
    //     backgroundColor: 'red',
    //     width: '25vw',
    //     height: '25vh',
    //     border: '1px solid rgba(1, 1, 1, 1)',
    //   }}
    >

    <GoogleMap  
      mapContainerStyle={mapContainerStyle} 
      zoom={10.2} 
      center={center}
    >

      {/* Maps restaurant location data from json to map markers */}
      {locationdata.results.map(restaurant => (
        <Marker 
        key={restaurant.reference} 
        position = {{lat : restaurant.geometry.location.lat, lng : restaurant.geometry.location.lng}}  
        
        onClick = {() => {
          setSelectedRest(restaurant); 
        }}
        
        />
      ))}

      {/* conditonal for if restaurant is selected */}
      {selectedRest && (
        <InfoWindow
        position = {{lat : (selectedRest.geometry.location.lat + .02), lng : selectedRest.geometry.location.lng}}  
        
        // ensure that selected restaurant is reset
        onCloseClick = {() => {
          setSelectedRest(null);
        }}
        >
        
          <div>
            IOB Location : {selectedRest.vicinity}
            <br></br>
            Risk Rating : {(Math.random() * 100).toFixed(2)}%
          </div>

        </InfoWindow>
      )}

    </GoogleMap>    
  </div>
    
  
}