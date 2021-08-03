import React from "react";
import "@reach/combobox/styles.css";
import Polygon from 'react-polygon'

export default class Heatmap extends React.Component {
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