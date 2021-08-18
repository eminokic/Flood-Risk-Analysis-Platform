import React, {useState} from "react";

import "@reach/combobox/styles.css";
import '../../css/App.css';
import Markers from "../markers/markers-component.js";
import BarGraph1 from "../charts/bargraph1.js"
import BarGraph2 from "../charts/bargraph2.js"


export default function App(){

    const [selectedRest, setSelectedRest] = useState(null);
    const [selectedID, setSelectedID] = useState(null);

    const [counter, setCounter] = useState(0);
    var riskrating = "";
    var riskcolor = "";

    function UpdateRiskRating(){
        if(0<=selectedRest.normalized_score && selectedRest.normalized_score<4){
            riskrating = 'Low'
        }
        else if (4<=selectedRest.normalized_score && selectedRest.normalized_score<8){
            riskrating = 'Medium'
        } else{
            riskrating = 'High'
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
                            />
                        </div>
                    </div>

                    <div class="gradient2"></div>

                    <div class="content">
                        <div>
                            {/* { selectedRest.ID === selectedID
                                ? <div>
                                    <h1>{selectedRest.Address}</h1>
                                    <p>Placeholder location data</p> 
                                    <div class="bargraphcontainer">
                                        <BarGraph newID = {selectedRest.ID}></BarGraph>
                                    </div>
                                  </div>
                                : <div>
                                    <h1>Welcome to the Map Tool!</h1>
                                  </div>
                            } */}

                            {selectedRest
                                ? 
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
                                    <div>
                                        <h1>Welcome to the Map Tool!</h1>
                                        <p>Start by selecting an In-N-Out Burger location</p>
                                        <p>Normalized data will appear for each location</p>
                                        <p style={{color:'#ffa400'}}>0-4 indicates a low value</p>
                                        <p style={{color:'#ff5100'}}>4-8 indicates a medium value</p>
                                        <p style={{color:'#e50695'}}>8-10 indicates a high value</p>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
      
            </div>
        
        </div>

    </div>
}