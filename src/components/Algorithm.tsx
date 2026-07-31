import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




function Algorithm() {
  const [activeDay, setActiveDay] = useState(0);


  const days = [
    {
      tab: "DAY 1",
      label: "INTERVAL",
      title: "The first review happens the next day",
      description:
        "You learn a new lesson. The system waits. Twenty-four hours later, it calls you back to the fight. Answer the questions. Rate your recall with brutal honesty.",
    },


    {
      tab: "DAY 3",
      label: "INTERVAL",
      title: "The second review happens three days later",
      description:
        "The questions return. If you remember them easily, your memory becomes stronger. If you struggle, the schedule adapts to help you remember longer.",
    },


    {
      tab: "DAY 7",
      label: "INTERVAL",
      title: "A full week later, your memory is tested again",
      description:
        "This review prevents forgetting before it happens. Strong answers increase confidence, while weaker ones tell the system to review sooner.",
    },


    {
      tab: "DAY 14",
      label: "INTERVAL",
      title: "Two weeks later, another review appears",
      description:
        "By now, the lesson has survived multiple reviews. Every successful recall strengthens long-term memory and reduces forgetting.",
    },


    {
      tab: "DAY 30",
      label: "INTERVAL",
      title: "One month later, your knowledge is reinforced",
      description:
        "Instead of cramming, your brain recalls information naturally. This is where spaced repetition begins paying off.",
    },


    {
      tab: "DAY 60",
      label: "INTERVAL",
      title: "Long-term retention is now the goal",
      description:
        "After two months, only important reviews remain. Your strongest memories require fewer repetitions while difficult ones receive more attention.",
    },
  ];


  return (
    <section
      className="
      p-8
     
      text-white
      py-20
      "
    >
        <div className="p-3 max-w-7xl mx-auto text-center tracking-wider">
        <h2 className="leading-8">Algorithm</h2>      
        <h1 className="leading-8 text-4xl font-bold ">The rhythm of memory</h1>
        <p className="mt-5 lg:text-xl text-[75%]">The system schedules your fights with the forgetting curve.
        It adapts to your honesty, bringing weak memories back sooner and letting strong ones rest.</p>
        </div>




      <div className="max-w-7xl mx-auto">


        {/* Tabs */}


        <div className="relative z-40 grid grid-cols-6">


          {days.map((day, index) => (


            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`
                py-5
                border
                border-[#2d2b73]
                font-semibold
                tracking-wider
                transition-all
                duration-300
               


                ${
                  activeDay === index
                    ? "bg-[#191758]"
                    : "bg-[#16144D] hover:bg-[#24226e]"
                }
              `}
            >
              {day.tab}
            </button>


          ))}


        </div>


        {/* Content */}


        <AnimatePresence mode="wait">


          <motion.div
            key={activeDay}
            initial={{
              opacity: 0,
              y: 1,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -5,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
            relative
              grid
              bg-[#191758]
              lg:grid-cols-2
              gap-20
              items-center
              px-10
              py-20
              rounded-b-2xl
              z-50
            "
          >


            {/* Left */}


            <div>


              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-sm
                  text-gray-300
                  mb-10
                "
              >
                {days[activeDay].label}
              </p>


              <h2
                className="
                  text-5xl
                  font-bold
                  leading-tight
                  mb-8
                "
              >
                {days[activeDay].title}
              </h2>


              <p
                className="
                  text-gray-300
                  leading-8
                  max-w-md
                  mb-12
                "
              >
                {days[activeDay].description}
              </p>


              <button
                className="
                  px-12
                  py-4
                  rounded-md
                  bg-[#8A88E8]
                  hover:bg-[#9b99f3]
                  transition
                  font-semibold
                  tracking-wider
                "
              >
                START
              </button>


            </div>


            {/* Right */}


            <div
              className="
                flex
                justify-center
              "
            >
             
            </div>


          </motion.div>


        </AnimatePresence>


      </div>
    </section>
  );
}


export default Algorithm;
