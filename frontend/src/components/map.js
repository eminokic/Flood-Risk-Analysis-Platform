import React from "react";
import {GoogleMap} from "@react-google-maps/api";
import "@reach/combobox/styles.css";


 const mapContainerStyle = {
    width: "50vw",
    height: "50vh",
  };
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const center = {
    lat: 34.002,
    lng: -118.2436, 
  };


  export default class Map extends React.Component {
    render() {
        return <div>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={10.2} 
        center={center}
        >
        </GoogleMap>
        </div>
    }
  
}