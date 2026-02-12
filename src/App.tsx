import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import People from "./pages/People";
import Calendar from "./pages/Calendar";
import SmartBouquet from "./pages/SmartBouquet";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "./pages/Admin";


export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF6EA] text-gray-800">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<Admin />} />


        <Route
          path="/people"
          element={
            <ProtectedRoute>
              <People />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <Calendar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/smart-bouquet"
          element={
            <ProtectedRoute>
              <SmartBouquet />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
