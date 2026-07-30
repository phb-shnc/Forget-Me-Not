import { useState } from "react";

function Process(){
    const [Activecard, setActiveCard] = useState(0);

    const steps = [
        {
            number: "01 Build",
            title: "Create a topic and lesson",
            Instructions:"Name your subject. Break it into lessons. The architecture of memory starts with a clean structure.",
        },
    
        {
            number: "02 Question",
            title: "Create a topic and lesson",
            Instructions:"Name your subject. Break it into lessons. The architecture of memory starts with a clean structure.",
        },

        {
            number: "03 Recall",
            title: "Create a topic and lesson",
            Instructions:"Name your subject. Break it into lessons. The architecture of memory starts with a clean structure.",
        },
        {
            number: "04 rate",
            title: "Create a topic and lesson",
            Instructions:"Name your subject. Break it into lessons. The architecture of memory starts with a clean structure.",
        },
    ]


        return (

<section className="inline-block md:mt-[-2%] mt-30 relative min-h-screen overflow-hidden p-10 md:p-19 text-amber-50">
                <h2 className="mt-3" >PROCESS</h2>
                <h2 className="md:text-[60px] font-semibold font-serif text-5xl">The work is Simple but it is not Easy</h2>
                <p className="mt-3 font-bold  ">A clear path from learning to lasting memory</p>

    <div className="inline:block mt-5 bg-blue-950 h-98">
      

        </div>
</section>
    );
}

export default Process;
