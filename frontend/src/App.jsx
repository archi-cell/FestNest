import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserNavbar from "./components/UserNavbar";
import Navbar from "./components/Navbar";
import ExploreEvents from "./pages/ExploreEvents";
import CreateEvent from "./pages/CreateEvent";
import AdminEvents from "./pages/AdminEvents";

import CreateHotel from "./pages/CreateHotel";
import AdminHotels from "./pages/AdminHotels";
import StayHotels from "./pages/StayHotels";
import EventHotels from "./pages/EventHotels";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";


import AdminRoute from "./utils/AdminRoute";
import "./styles/global.css";

function App() {

  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);
  return (
    <BrowserRouter>
    {role === "ADMIN" || role === "OWNER" ? (
        <Navbar />
      ) : (
        <UserNavbar />
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<ExploreEvents />} />
        <Route path="/hotels/stay" element={<StayHotels />} />
        <Route path="/hotels/events" element={<EventHotels />} />
        <Route path="/user-home" element={<UserHome />} />



        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/create-event"
          element={
            <AdminRoute>
              <CreateEvent />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-events"
          element={
            <AdminRoute>
              <AdminEvents />
            </AdminRoute>
          }
        />

        <Route
          path="/create-hotel"
          element={
            <AdminRoute>
              <CreateHotel />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-hotels"
          element={
            <AdminRoute>
              <AdminHotels />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
