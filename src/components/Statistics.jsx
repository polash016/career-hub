import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const result = [
        {
          "name": "Assignment1",
          "value": 57
        },
        {
          "name": "Assignment2",
          "value": 58
        },
        {
          "name": "Assignment3",
          "value": 60
        },
        {
          "name": "Assignment4",
          "value": 54
        },
        {
          "name": "Assignment5",
          "value": 53
        },
        {
          "name": "Assignment6",
          "value": 59
        },
        {
          "name": "Assignment7",
          "value": 60
        },
        {
          "name": "Assignment8",
          "value": 60
        }
      ];
    return (
        <div>
<AreaChart   className='mx-auto mt-12 mb-12' width={730} height={250} data={result}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>


        </div>
    );
};




export default Statistics;