import { Route, Routes } from "react-router-dom";
import "./App.css";
import CenterLayout from "./assets/layouts/CenterLayout";
import PortalLayout from "./assets/layouts/PortalLayout";
import Events from "./assets/pages/Events";
import Bookings from "./assets/pages/Bookings";
import EventDetailPage from "./assets/pages/EventDetailPage";
import LogIn from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";
import BookEvent from "./assets/pages/BookEvent";
import SignOut from "./assets/components/SignOut";
import ProtectedRoute from "./assets/components/ProtectedRoute";
import VerifyEmail from "./assets/pages/VerifyEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortalLayout />}>
        <Route path="events" element={<Events />} />
        <Route path="events/:id" element={<EventDetailPage />} />

        <Route
          path="bookevent/:id"
          element={
            <ProtectedRoute>
              <BookEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route path="signout" element={<SignOut />} />
      </Route>

      <Route path="" element={<CenterLayout />}>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>
    </Routes>
  );
}

export default App;
