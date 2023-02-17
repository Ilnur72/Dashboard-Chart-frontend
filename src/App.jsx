import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Chartdashboard from "./Pages/Chart/Chart.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex gap-1">
      <Sidebar />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/korxonalar" element={<Chartdashboard />} />
      </Routes>
    </div>
  );
}

export default App;
