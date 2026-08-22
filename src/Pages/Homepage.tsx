import Navbarhome from "../components/Navbarhome";
import Calendar from "../components/Calendar";
import RecentLessons from "../components/RecentLessons";
import NoteToSelf from "../components/Note";
import Dailyquote from "../components/Dailyquote";
import JumpBackIn from "../components/JumpBackIn";
function Homepage() {

  const review = {
  subject: "Mathematics",
  topics: "Derivatives",
  percent: 75,
  time: "2 hours ago",
};

  return (
    <>
    <div className="z-50">
    <Navbarhome />
    </div>
    <div className="relative min-h-screen bg-[#00002B] overflow-hidden isolate ">
      <div className="flex place-items-start m-2 gap-2 px-7">
          <Calendar />
          <RecentLessons />
          <NoteToSelf />
      </div>
      <div className=" flex place-items-start m-2 gap-2 px-7">
    <Dailyquote />
    <JumpBackIn review={review} />
      </div>
    </div>



</>
  );
}

export default Homepage;