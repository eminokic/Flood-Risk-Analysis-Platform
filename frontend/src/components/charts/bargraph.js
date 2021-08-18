import React from "react";
import '../../css/App.css';
import { api } from '../../api';


import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export default function BarGraph(){
  const normdata = [{"ID": "Average Values", 'Land Value (million)': 1.771756678, 'Square Footage (thousand)':3.034135593, 'Elevation (hundred)':4.299610169, 
  'Shore Distance (miles)':13.46314146, '100y Flood Distance (miles)': 3.176161176, '500y Flood Distance (miles)':3.01448598894593},
                    ];
  return <div>
    <BarGraphMain data={normdata}></BarGraphMain>
  </div>
}
// var mock_data = all_data.find(x => x.ID === 30)
// console.log("This is the mock_data", mock_data)
  // console.log('This is normdata',[normdata[0]])
  // const data= normdata.data;
const BarGraphMain = (props) => {
  const data = props.data
    return <div>
        <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width={350} height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          barSize={35}
        >
          <XAxis
            dataKey="ID"
            // scale="point"
            // padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Land Value (million)" fill="#262262" />
          <Bar dataKey="Square Footage (thousand)" fill="#623074" />
          <Bar dataKey="Elevation (hundred)" fill="#9b1d94"/>
          <Bar dataKey="Shore Distance (miles)" fill="#e50695"/>
          <Bar dataKey="100y Flood Distance (miles)" fill="#ff5100"/>
          <Bar dataKey="500y Flood Distance (miles)" fill="#ffa400"/>
        </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
} 