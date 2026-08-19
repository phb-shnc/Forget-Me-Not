import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom"; 

function Navbar() {

const [isOpen ,setopen] = useState(false);
const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
};

    return (
        <>
        <nav 
            className="
                fixed
                top-5
                left-1/2
                -translate-x-1/2

                w-[95%]
                max-w-[1800px]

                flex
                items-center
                justify-between

                px-4
                sm:px-6
                md:px-10
                lg:px-14

                py-2

                md:py-3

                bg-white/10
                backdrop-blur-2xl

                border
                border-amber-50/50

                rounded-xl
                md:rounded-3xl
                shadow-lg

                z-50
            "
        >

            {/* Logo */}
            <div>
                <a href="#"
                    className="
                        text-[75%]
                        sm:text-xl
                        md:text-2xl
                        

                        font-serif
                        font-bold
                        tracking-wide
                        text-amber-50
                        flex
                    "
                >
                    ForgetMeNot
                </a>
            </div>


            {/* Right Side */}
            <div
                className="
                hidden
                    lg:flex
                    items-center
                

                    gap-8
                    lg:gap-12
                "
            >
                {/* Navigation */}
                <div 
                    className=" 
                        flex
                        relative
                        gap-2
                        md:gap-6
                        lg:gap-8
                        text-[29%]
                        md:text-xl
                        md:text-base
                        lg:text-l

                        text-white
                        font-serif
                    "
                >
                    <button onClick={() => scrollToSection("aboutus")} className="relative hover:text-amber-100 transition  after:bg-amber-100/30
                        after:absolute
                        after:h-1
                        after:-bottom-1
                        after:rounded-full
                        after:left-0
                        after:w-0
                        after:transition-all
                        after:duration-300

                        hover:after:w-full">
                        Resources
                    </button>

                    <button onClick={() => scrollToSection("aboutus")} className="relative hover:text-amber-100 transition  after:bg-amber-100/30
                        after:absolute
                        after:h-1
                        after:-bottom-1
                        after:rounded-full
                        after:left-0
                        after:w-0
                        after:transition-all
                        after:duration-300
                        
                        hover:after:w-full">
                        About Us
                    </button>

                    <button onClick = {() => scrollToSection("features")} className="relative hover:text-amber-100 transition  after:bg-amber-100/30
                        after:absolute
                        after:h-1
                        after:-bottom-1
                        after:rounded-full
                        after:left-0
                        after:w-0
                        after:transition-all
                        after:duration-300

                        hover:after:w-full">
                        Features
                    </button>
                </div>

                {/* Buttons */}
                <div
                    className="
                        flex
                        items-center

                        gap-2
                        md:gap-5
                    "
                >
                    <Link to="/login"
                    onClick={() => setopen(false)}
                    
                        className="
                            relative

                            px-3
                            md:px-8
                            lg:px-8

                            py-1
                            md:py-2

                            rounded-xl

                            bg-gradient-to-br
                            to-indigo-900

                            border
                            border-amber-300/50

                            text-white
                            font-serif

                            text-[50%]
                            md:text-sm

                            tracking-[0.25em]

                            shadow-[0_0_15px_rgba(170,255,255,0.5)]

                            before:absolute
                            before:inset-0
                            before:rounded-xl
                            before:border
                            before:border-white/20

                            hover:scale-105
                            transition-all
                            duration-300
                        "
                    >
                        Log in
                        </Link>

                    <Link to="/signup"
                     onClick={() => setopen(false)}
                        className="
                            relative

                            px-3
                            md:px-6
                            lg:px-8

                            py-1
                            md:py-2

                            rounded-xl

                            bg-gradient-to-tl
                            from-amber-300/50
                            to-amber-50

                            border
                            border-indigo-900/70

                            text-indigo-900
                            font-serif

                            text-[50%]
                            md:text-sm

                            tracking-[0.25em]

                            shadow-[0_0_15px_rgba(170,255,255,0.5)]

                            before:absolute
                            before:inset-0
                            before:rounded-xl
                            before:border
                            before:border-white/20

                            hover:scale-105
                            transition-all
                            duration-300
                        "
                    >
                        Sign up
                    </Link>
                 </div>
                </div>
                
<button className="lg:hidden text-white text-3xl" 
            onClick={() => setopen(true)}>
                <FiAlignJustify />
</button>
</nav>










{
            isOpen && (
                <div className="fixed
                bg-black/20 
                z-40
                inset-0" onClick={() => setopen(false)}/>
        )}

         <div className={`fixed
         lg:hidden
        top-0
        right-0
        h-screen
        w-[80%]
        md:max-w-[250px]
        max-w-[150px]

        bg-gradient-to-tr
        from-indigo-950
        via-indigo-950
        to-indigo-900/100

        border
        border-l-amber-50/20
        
        z-50


        transform
        transition-transform
        duration-700
        ${isOpen 
            ? "translate-x-0"
            : "translate-x-full"
        }` 
    }
        >       
        
        <button className="absolute top-9 right-5 text-3xl text-white" 
            onClick={() => setopen(false)}>
                <GrClose size={20} /> </button>


                <p className="mt-27
                md:mt-30 
                px-2 
                md:text-[25px]
                text-l 
                text-white 
                font-bold 
                font-serif 
                text-center
                md:mb-10">
                    
                    
                     ForgetMeNot</p>
                

 <p className="text-center
                text-gray-600 py-1">____________________</p>


  <div 
                    className=" 
                        flex
                        flex-col
                        gap-4
                        mt-10
                        md:mt-15
                        px-5
                        text-[15px]
                        md:text-[20px]
                        md:text-center

                        text-white/70
                        
                        font-light
                    "
                >
                    <button  onClick={() => scrollToSection("aboutus")} className="hover:text-amber-200 transition">
                        Resources
                    </button>

                    <button  onClick={() => scrollToSection("aboutus")} className="hover:text-amber-200 transition">
                        About Us
                    </button>

                    <button onClick={() => scrollToSection("features")} className="hover:text-amber-200 transition">
                        Features
                    </button>
                </div>

                <p className="text-center
                text-gray-600 py-10">____________________</p>

                {/* Buttons */}
                <div
                    className="
                        flex
                        flex-col
                        md:px-5
                        px-4

                        md:mt-10

                        gap-3
                        md:gap-5

                        
                    "
                >
                 </div>
                </div>
    
        
    </> );
}

export default Navbar;