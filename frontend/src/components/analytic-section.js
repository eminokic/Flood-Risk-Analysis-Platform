import React from "react";

import "@reach/combobox/styles.css";
import '../css/App.css';

import DataTable from "../components/data-table-component.js";

export default function App(){
    return <div>
        <div id="analytics" class="hardware group">
            <div class="group">
                <div class="analytics">
                <h1><a>Analytics:</a></h1>
                <DataTable></DataTable>
                </div>
                <div class="gradient3"></div>
            <div class="analyticscontent">
        <h1 class= "skills top">Placeholder content</h1>
        <p>potentially pie chart or bar graph of some sort</p>
      </div>
    </div>
  </div>

    </div>
}