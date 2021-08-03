import React from "react";
import {GoogleMap} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Polygon from 'react-polygon'

export default class Okic extends React.Component {
  polygonCenter (point) {
    return (
      <circle cx={point[0]} cy={point[1]} r={5} />
    )
  }

  render () {
    return (
      <Polygon renderPoint={this.polygonCenter} />
    )
  }
}