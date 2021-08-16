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


const all_data = [ {
  ID: 30,
  num_rating: "Number of Ratings",
  num_rating_normalized: 1.445812808,
  land_value: "Land Value",
  land_normalized: 0.04199336377,
  square_footage: "Square Footage",
  footage_normalized: 0.5312032738,
  year_built: "Year Built",
  year_normalized: 0,
  elevation: "Elevation",
  normalized_elevation: 4.211503796,
  shore_distance: "Shore Distance",
  shore_normalized: 8.699373004,
  _100_year: "100 Year Flood",
  normalized_100: 8.629605688,
  _500_year: "500 Year Flood",
  normalized_500: 4.698412698,
  risk_score: "Risk Score",
  risk_score_18: -25.36137374,
  normalized_score: "Normalized Score",
  normalized_score_20: 1.870533085
},
{
  ID: 14,
  num_rating: "Number of Ratings",
  num_rating_normalized: 2.640394089,
  land_value: "Land Value",
  land_normalized: 0.3229210179,
  square_footage: "Square Footage",
  footage_normalized: 2.809475092,
  year_built: "Year Built",
  year_normalized: 10,
  elevation: "Elevation",
  normalized_elevation: 5.519746545,
  shore_distance: "Shore Distance",
  shore_normalized: 5.597744776,
  _100_year: "100 Year Flood",
  normalized_100: 2.378797673,
  _500_year: "500 Year Flood",
  normalized_500: 3.542857143,
  risk_score: "Risk Score",
  risk_score_18: -22.31991414,
  normalized_score: "Normalized Score",
  normalized_score_20: 2.823682176
},
];

var mock_data = all_data.find(x => x.ID === 30)
console.log("This is the mock_data", mock_data)

export default function BarGraph(){
  const [normdata, setData] = React.useState([]);

  React.useEffect(() => {
    api().get('data2')
      .then((response) => {
        console.log('Are we getting a response?', response)
        setData(response.data);
      });
  } 
  ,[])

  // console.log('This is normdata',[normdata[0]])
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
          barSize={10}
        >
          <XAxis
            dataKey="ID"
            // scale="point"
            // padding={{ left: 10, right: 10 }}
          />
          <YAxis 

          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="num_rating_normalized" fill="#623074" />
          <Bar dataKey="land_normalized" fill="#623075" />
          <Bar dataKey="footage_normalized" fill="#623076" />
          <Bar dataKey="normalized_elevation" fill="#623077"/>
          <Bar dataKey="shore_normalized" fill="#623078"/>
          <Bar dataKey="normalized_score_20" fill="#623079" />
        </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
} 
