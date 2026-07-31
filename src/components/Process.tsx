import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import processImage from "../assets/process.png"; // Replace with your own image

function Process() {
    const [activeCard, setActiveCard] = useState(0);

    const steps = [
        {
            number: "01",
            label: "Build",
            title: "Create A Topic And Lesson",
            description:
                "Name your subject. Break it into lessons. The architecture of memory starts with a clean structure.",
            image: processImage,
        },
        {
            number: "02",
            label: "Question",
            title: "Create Recall Questions",
            description:
                "Write active recall questions for every lesson to prepare your future review sessions.",
            image: processImage,
        },
        {
            number: "03",
            label: "Recall",
            title: "Answer Without Looking",
            description:
                "Challenge yourself by recalling information before checking your notes.",
            image: processImage,
        },
        {
            number: "04",
            label: "Rate",
            title: "Rate Your Memory",
            description:
                "Tell ForgetMeNot how difficult the recall felt so your next review is optimized.",
            image: processImage,
        },
    ];

    return (
        <section className="relative  text-white py-24 overflow-hidden">

            <div className="max-w-[10000px] mx-auto px-1 lg:px-16 inline-block mt-10 overflow-hidden">

<div className="ml-7">
                <p className="inline-block mt-40 lg:mt-10 uppercase tracking-[3px] text-sm text-white/70">
                    Process
                </p>

                <h2 className=" lg:text-6xl 
                         text-white
                        text-2xl
                        text-balance 
                        font-bold 
                        font-serif
                        r mt-3 leading-tight mt-auto  mr-[15%] md:mr-1 ">
                    The work is simple but it is not easy
                </h2>

                <p className="text-white/70 mt-3 max-w-xl font-light">
                    A clear path from learning to lasting memory.
                </p>
</div>
                <div className="mt-12 flex w-8 md:w-300 ml-7 lg:ml-20 lg:max-w h-[400px] lg:h-[500px] bg-[#010321] border border-white/20 rounded-xl overflow-hidden">

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            layout
                            transition={{
                                duration: 0.45,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => setActiveCard(index)}
                            className={`
                                relative
                                cursor-pointer
                                border-r
                                border-white/20
                                overflow-hidden
                                ${
                                    activeCard === index
                                        ? "flex-[9]"
                                        : "flex-1"
                                }
                            `}
                        >

                            {/* Expanded Card */}
                            <AnimatePresence mode="wait">
                                {activeCard === index && (
                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            x: 30,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -30,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                        className="h-full p-10"
                                    >
                                        <h3 className=" text-2xl lg:text-4xl font-bold">
                                            {step.number}
                                        </h3>

                                <div className="ml-2 md:ml-5">

                                        <h2 className="mt-3 lg:mt-8 text-l lg:text-4xl font-bold">
                                            {step.title}
                                        </h2>

                                        <p className="mt-2  md:mt-6 text-white/70 max-w-lg text-[55%] md:text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                </div>
                                        <img 
                                            src={step.image}
                                            alt={step.title}
                                            className="mt-2 md:mt-10 w-[360px] rounded-lg ml-5"
                                        />

                                        <div className="absolute bottom-4 left-6 md:left-10 rotate-[-90deg] origin-left  text-l lg:text-2xl font-bold text-white/90">
                                            {step.label}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Collapsed Card */}
                            {activeCard !== index && (
                                <>
                                    <div className="absolute top-8 left-1/2 -translate-x-1/2  text-l md:text-3xl font-bold">
                                        {step.number}
                                    </div>

                                    <div className="absolute bottom-10 md:bottom-17 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap text-[70%] lg:text-2xl font-bold">
                                        {step.label}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;