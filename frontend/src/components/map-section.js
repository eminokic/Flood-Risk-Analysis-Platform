import React from "react";

import "@reach/combobox/styles.css";
import '../css/App.css';
import Markers from "../components/markers-component.js";

export default function App(){
    return <div>
        <div id="map" class="software group">
            <div class="everything">
                <div class="group">
                    <div class="display">
                        <h1>In-N-Out Burger Map:</h1>
                        <Markers></Markers>
                    </div>
                    <div class="content">

                    </div>
                </div>
      
            </div>
            <div class="gradient2"></div>
        </div>

    </div>
}