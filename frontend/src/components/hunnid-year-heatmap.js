import React from "react";
import "@reach/combobox/styles.css";
import Polygon from 'react-polygon'

// This example creates a simple polygon representing the Bermuda Triangle.
function initMap(props) {
    const triangleCoords = [{
        lat: 25.774,
        lng: -80.19
      },
      {
        lat: 18.466,
        lng: -66.118
      },
      {
        lat: 32.321,
        lng: -64.757
      },
      {
        lat: 25.774,
        lng: -80.19
      },
    ];
    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
  }