import React, {useState} from "react";

import "@reach/combobox/styles.css";
import '../../css/App.css';
import Markers from "../markers/markers-component.js";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function App(){

    const [selectedRest, setSelectedRest] = useState(null);
    const [selectedLayer, setSelectedLayer] = useState(null);

    const handleChange = (event, nextLayer) => {
        setSelectedLayer(nextLayer);
      };

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
                                    url = {selectedLayer}
                            />
                        </div>
                    </div>

                    <div class="gradient2"></div>

                    <div class="content">
                        <div>
                            { !selectedRest
                                ?  
                                    <div>
                                        <h1>Welcome to the Map Tool!</h1>
                                        <ToggleButtonGroup orientation="vertical" value={selectedLayer} exclusive onChange={handleChange}>
                                            <ToggleButton value="https://raw.githubusercontent.com/derekz3/flood-kml/main/100yr_simple_dissolved.kml" aria-label="list">
                                                100-Yr Flood Map
                                            </ToggleButton>
                                            <ToggleButton value="https://raw.githubusercontent.com/derekz3/flood-kml/main/500yr_simple_subset.kml" aria-label="module">
                                                500-Yr Flood Map
                                            </ToggleButton>
                                           
                                        </ToggleButtonGroup>
                                    </div>
                                : 
                                    <div>
                                        <h1>{selectedRest.Address}</h1>
                                        <p>Placeholder location data</p> 
                                    </div>
                               
                            }
                        </div>
                    </div>
                </div>
      
            </div>
        
        </div>

    </div>
}