import React, {Component} from "react";
import "@reach/combobox/styles.css";
import {KmlLayer} from "@react-google-maps/api";



/**
 * renders map layers onto map via network links
 */
export default class Heatmap extends Component {
  render() {
    return <div>
    <KmlLayer
        url= {this.props.url[0]}
      />
    <KmlLayer
      url= {this.props.url[1]}
    />
    <KmlLayer
      url= {this.props.url[2]}
    />
    </div>
    }
}