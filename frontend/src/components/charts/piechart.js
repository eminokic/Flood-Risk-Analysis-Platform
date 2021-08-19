//This renders the pie chart in the data section
import React from "react";
import '../../css/App.css';

import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

//"coins" is the data for the pie chart
const coins = [
  { symbol: "Low Risk", amount: 9, color: '#ffa400', inUSD: 1 },
  { symbol: "Medium Risk", amount: 30, color: '#ff5100', inUSD: 1 },
  { symbol: "High Risk", amount: 20, color: '#e50695', inUSD: 1 },
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