import React from "react";
import "@reach/combobox/styles.css";
import { 
  Polyline,
} from "@react-google-maps/api";

const hundredYearCoordinates = [
  { lat: 34.772, lng: -118.214 },
  { lat: 40.891, lng: -118.321 },
  { lat: 34.942, lng: -118.431 },
  { lat: 35.267, lng: -119.027 },
  { lat: 35.5, lng: -119.250   },
];

export default class Heatmap extends React.Component {
  render() {
    return <div>
    <Polyline path={hundredYearCoordinates}></Polyline>,
    </div>
}
}