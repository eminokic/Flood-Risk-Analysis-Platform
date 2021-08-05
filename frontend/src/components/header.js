import React from "react";

import "@reach/combobox/styles.css";
import '../css/App.css';

import logo from '../components/images/Salient-Insure.jpg';

export default function App() {
  return <div>
    <div class="menu">
      <div class="menubtn">
        <span data-toggle-target="togglemenu" class="toggle-btn">MENU</span>
      </div>
      <ul class="togglemenu">
        <li><a href="#home" class="btn1">HOME</a></li>
        <li><a href="#map" class="btn2">MAP</a></li>
        <li><a href="#analytics" class="btn3">ANALYTICS</a></li>
      </ul>
    </div>

    <div id="home" class="home group">
      
      <div class="welcome">
        <h1>Welcome.</h1>
        <p>My name is Amar Patel. Browse through some of my hardware and software projects.</p>
      </div>

      <div class="gradient">
        
      </div>

      <div class="logo">
        <img src={logo} alt="Salient_Logo" />
      </div>

    </div>

    </div>
}