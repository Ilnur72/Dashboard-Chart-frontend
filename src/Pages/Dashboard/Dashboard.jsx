import React from "react";
import Card from "../../Components/Cards/Cards.jsx";

import "./dashboard.scss";

import out from "../../assets/Images/out.svg";
import payment from "../../assets/Images/payment.svg";
import sinov from "../../assets/Images/sinov.svg";
import Linechart from "../../Components/Linechart/Linechart.jsx";

const Dashboard = () => {
  return (
    <div className="container-sm">
      <div className="container-wrap">
        <div className="mt-2 ms-4 w-100 d-flex justify-content-between">
          <Card title={"sinov"} img={sinov} number={1856} />
          <Card title={"To'lo'v qilganlar"} img={payment} number={528} />
          <Card title={"Chiqib ketganlar"} img={out} number={2136} />
        </div>

        <Linechart />
      </div>
    </div>
  );
};

export default Dashboard;
