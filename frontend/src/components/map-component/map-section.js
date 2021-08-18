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
    
    return <div>
        <div id="map" class="software group">
            <div class="everything">
                <div class="group">
                    <div class="display">
                        {/* <h1>In-N-Out Burger Map:</h1> */}
                        <div class= "mapdisplay">
                            <Markers onClick = {restaurant => {setSelectedRest(restaurant); setSelectedID(restaurant); setCounter(counter + 1);  console.log("counter ", counter)} } 
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
                                                    {console.log("even")}
                                                    <h1>{selectedRest.Address}</h1>
                                                    <p>Placeholder location data</p> 
                                                    <div class="bargraphcontainer">
                                                        <BarGraph1 newID = {selectedRest.ID}></BarGraph1>
                                                    </div>
                                                </div>
                                            : 
                                                <div>
                                                    {console.log("odd")}
                                                    <h1>{selectedRest.Address}</h1>
                                                    <p>Placeholder location data</p> 
                                                    <div class="bargraphcontainer">
                                                        <BarGraph2 newID = {selectedRest.ID}></BarGraph2>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                :
                                    <div>
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