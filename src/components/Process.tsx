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

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-10 overflow-hidden">
<div className="text-center lg:text-left">
                <p className="inline-block mt-40 lg:mt-10 uppercase tracking-[3px] text-sm text-white/70">
                    Process
                </p>

                <h2 className=" lg:text-5xl 
                         text-white
                        text-2xl
                        text-balance 
                        font-bold 
                        font-serif
                        mt-3 leading-tight mt-auto  mr-[15%] md:mr-1 ">
                    The work is simple but it is not easy
                </h2>

                <p className="text-white/70 mt-3 max-w-xl lg:text-[90%] font-light">
                    A clear path from learning to lasting memory.
                </p>
</div>
                <div
                    className="
                        mt-12
                        mx-6
                        lg:mx-0
                        w-auto
                        max-w-7xl
                        h-[350px]
                        md:h-[450px]
                        lg:h-[500px]
                        flex
                        bg-[#010321]
                        border
                        border-white/20
                        rounded-2xl
                        overflow-hidden
                    "
                >

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
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.35 }}
        className="h-full p-5 md:p-8 lg:p-10"
    >
        <div className="flex flex-col lg:flex-row justify-between h-full gap-8">

            {/* Left Side */}
            <div className="flex-1">

                <h3 className="text-2xl lg:text-4xl font-bold">
                    {step.number}
                </h3>

                <div className="mt-4 lg:mt-8">

                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        {step.title}
                    </h2>

                    <p className="mt-4 md:mt-6 text-white/70 text-xs md:text-sm lg:text-base leading-relaxed max-w-md">
                        {step.description}
                    </p>

                </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center flex-1">

                <img
                    src={step.image}
                    alt={step.title}
                    className="
                        w-full
                        max-w-[220px]
                        md:max-w-[320px]
                        lg:max-w-[380px]
                        object-contain
                        rounded-lg
                    "
                />

            </div>

        </div>

        {/* Vertical Label */}
        <div className="absolute bottom-6 left-6 lg:left-8 rotate-[-90deg] origin-left text-lg lg:text-2xl font-bold text-white/90">
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