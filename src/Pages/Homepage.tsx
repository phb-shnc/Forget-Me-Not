import Navbarhome from "../components/Navbarhome";
import Calendar from "../components/Calendar";

function Homepage() {
  return (
    <>
    <Navbarhome />
    
    <div className="relative min-h-screen bg-[#00002B] overflow-hidden isolate">
    <Calendar />
    </div>



</>
  );
}

export default Homepage;