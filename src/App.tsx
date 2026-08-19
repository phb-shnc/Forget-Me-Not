import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignupAndLogin from "./Pages/SignupAndLogin";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import TopicNlessons from "./Pages/TopicNlessons";
import Reviewsession from "./Pages/Reviewsession";
import ProtectedRoute from "./components/ProtectedRoute"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignupAndLogin />} />
        <Route path="/signup" element={<SignupAndLogin />} />

        {/* Protected Routes (Require Authentication) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/topicNlessons"
          element={
            <ProtectedRoute>
              <TopicNlessons />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Reviewsession"
          element={
            <ProtectedRoute>
              <Reviewsession />
            </ProtectedRoute>
          }
        />

        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;