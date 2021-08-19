import React from "react";

import "@reach/combobox/styles.css";
import '../../css/App.css';


import HomePage from '../header-component/header.js';
import SecondPage from '../map-component/map-section.js';
import ThirdPage from '../analytics-component/analytic-section.js';

/**
 * Main Component 
 * 
 * @returns Main Component UI
 */
export default function MainComponent() {

  return <div>
    <head>
      <title>Salient Insurance</title>
      <link rel="shortcut icon" type="image/png" href= "./components/images/icon.png" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="text/javascript" src="../components/jquery.js"></script>
		  <script type="text/javascript" src="../components/declarativeToggle.js"></script>
    </head>
    <body>
    <HomePage></HomePage>
    <div class="background background1"></div>
    <SecondPage></SecondPage>
    <div class="background background1"></div>
    <ThirdPage></ThirdPage>
    </body>
    </div>
}
