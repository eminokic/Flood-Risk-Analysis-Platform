import React, {Component} from "react";
import "@reach/combobox/styles.css";
import {Polygon} from "@react-google-maps/api";

const hundredYearCoordinates = [
  { lat: 34.07602375980253, lng: -118.3553268671356 },
  { lat: 34.07587087771391, lng: -118.3555652499133 },
  { lat: 34.07565108442323, lng: -118.3558227735598 },
  { lat: 34.0711323832166, lng: -118.3581492701477 },
  { lat: 34.06999513765904, lng: -118.3590442876357 },
  { lat: 34.07091196254764, lng: -118.3591995232774 },
  { lat: 34.07136872667443, lng: -118.3609326885369},
  { lat: 34.06971768981387, lng: -118.3614782498069},
  { lat: 34.06971180656128, lng: -118.3650204325944},
  { lat: 34.07426337532324, lng: -118.362725077419},
  { lat: 34.07823188842898, lng: -118.3542581792083},
  { lat: 34.07788800103827, lng: -118.3536404521613},
  { lat: 34.07571815139021, lng: -118.3580823593382},
  { lat: 34.07571815139021, lng: -118.3573226545549},
  { lat: 34.07602375980253, lng: -118.3553268671356 },
];

const options = {
  fillColor: "orange",
  fillOpacity: 0.5,
  strokeColor: "black",
  strokeOpacity: 1,
  strokeWeight: 3,
  clickable: true,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 2
}

const onLoad = polygon => {
  console.log("polygon: ", polygon);
}

export default class Heatmap extends Component {
  render() {
    return <div>
    <Polygon paths={hundredYearCoordinates} options={options} onLoad={onLoad}></Polygon>,
    </div>
    }
}