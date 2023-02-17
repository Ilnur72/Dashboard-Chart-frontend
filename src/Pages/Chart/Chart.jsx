import React, { useState } from "react";
import Card from "../../Components/Cards/Cards.jsx";

import "./chart.scss";

import calls from "../../assets/Images/calls.svg";
import user from "../../assets/Images/users.svg";
import order from "../../assets/Images/cart.svg";
import Linechart from "../../Components/Linechart/Linechart.jsx";

const Chartdashboard = () => {
  return (
    <div className="container-sm">
      <div className="container-wrap">
        <div className="mt-2 ms-4  d-flex w-100 justify-content-between">
          <Card title={"Qo'ng'iroqlar"} img={calls} number={1856} />
          <Card title={"Buyurtmalar soni"} img={order} number={528} />
          <Card title={"Tashrif buyuruvchilar soni"} img={user} number={2136} />
        </div>

        <Linechart />
      </div>
    </div>
  );
};

export default Chartdashboard;
