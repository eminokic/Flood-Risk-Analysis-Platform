import React from "react";

import "@reach/combobox/styles.css";
import './analytics.css';

import DataTable from "../data-table/data-table-component.js";
import Pie from "../charts/piechart.js"

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
        <div class= "piecontainer">
        <Pie></Pie>
        </div>
        <div class= "piecontainer">
        <Pie></Pie>
        </div>
      </div>
    </div>
  </div>

    </div>
}