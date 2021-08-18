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

export default function BarGraph(props){
  const [normdata, setData] = React.useState([]);
    var numID = props.newID;
  React.useEffect(() => {
    api().get('data2')
      .then((response) => {
        console.log('Are we getting a response?', response)
        setData(response.data.find(x => x.ID === numID));
      });
  } ,[])
  console.log('normdata',normdata)
  return <div>
    <BarGraphMain data={[normdata]}></BarGraphMain>
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
          barSize={30}
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
          <Bar dataKey="Land_Value" fill="#262262" />
          <Bar dataKey="Square_Footage" fill="#623074" />
          <Bar dataKey="Elevation" fill="#9b1d94"/>
          <Bar dataKey="Shore_Distance" fill="#e50695"/>
          <Bar dataKey="_100_Year_Flood" fill="#ff5100"/>
          <Bar dataKey="_500_Year_Flood" fill="#ffa400"/>
          <Bar dataKey="Final_Risk" fill="#fad533" />
        </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
} 