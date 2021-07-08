import React from "react"
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import './App.css';

export default function App() {

   /** 
     * You can implement the places api key as follows to avoid redundant rerendering.
     * const libraries = ["places"];
     */
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: ProcessingInstruction.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  /**
   * The loadError function is a flag for the case that the map does not render properly. 
   */
  if(loadError) {
    return "Error in rendering map. Try Again!";
  }

  /**
   * The isLoaded function checks to see if the map has been rendered each time and properly flags the case if not.
   */
  if(!isLoaded) {
    return "Rendering Map...";
  }

  return <div>I'm the map, i'm the map!</div>
}
