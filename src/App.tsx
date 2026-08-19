import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import TopicNlessons from "./Pages/TopicNlessons";
import Reviewsession from "./Pages/Reviewsession";


function App() {
  return (
    <HashRouter> {/* local -> basename={"/Forget-Me-Not"} */}
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
      
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Homepage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/topicNlessons" element={<TopicNlessons />} />

        <Route path="/Reviewsession" element={<Reviewsession />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
