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
                        <div class= "mapdisplay">
                        <Markers></Markers>
                        </div>
                    </div>

                    <div class="gradient2"></div>

                    <div class="content">
                        <h1>Placeholder content</h1>
                        <p>This is where the In-N-Out specific data will be rendered</p>
                    </div>
                </div>
      
            </div>
        
        </div>

    </div>
}