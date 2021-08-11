import React, {useState} from "react";

import "@reach/combobox/styles.css";
import '../css/App.css';
import Markers from "../components/markers-component.js";

export default function App(){

    const [selectedRest, setSelectedRest] = useState(null);

    return <div>
        <div id="map" class="software group">
            <div class="everything">
                <div class="group">
                    <div class="display">
                        <h1>In-N-Out Burger Map:</h1>
                        <Markers onClick = {restaurant => setSelectedRest(restaurant) } 
                                 onCloseClick = {restaurant => setSelectedRest(null)}
                                 rest = {selectedRest}
                        />
                    </div>
                    <div class="content">
                        <div>
                            {/* {selectedRest && (
                                <div>{selectedRest.Address}</div>
                            )} */}
                            { selectedRest
                                ? <div>
                                    <h1>{selectedRest.Address}</h1>
                                    <h2>Does this work?</h2> 
                                  </div>
                                : <div>
                                    <h1>Welcome to the Map Tool!</h1>
                                  </div>
                            }
                        </div>
                    </div>
                </div>
      
            </div>
            <div class="gradient2"></div>
        </div>

    </div>
}