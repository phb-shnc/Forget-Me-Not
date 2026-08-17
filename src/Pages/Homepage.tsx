import Navbarhome from "../components/Navbarhome";
import Calendar from "../components/Calendar";
import RecentLessons from "../components/RecentLessons";

function Homepage() {
  return (
    <>
    <Navbarhome />
    
    <div className="relative  min-h-screen bg-[#00002B] overflow-hidden isolate">
      <div className="flex items-baseline ">
          <Calendar />
          <RecentLessons />
    </div>
    </div>



</>
  );
}

export default Homepage;