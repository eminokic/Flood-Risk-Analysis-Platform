import React from "react";

import "@reach/combobox/styles.css";
import '../../css/App.css';
import BarGraph from "../charts/bargraph.js"

import DataTable from "../data-table/data-table-component.js";
import Pie from "../charts/piechart.js"

export default function AnalyticsComponent(){
    return <div>
        <div id="analytics" class="hardware group">
            <div class="group">
                <div class="analytics">
                <h1><a>Analytics:</a></h1>
                <DataTable></DataTable>
                </div>
                <div class="gradient3"></div>
            <div class="analyticscontent">
        <h1 class= "skills">Risk Distribution</h1>
        <div class= "piecontainer">
        <Pie></Pie>
        </div>
        <div class= "piecontainer">
        <BarGraph></BarGraph>
        </div>
      </div>
    </div>
  </div>

    </div>
}