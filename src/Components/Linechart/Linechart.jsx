import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const data = {
    "adminBodyDtoList": [
      {
        "day": 1,
        "pv": 4
      },
      {
        "day": 2,
        "pv": 4
      },
      {
        "day": 3,
        "pv": 8
      },
      {
        "day": 4,
        "pv": 3
      },
      {
        "day": 5,
        "pv": 2
      },
    ]
  }


  const Linechart = ({id, color, dataItem, idCard,orderData}) => {
    const [chart, setChart] = useState([]);
    
    // useEffect(() => {
    //   async function chartDataGet(index){
    //     if(dataItem.length !== 0){
    //       try {
    //         const { data } = await axios.get(`getBody/${index}/${dataItem.year}/${dataItem.month}`)
    //         setChart(data)
    //       } catch (error) {
    //         toast("Bu oyda ma'lumotlar yo'q!", {type: "error"})
    //       }
    //     }
    //   }
    //   chartDataGet(idCard)
    // }, [idCard,dataItem]);


  return (
    <div className="w-100 ms-4 mt-3">
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          className="chart-line mt-2"
          width={1140}
          height={450}
          data={orderData.adminBodyDtoList}
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
    			<linearGradient id="colorQ" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor="rgba(0, 26, 255, 0.84)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(12, 40, 67, 0.74) " stopOpacity={0}/>
    			</linearGradient>

    			<linearGradient id="colorS" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor="rgba(255, 245, 0, 0.43)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(255, 245, 0, 0.3)" stopOpacity={0.2}/>
    			</linearGradient>

    			<linearGradient id="colorBs" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor="rgba(5, 255, 0, 0.42)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(5, 251, 0, 0.03)" stopOpacity={0.2}/>
    			</linearGradient>

    			<linearGradient id="colorTbs" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor=" rgba(255, 98, 4, 0.42)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(255, 96, 0, 0.3)" stopOpacity={0.2}/>
    			</linearGradient>

    			<linearGradient id="colorTq" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor=" rgba(5, 255, 0, 0.39)" stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(5, 255, 0, 0.02" stopOpacity={0.2}/>
    			</linearGradient>

    			<linearGradient id="colorCk" x1="0" y1="0" x2="0" y2="1">
      				<stop offset="5%" stopColor=" rgba(255, 0, 0, 0.54) " stopOpacity={0.8}/>
      				<stop offset="95%" stopColor="rgba(255, 0, 0, 0)" stopOpacity={0.2}/>
    			</linearGradient>
 			  </defs>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#0D1435"/>
          <XAxis dataKey="day" />
          <YAxis strokeDasharray="0" color="#fff" />
          <CartesianGrid vertical={false} />
          <Tooltip />
          <Legend />
          <Area
            fill={`url(#${id ? id : "colorQ"})`}
            type="monotone"
            dataKey="pv"
            stroke={color}
            activeDot={{ r: 8 }}
            dot={{strokeWidth: 3}}
            strokeWidth="5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};



export default Linechart;
