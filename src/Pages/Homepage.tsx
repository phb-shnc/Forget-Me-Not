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
      <Navbarhome />
      <main className="min-h-screen overflow-x-clip bg-[#00002B] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <Calendar />
          <RecentLessons />
          <NoteToSelf />
          <Dailyquote />
          <div className="sm:col-span-2">
            <JumpBackIn review={review} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Homepage;