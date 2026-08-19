import Navbarhome from "../components/Navbarhome";
import Calendar from "../components/Calendar";
import RecentLessons from "../components/RecentLessons";
import NoteToSelf from "../components/Note";

function Homepage() {
  return (
    <>
    <div className="z-50">
    <Navbarhome />
    </div>
    <div className="relative min-h-screen bg-[#00002B] overflow-hidden isolate">
      <div className="flex place-items-start m-2 gap-2 px-7">
          <Calendar />
          <RecentLessons />
          <NoteToSelf />
    </div>
    </div>



</>
  );
}

export default Homepage;