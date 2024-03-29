import React from "react";

import "@reach/combobox/styles.css";
import '../../css/App.css';

import logo from '../../images/Salient-Insure.jpg';

/**
 * Header Component 
 * 
 * @returns Header UI
 */
export default function HeaderComponent() {
  return <div>
    <div class="menu">
      <div class="menubtn">
        <span data-toggle-target=".togglemenu" class="toggle-btn">MENU</span>
      </div>
      <ul class="togglemenu">
        <li><a href="#home" class="btn1">HOME</a></li>
        <li><a href="#map" class="btn2">MAP</a></li>
        <li><a href="#analytics" class="btn3">DATA</a></li>
      </ul>
    </div>

    <div id="home" class="home group">
      
      <div class="welcome">
        <h1>Welcome.</h1>
        <p>This page is designed for assessing flood risk in order to determine insurance premiums.</p>
      </div>

      <div class="gradient">
        
      </div>

      <div class="logo">
        <img src={logo} alt="Salient_Logo" />
      </div>

    </div>

    </div>
}