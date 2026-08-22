import Partible from "../assets/images/Partible.jpg";
import Lachica from "../assets/images/Lachica.jpg";
import Poblete from "../assets/images/Poblete.jpg";
import { ModelViewer } from "./3dFooterCanvas";

function Aboutus(){
        return (

<section className="relative overflow-hidden mt-40">

<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

    <p
        className="
          
            uppercase
            text-m
            text-white/70 
            tracking-[3px]
            text-center
            mb-5
        "
    >
        About Us
    </p>

    <h2
        className="
            lg:text-5xl
            md:text-4xl 
            text-2xl
            text-white
            text-balance
            font-bold
            font-serif
            text-center
            lg:mb-20
            mb-20
        "
    >
        Meet the Developers
    </h2>

</div>


<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-center mt-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Phoebe */}
        <div className="relative 
                        bg-gradient-to-b
                        from-indigo-950 
                        to-white/40 
                    
                        
                        hover:scale-105 
                        hover:from-indigo-950 
                        hover:via-white/40 
                        hover:to-indigo-950 
                        transition-colors
                        duration-700  
                        
                        border
                        border-white/40
                        
                        rounded-xl 
                        md:pt-15 
                        pt-10 
                        pb-5 
                        px-5 
                        w-33 
                        md:w-45 
                        md:h-30 
                        h-25 
                        text-center">

            <img
                src={Poblete}
                alt="Phoebe Poblete"
                    className="
                        absolute
                        -top-8
                        left-1/2
                        -translate-x-1/2
                        h-16
                        w-16
                        md:h-20
                        md:w-20
                        rounded-full
                        object-cover
                        border-1
                        border-indigo-950/70
                    "
            />

            <div className="text-center">
            <h1 className="text-amber-50 text-[10px] md:text-xs font-semibold">
                Phoebe Poblete
            </h1>

            <p className="text-amber-50/80 text-[9px] md:text-[11px] font-normal mt-1">
                Leader
            </p>
        </div>
        </div>

        {/* Mc */}
        <div className="relative 
                        bg-gradient-to-b 
                        from-indigo-950 
                        to-white/40 
                    
                        
                        hover:scale-105 
                        hover:from-indigo-950 
                        hover:via-white/40 
                        hover:to-indigo-950 
                        transition-colors
                        duration-700 
                        
                        border
                        border-white/40

                        rounded-xl 
                        md:pt-15 
                        pt-10 
                        pb-5 
                        px-5 
                        w-33 
                        md:w-45 
                        md:h-30 
                        h-25 
                        text-center">

            <img
                src={Lachica}
                alt="Mc Lachica"
                    className="
                        absolute
                        -top-8
                        left-1/2
                        -translate-x-1/2
                        h-16
                        w-16
                        md:h-20
                        md:w-20
                        rounded-full
                        object-cover
                        border-1
                        border-indigo-950/70
                    "
            />

            <div className="text-center">
                <h1 className="text-amber-50 text-[10px] md:text-xs font-semibold">
                    Mc Lachica
                </h1>

                <p className="text-amber-50/80 text-[9px] md:text-[11px] font-normal mt-1">
                    Back-end Developer
                </p>
            </div>
        </div>

        {/* Nicole */}
        <div className="relative 
                        bg-gradient-to-b 
                        from-indigo-950 
                        to-white/40 
                    
                        
                        hover:scale-105 
                        hover:from-indigo-950 
                        hover:via-white/40 
                        hover:to-indigo-950 
                        transition-colors
                        duration-700
                    
                        border
                        border-white/40

                        rounded-xl 
                        md:pt-15 
                        pt-10 
                        pb-5 
                        px-5 
                        w-33 
                        md:w-45 
                        md:h-30 
                        h-25 
                        text-center">


            
            <img
                src={Partible}
                alt="Nicole Partible"
                    className="
                        absolute
                        -top-8
                        left-1/2
                        -translate-x-1/2
                        h-16
                        w-16
                        md:h-20
                        md:w-20
                        rounded-full
                        object-cover
                        border-1
                        border-indigo-950/70
                    "
            />

            <div className="text-center">
                    <h1 className="text-amber-50 text-[10px] md:text-xs font-semibold">
                        Nicole Partible
                    </h1>

                    <p className="text-amber-50/80 text-[9px] md:text-[11px] font-normal mt-1">
                        Front-end Developer
                    </p>
            </div>
        </div>
    </div>
</div>

<footer >

    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-16 md:mt-20">
        <div
            className="
                bg-gradient-to-tl
                from-cyan-200
                via-indigo-400/50
                to-indigo-400/0
                rounded-2xl
                min-h-[180px]
                md:min-h-[260px]
                lg:min-h-[320px]
                flex
                flex-col
                py-7
                md:py-0
                justify-center
                items-center
                text-center
                text-white
                tracking-wider
                px-6
                md:px-12
                lg:px-20
            "
        >
                <h1
                    className="
                        text-lg
                        md:text-3xl
                        lg:text-4xl
                        font-bold
                        font-serif
                    "
                >
                    Build your fortress of memory
                </h1>

                <h2
                    className="
                        mt-3
                        max-w-xs
                        md:max-w-2xl
                        lg:max-w-3xl
                        text-[11px]
                        md:text-base
                        lg:text-lg
                        font-light
                        leading-relaxed
                    "
                >
                    Stop letting what you learn slip away. Sign up free and start your
                    first topic today.
                </h2>

                <a
                    href="#"
                    className="
                        mt-6
                        bg-black/70
                        hover:scale-105
                        transition
                        duration-200
                        text-white
                        rounded-xl
                        px-6
                        py-2
                        text-xs
                        md:text-sm
                        shadow-blue-950
                        shadow
                        shadow-2xl
                    "
                >
                    Start now!
                </a>
        </div>
</div>

<div className="relative bg-gray-600/50 h-[1px] mt-10"></div>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-[40%_30%_30%]
                        gap-12
                        items-start
                        px-6
                        md:px-12
                        lg:px-24
                        mt-10
                        max-w-7xl
                        mx-auto
                        
                        
                    "
                >
                    {/* Newsletter */}
                    <div className="tracking-wider flex flex-col justify-center items-center">

                        <p className="text-amber-50 text-sm md:text-base font-semibold mb-4">
                            Join our newsletter!
                        </p>

                <div className="relative w-full max-w-sm">

                    <input
                        type="text"
                        placeholder="Juancruz@gmail.com"
                        className="
                            w-full
                            bg-indigo-950
                            text-white
                            border
                            border-blue-200
                            rounded-xl
                            py-2
                            pl-4
                            pr-28
                            text-sm
                            placeholder:text-gray-400
                        "
                    />

                    <button
                        className="
                            absolute
                            right-2
                            top-1/2
                            -translate-y-1/2
                            bg-gradient-to-br
                            from-indigo-400/50
                            to-indigo-900
                            border
                            border-blue-900/80 
                            text-amber-50
                            rounded-lg
                            px-4
                            py-1
                            text-xs
                            tracking-wider
                            hover:text-amber-300
                            transition
                            
                        "
                    >
                        Submit
                    </button>

                </div>

                <p
                    className="
                        text-gray-400
                        text-[11px]
                        md:text-sm
                        leading-relaxed
                        mt-4
                        max-w-sm
                    "
                >
                    Stay sharp. Get updates on new features and smarter study habits.
                    Answer our survey by joining our newsletter!
                </p>

            </div>

            {/* Illustration */}
            <div className="flex justify-center items-center h-[220px] -z-10">

                {/*Canvas for 3d models */}
                <ModelViewer /> 
                {/* <img
                    src={illustration}
                    alt="illustration"
                    className="
                        w-full
                        max-w-xs
                        md:max-w-sm
                        object-contain
                    "
                /> */}

            </div>

            {/* Resources */}
            <div>

                <h3
                    className="
                        font-bold
                        text-gray-300
                        text-sm
                        md:text-base
                        mb-4
                    "
                >
                    Resources
                </h3>

                <div
                    className="
                        flex
                        flex-col
                        gap-3
                        text-gray-400
                        text-xs
                        md:text-sm
                        tracking-wider
                    "
                >
                    <a href="#" className="hover:text-gray-300 transition">Blog</a>
                    <a href="#" className="hover:text-gray-300 transition">Help Center</a>
                    <a href="#" className="hover:text-gray-300 transition">Resources</a>
                    <a href="#" className="hover:text-gray-300 transition">Community</a>
                    <a href="#" className="hover:text-gray-300 transition mb-5">Contact</a>
                </div>

            </div>


</div>

</footer>


        
</section>
    );
}


export default Aboutus;
