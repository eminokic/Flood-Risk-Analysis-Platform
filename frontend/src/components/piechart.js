// import React from "react";
// import '../css/App.css';
// import { api } from '../api';

// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   Sector,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";

// const mock_data = [
//     { name: "Facebook", value: 2000 },
//     { name: "Instagram", value: 1500 },
//     { name: "Twiter", value: 1000 },
//     { name: "Telegram", value: 5000 },
//   ];

//   const COLORS = ['#623074', '#882d88', '#cd1d8b', '#262262'];

//   const RADIAN = Math.PI / 180;
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };
 

// export default function App(){
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     api().get('data')
//       .then((response) => {
//         console.log('Are we getting a response?', response)
//         setData(response.data);
//       });
//   }, [])

//     return <div>
//         <div style={{ textAlign: "center" }}>
//       <ResponsiveContainer width="100%" height={400}>
//         <PieChart width={400} height={400}>
//           <Pie
//             data={mock_data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             label
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//         </ResponsiveContainer>
//         </div>
//       </div>
// }

import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const coins = [
  { symbol: "Low Risk", amount: 9, color: "#882d88", inUSD: 1 },
  { symbol: "Medium Risk", amount: 30, color: "#cd1d8b", inUSD: 1 },
  { symbol: "High Risk", amount: 20, color: "#e6621a", inUSD: 1 },
];

export default function Home() {
  const [active, setActive] = useState(null);
  const width = 250;
  const half = width / 2;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={coins}
            pieValue={(data) => data.amount * data.inUSD}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol == data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#3b3b3b" fontSize={40} dy={-10}>
                {`${Math.floor(active.amount * active.inUSD)}`}
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#3b3b3b" fontSize={40} dy={-10}>
                {`${Math.floor(
                  coins.reduce((acc, coin) => acc + coin.amount * coin.inUSD, 0)
                )}`}
              </Text>

              <Text textAnchor="middle" fill="#3b3b3b" fontSize={20} dy={25}>
                {`Locations`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
}