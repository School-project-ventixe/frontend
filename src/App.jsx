import { Route, Routes } from "react-router-dom";
import "./App.css";
import CenterLayout from "./assets/layouts/CenterLayout";
import PortalLayout from "./assets/layouts/PortalLayout";
import Events from "./assets/pages/Events";
import Bookings from "./assets/pages/Bookings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortalLayout />}>
        <Route path="/events" element={<Events/>} />
        <Route path="/bookings" element={<Bookings/>} />
      </Route>
    </Routes>
  );
}

export default App;
