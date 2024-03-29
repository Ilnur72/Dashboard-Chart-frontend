import React, { useEffect, useState } from "react";

import Linechart from "../../Components/Linechart/Linechart.jsx";
import axios from "axios";

import "./dashboard.scss";

import calls from "../../assets/Images/calls.svg";
import user from "../../assets/Images/users.svg";
import order from "../../assets/Images/cart.svg";
import { toast } from "react-toastify";
import dataOrder from "../../Data/data.json"

const dataCharts = {
    id : 32,
    calls: 1856,
    buys: 528,
    visitors: 2136,
    month: 2, 
    monthName: "March",
    year: 2023
}

const Dashboard = ({ getData }) => {
  const [card, setCard] = useState([]);
//   useEffect(() => {
//     async function getTitleCard() {
//       if (getData) {
//         try {
//           const { data } = await axios.get(
//             `getHeadOne/${getData.chartYear}/${getData.chartMonth}`
//           );
//           setCard(data);
//         } catch (error) {
//           toast("error", { type: "error" });
//         }
//       }
//     }
//   getTitleCard();
// }, [getData]);
  const [dataChart, setDataChart] = useState({
    id: "colorQ",
    color: "#001AFF",
  });
  const handleCardClick = (id, color) => {
    setDataChart({ id, color });
  };

  const [active, setActive] = useState(1);
  const toggleTab = (index, title) => {
    setActive(index);

    switch (title) {
      case "Qo'ng'iroqlar":
        return handleCardClick("colorQ", "#001AFF");

      case "Buyurtmalar soni":
        return handleCardClick("colorBs", "#05FF00");

      case "Tashrif buyuruvchilar soni":
        return handleCardClick("colorTbs", "#FF6000");

      default:
        return "";
    }
  };

  return (
    <div className="container-sm">
      <div className="container-wrap">
        <div className="mt-2 ms-4 w-100 d-flex justify-content-between">
          <div
            onClick={() => toggleTab(1, "Qo'ng'iroqlar")}
            className={
              active == 1
                ? "card-item text-center py-4 border border-primary shadow"
                : "card-item text-center py-4 border-dark"
            }
          >
            <p className="text-white fs-5">Qo'ng'iroqlar</p>
            <div className="d-flex align-items-center justify-content-around me-5 mt-2 fw-bold ">
              <img src={calls} width={64} alt="" />
              <strong className="text-primary fs-3">{dataCharts.calls}</strong>
            </div>
          </div>
          <div
            onClick={() => toggleTab(2, "Buyurtmalar soni")}
            className={
              active == 2
                ? "card-item text-center py-4 border border-success shadow"
                : "card-item text-center py-4 border-dark"
            }
          >
            <p className="text-white fs-5">Buyurtmalar soni</p>
            <div className="d-flex align-items-center justify-content-around me-5 mt-2 fw-bold">
              <img src={order} width={64} alt="" />
              <strong className="order accordio fs-3">{dataCharts.buys}</strong>
            </div>
          </div>
          <div
            onClick={() => toggleTab(3, "Tashrif buyuruvchilar soni")}
            className={
              active == 3
                ? "card-item text-center py-4 active-item shadow"
                : "card-item text-center py-4 border-dark"
            }
          >
            <p className="text-white fs-5">Tashrif buyuruvchilar soni</p>
            <div className="d-flex align-items-center justify-content-around me-5 mt-2 fw-bold">
              <img src={user} width={64} alt="" />
              <strong className="visitors fs-3">{dataCharts.visitors}</strong>
            </div>
          </div>
        </div>

        <Linechart
          id={dataChart.id}
          color={dataChart.color}
          dataItem={dataCharts}
          idCard={active}
          orderData={active == 1 ? dataOrder.qongiroqlar : active == 2 ? dataOrder.tolovQilganlar : active == 3 ? dataOrder.tashriflarSoni : null}
        />
      </div>
    </div>
  );
};

export default Dashboard;
