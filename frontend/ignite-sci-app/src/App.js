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
  const {} = useLoadScript({
    googleMapsApiKey: ProcessingInstruction.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return <div>I'm the map, i'm the map!</div>
}
