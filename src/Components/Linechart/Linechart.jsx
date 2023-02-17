import React from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area,
  } from "recharts";


  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Linechart = () => {
  return (
    <div className="w-100 ms-4">
      <ResponsiveContainer width="100%" height={450}>
        <AreaChart
          className="chart-line mt-2"
          width={1140}
          height={450}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{
            backgroundColor: "black",
            borderRadius: "15px",
            paddingTop: "10px",
          }}
        >
            <defs>
    			<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor="rgba(0, 26, 255, 0.84)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(12, 40, 67, 0.74) " stopOpacity={0}/>
    			</linearGradient>
    			<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor="rgba(255, 245, 0, 0.43)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(255, 245, 0, 0.3)" stopOpacity={0.2}/>
    			</linearGradient>
 			  </defs>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#0D1435"/>
          <XAxis dataKey="name" />
          <YAxis strokeDasharray="0" color="#fff" />
          <CartesianGrid vertical={false} />
          {/* <YAxis allowDecimals={false} axisLine={false} domain={[1, 3]} tickLine={false} tickMargin={10} ticks={[1, 2, 3]} type="number" /> */}
          <Tooltip />
          <Legend />
          <Area
            fill="url(#colorUv)"
            type="monotone"
            dataKey="pv"
            stroke="#001AFF"
            activeDot={{ r: 8 }}
          />
          {/* <Area type="basis" dataKey="uv" stroke="#09ea23" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
