import React from 'react';
import { Funnel, FunnelChart, LabelList, Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {
    const result = [
        {
          "name": "assignment1",
          "value": 57
        },
        {
          "name": "assignment2",
          "value": 58
        },
        {
          "name": "assignment3",
          "value": 60
        },
        {
          "name": "assignment4",
          "value": 54
        },
        {
          "name": "assignment5",
          "value": 53
        },
        {
          "name": "assignment6",
          "value": 59
        },
        {
          "name": "assignment7",
          "value": 60
        },
        {
          "name": "assignment8",
          "value": 60
        }
      ];
    return (
        <div>
<PieChart width={730} height={250}>
  <Pie data={result} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={result} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Tooltip />
</PieChart>
        </div>
    );
};

export default Statistics;