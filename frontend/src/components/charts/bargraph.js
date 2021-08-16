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


const mock_data = [
    { name: "land_normalized", value: .53 },
    { name: "normalized_100", value: 8.6 },
    { name: "normalized_elevation", value: 4.2 },
    { name: "risk_score", value: 1.87 }
  ];

export default function BarGraph(){
  const [normdata, setData] = React.useState([]);

  React.useEffect(() => {
    api().get('data2')
      .then((response) => {
        console.log('Are we getting a response?', response)
        setData(response.data);
      });
  }, [])

  console.log('This is normdata',[normdata[0]])

  // const data= normdata.data;

    return <div>
        <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width={350} height={300}>
        <BarChart

          data={mock_data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis 

          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#623074" background={{ fill: "#eee" }} />
        </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
} 