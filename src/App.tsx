import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <HashRouter> {/* local -> basename={"/Forget-Me-Not"} */}
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
      
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
