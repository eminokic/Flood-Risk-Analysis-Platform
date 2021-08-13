import React, {useState} from "react";

import "@reach/combobox/styles.css";
import '../css/App.css';
import Markers from "./markers/markers-component.js";

export default function App(){

    const [selectedRest, setSelectedRest] = useState(null);

    return <div>
        <div id="map" class="software group">
            <div class="everything">
                <div class="group">
                    <div class="display">
                        {/* <h1>In-N-Out Burger Map:</h1> */}
                        <div class= "mapdisplay">
                            <Markers onClick = {restaurant => setSelectedRest(restaurant) } 
                                    onCloseClick = {restaurant => setSelectedRest(null)}
                                    rest = {selectedRest}
                            />
                        </div>
                    </div>

                    <div class="gradient2"></div>

                    <div class="content">
                        <div>
                            { selectedRest
                                ? <div>
                                    <h1>{selectedRest.Address}</h1>
                                    <p>Placeholder location data</p> 
                                  </div>
                                : <div>
                                    <h1>Welcome to the Map Tool!</h1>
                                  </div>
                            }
                        </div>
                    </div>
                </div>
      
            </div>
        
        </div>

    </div>
}