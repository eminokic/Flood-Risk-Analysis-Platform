import React from "react";

import "@reach/combobox/styles.css";
import '../css/App.css';

import logo from '../components/images/Salient-Insure.jpg';

export default function App() {
  return <div>
    <div id = "head" class = "head group">
    <div id = "top" class = "top">
      <img src = {logo} class = "Logo"/>
    </div>
    <div id= "title" class ="title">
      <h1>Flood Risk Analysis</h1>
    </div>
    </div>
    </div>
}