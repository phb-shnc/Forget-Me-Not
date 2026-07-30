import { useState } from "react";
import { motion } from "framer-motion";

function Features() {
    const [activeCard, setActiveCard] = useState(0);

    const features = [
        {
            subtitle: "ORGANIZE",
            title: "Structure Your Knowledge Into Topics And Lessons",
            description:
                "Create folders for subjects like Calculus and lessons for Derivatives.",
        
        },

        {
            subtitle: "REVIEW",
            title: "Fight The Forgetting Curve",
            description:
                "Answer active recall questions on a personalized review schedule.",
     
        },

        {
            subtitle: "ANALYZE",
            title: "See Your Learning Progress",
            description:
                "Track your memory strength with beautiful and meaningful analytics.",
   
        },
    ];

    return (
        <section>
            <div className="max-w-7xl mx-auto">

                <p className="
                        text-center
                        text-white
                        text-xl
                        font-medium
                        mb-1
                       
                    ">PILLARS</p>

                <h2
                    className="
                        text-center
                        text-white
                        text-5xl
                        font-bold
                        mb-4
                    "
                >
                    Mastery is a Discipline
                </h2>

                <p className="
                        text-center
                        text-white
                        text-l
                        
                        mb-16
                        font-light
                        
                    ">Three simple action to build a fortress of memory</p>

                <div
                    className="
                        md:flex
                        gap-1
                        h-[450px]
                        mx-8
                    "
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            layout
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            onMouseEnter={() => setActiveCard(index)}
                            whileHover={{
                                y: -8,
                            }}
                            className={`
                                relative
                                overflow-hidden
                                rounded-3xl
                                cursor-pointer
                                flex
                                md:flex-col
                                border
                                border-white/10
                                shadow-2xl

                                ${
                                    activeCard === index
                                        ? "flex-[1.5]"
                                        : "flex-1"
                                }
                            `}
                            style={{
                                background:
                                    activeCard === index
                                        ? "linear-gradient(180deg,#2d278d,#4941c7)"
                                        : "#241f73",
                            }}
                        >
                            {/* Glow */}

                            <motion.div
                                animate={{
                                    opacity: activeCard === index ? 1 : 0,
                                    scale: activeCard === index ? 1 : 0.8,
                                }}
                                transition={{ duration: 0.6 }}
                                className="
                                    absolute
                                    -right-20
                                    -bottom-20
                                    w-80
                                    h-80
                                    rounded    -full
                                    bg-cyan-300/20
                                    blur-3xl
                                "
                            />

                            <div
                                className="
                                    relative
                                    flex
                                    flex-col
                                    justify-between
                                    w-full
                                    p-8
                                    z-10
                                "
                            >
                                <div>
                                    <p
                                        className="
                                            text-white/60
                                            tracking-[3px]
                                            font-semibold
                                            text-sm
                                        "
                                    >
                                        {feature.subtitle}
                                    </p>

                                    <motion.h2
                                        animate={{
                                            opacity:
                                                activeCard === index ? 1 : 0.8,
                                            y:
                                                activeCard === index ? 0 : 10,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="
                                            mt-6
                                            text-white
                                            text-xl
                                            lg:text-3xl
                                            font-bold
                                            font-medium
                                            leading-tight
                                        "
                                    >
                                        {feature.title}
                                    </motion.h2>

                                    <motion.p
                                        animate={{
                                            opacity:
                                                activeCard === index ? 1 : 0.7,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        className="
                                            mt-6
                                            text-[70%]
                                            md:text-lg
                                            text-white/80

                                            md:leading-7
                                            max-w-xs
                                            font-serif
                                        "
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>

                                <motion.img
                              
                                    initial={{
                                        opacity: 0,
                                        y: 80,
                                    }}
                                    animate={{
                                        opacity:
                                            activeCard === index ? 1 : 0,
                                        y:
                                            activeCard === index ? 0 : 80,
                                        scale:
                                            activeCard === index ? 1 : 0.9,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="
                                        w-[360px]
                                        self-center
                                        drop-shadow-2xl
                                        pointer-events-none
                                    "
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;