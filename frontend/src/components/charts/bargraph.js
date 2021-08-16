import React from "react";
import '../css/App.css';

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


const data = [
    { name: "Facebook", value: 2000 },
    { name: "Instagram", value: 1500 },
    { name: "Twiter", value: 1000 },
    { name: "Telegram", value: 5000 },
  ];

export default function App(){
    return <div>
        <div style={{ textAlign: "center" }}>
        <ResponsiveContainer width={350} height={300}>
        <BarChart

          data={data}
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
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#623074" background={{ fill: "#eee" }} />
        </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
} 