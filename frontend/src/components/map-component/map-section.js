import React, {useState} from "react";

import "@reach/combobox/styles.css";
import '../../css/App.css';
import Markers from "../markers/markers-component.js";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import BarGraph1 from "../charts/bargraph1.js"
import BarGraph2 from "../charts/bargraph2.js"

/**
 * Map Component
 * 
 * @returns Map Component UI
 */
export default function MapComponent(){

    // restaurant and layer states for marker and layer selection
    const [selectedRest, setSelectedRest] = useState(null);
    const [selectedLayer, setSelectedLayer] = useState(() => []);
    const [selectedID, setSelectedID] = useState(null);
    const [counter, setCounter] = useState(0);

    const handleChange = (event, nextLayer) => {
        setSelectedLayer(nextLayer);
      };
    


    // functions to display risk conclusion with appropriate colors
    var riskrating = "";
    var riskcolor = "";

    function UpdateRiskRating(){
        if(0<=selectedRest.normalized_score && selectedRest.normalized_score<2){
            riskrating = 'Very Low'
        }
        else if (2<=selectedRest.normalized_score && selectedRest.normalized_score<4){
            riskrating = 'Low'
        }
        else if (4<=selectedRest.normalized_score && selectedRest.normalized_score<6){
            riskrating = 'Medium'
        } 
        else if (6<=selectedRest.normalized_score && selectedRest.normalized_score<8){
            riskrating = 'Medium-High'
        }
        else if (8<=selectedRest.normalized_score && selectedRest.normalized_score<9){
            riskrating = 'High'
        }
        else{
            riskrating = 'Very High'
        }
    }
    function UpdateColor(){
        if(0<=selectedRest.normalized_score && selectedRest.normalized_score<4){
            riskcolor = '#ffa400'
        }
        else if (4<=selectedRest.normalized_score && selectedRest.normalized_score<8){
            riskcolor = '#ff5100'
        } else{
            riskcolor = '#e50695'
        }
    }


    
    return <div>
        <div id="map" class="software group">
            <div class="everything">
                <div class="group">
                    <div class="display">
                        {/* <h1>In-N-Out Burger Map:</h1> */}
                        <div class= "mapdisplay">
                            <Markers onClick = {restaurant => {setSelectedRest(restaurant); setSelectedID(restaurant); setCounter(counter + 1);} } 
                                    onCloseClick = {restaurant => setSelectedRest(null)}
                                    rest = {selectedRest}
                                    url = {selectedLayer}
                            />
                        </div>
                    </div>

                    <div class="gradient2"></div>

                    <div class="content">
                        <div>

                            {selectedRest
                                
                                ? 
                                    /**
                                     * display restaurant-specific data if restaurant marker is selected
                                     * counter logic ensures restaurant-specific data refreshes and rerenders
                                     * 
                                     */
                                    <div>
                                        {counter % 2 === 0
                                            ?
                                                <div>
                                                    {UpdateRiskRating()}
                                                    {UpdateColor()}
                                                    <h1>{selectedRest.Address}</h1>
                                                    <div class="bargraphcontainer">
                                                        <BarGraph1 newID = {selectedRest.ID}></BarGraph1>
                                                    </div>
                                                    <h1>Your final risk is: {selectedRest.normalized_score}</h1>
                                                    <h1 style={{color:riskcolor}}>This is a {riskrating} value</h1>
                                                </div>
                                            : 
                                                <div>
                                                    {UpdateRiskRating()}
                                                    {UpdateColor()}
                                                    <h1>{selectedRest.Address}</h1>
                                                    <div class="bargraphcontainer">
                                                        <BarGraph2 newID = {selectedRest.ID}></BarGraph2>
                                                    </div>
                                                    <h1>Your final risk is: {selectedRest.normalized_score}</h1>
                                                    <h1 style={{color:riskcolor}}>This is a {riskrating} value</h1>
                                                </div>
                                        }
                                    </div>
                                :
                                    /**
                                     * display welcome screen if no restaurant is selected, including instructions, layer toggles
                                     */
                                    <div>
                                        <h1>Welcome to the Map Tool!</h1>
        
                                        <p>Start by selecting an In-N-Out Burger location</p>
                                        <p>Normalized data will appear for each location</p>
                                        <p style={{color:'#ffa400'}}>0-4 indicates a low value</p>
                                        <p style={{color:'#ff5100'}}>4-8 indicates a medium value</p>
                                        <p style={{color:'#e50695'}}>8-10 indicates a high value</p>
                                        <p>____________________</p>
                                        <p><strong>Toggle 100 and 500 year flood data: </strong></p>

                                        <ToggleButtonGroup orientation="vertical" value={selectedLayer} onChange={handleChange}>
                                            <ToggleButton value="https://raw.githubusercontent.com/derekz3/flood-kml/main/100.kml" aria-label="list">
                                                100-Yr Flood Map
                                            </ToggleButton>
                                            <ToggleButton value="https://raw.githubusercontent.com/derekz3/flood-kml/main/500.kml" aria-label="module">
                                                500-Yr Flood Map
                                            </ToggleButton>
                                            <ToggleButton value="https://raw.githubusercontent.com/derekz3/flood-kml/main/mss.kml" aria-label="module">
                                                Sewage Map
                                            </ToggleButton>
                                           
                                        </ToggleButtonGroup>

                                    </div>
                            }

                        </div>
                    </div>
                </div>
      
            </div>
        
        </div>

    </div>
}