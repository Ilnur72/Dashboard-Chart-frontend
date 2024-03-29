import React, { useEffect, useState } from "react";

import "./chart.scss";

import out from "../../assets/Images/out.svg";
import payment from "../../assets/Images/payment.svg";
import sinov from "../../assets/Images/sinov.svg";
import Linechart from "../../Components/Linechart/Linechart.jsx";
import axios from "axios";
import dataOrder from "../../Data/data.json"

const dataCharts = {
  id : 32,
  trial: 954,
  paid: 764,
  exits: 237,
  month: 2, 
  monthName: "March",
  year: 2023
}
  
const Chartdashboard = ({ getData }) => {
  const [card, setCard] = useState([]);
  // useEffect(() => {
  //   async function getTitleCard() {
  //     if (getData) {
  //       try {
  //         const { data } = await axios.get(
  //           `getHeadTwo/${getData.chartYear}/${getData.chartMonth}`
  //         );
  //         setCard(data);
  //       } catch (error) {
  //         toast("error", { type: "error" });
  //       }
  //     }
  //   }
  //   getTitleCard();
  // }, [getData]);
  const [dataChart, setDataChart] = useState({
    id: "colorS",
    color: "#FFD703",
  });
  const handleCardClick = (id, color) => {
    setDataChart({ id, color });
  };

  const [active, setActive] = useState(4);

  const toggleTab = (index, title) => {
    setActive(index);

    switch (title) {
      case "Sinov":
        return handleCardClick("colorS", "#FFD703");

      case "To'lo'v qilganlar":
        return handleCardClick("colorTq", "#05FF00");

      case "Chiqib ketganlar":
        return handleCardClick("colorCk", "#FF0000");
      default:
        return "";
    }
  };

  return (
    <div className="container-sm">
      <div className="container-wrap">
        <div className="mt-2 ms-4  d-flex w-100 justify-content-between">
          <div
            onClick={() => toggleTab(4, "Sinov")}
            className={
              active == 4
                ? "card-item text-center py-4 border border-warning "
                : "card-item text-center py-4"
            }
          >
            <p className="text-white fs-5">Sinov</p>
            <div className="d-flex align-items-center justify-content-around me-5 mt-2 fw-bold">
              <img src={sinov} width={64} alt="" />
              <strong className="text-warning fs-3">{dataCharts.trial}</strong>
            </div>
          </div>
          <div
            onClick={() => toggleTab(5, "To'lo'v qilganlar")}
            className={
              active == 5
                ? "card-item text-center py-4 border border-success"
                : "card-item text-center py-4 border-dark"
            }
          >
            <p className="text-white fs-5">To'lo'v qilganlar</p>
            <div className="d-flex align-items-center justify-content-around me-5 mt-2 fw-bold">
              <img src={payment} width={64} alt="" />
              <strong className="order fs-3">{dataCharts.paid}</strong>
            </div>
          </div>
          <div
            onClick={() => toggleTab(6, "Chiqib ketganlar")}
            className={
              active == 6
                ? "card-item text-center py-4 border border-danger"
                : "card-item text-center py-4 border-dark"
            }
          >
            <p className="text-white fs-5">Chiqib ketganlar</p>
            <div className="d-flex align-items-center justify-content-around me-5 mt-2 fw-bold">
              <img src={out} width={64} alt="" />
              <strong className="text-danger fs-3">{dataCharts.exits}</strong>
            </div>
          </div>
        </div>

        <Linechart
          id={dataChart.id}
          color={dataChart.color}
          dataItem={card}
          idCard={active}
          orderData={active == 4 ? dataOrder.sinov : active == 5 ? dataOrder.tolovQilganlar : active == 6 ? dataOrder.chiqibKetganlar : null}
        />
      </div>
    </div>
  );
};

export default Chartdashboard;
