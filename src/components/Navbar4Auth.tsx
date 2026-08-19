import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom"; 

function Navbar4Auth() {

    const [isOpen ,setopen] = useState(false);
    // const scrollToSection = (id: string) => {
    //     document.getElementById(id)?.scrollIntoView({
    //         behavior: "smooth",
    //     });
    // };

    return (
        <>
        <nav 
            className="
                fixed
                top-2
                md:top-4
                lg:top-1
                left-1/2
                -translate-x-1/2

                md:w-[103%]
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

                md:py-2

               
                


                z-50
            "
        >

            {/* Logo */}
            <div>
                <a href="/"
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
                            border-amber-300/30

                            text-white
                            font-serif

                            text-[50%]
                            md:text-sm

                            tracking-[0.25em]

                            shadow-[0_0_15px_rgba(170,255,255,0.1)]

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
                            border-indigo-900/50

                            text-indigo-900
                            font-serif

                            text-[50%]
                            md:text-sm

                            tracking-[0.25em]

                            shadow-[0_0_15px_rgba(170,255,255,0.1)]

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
                    <Link to="/login"
                     onClick={() => setopen(false)}
                    
                        className="
                            relative

                            px-3
                            md:px-5
                           

                            py-1
                            md:py-2

                            rounded-xl

                            bg-gradient-to-br
                            to-indigo-900

                            border
                            border-amber-300/20

                            text-white/90
                            font-serif

                            text-[60%]
                            md:text-[95%]
                            font-semibold

                            text-center
                            
                            
                


                            
                        "
                    >
                        Login
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
                            border-indigo-900/40

                            text-indigo-900
                            font-serif

                            text-[60%]
                            md:text-[95%]
                            text-center
                            font-semibold
                           

                           

                            
                        "
                    >
                        Sign up
                    </Link>
                 </div>
                </div>
    
        
    </> );
}

export default Navbar4Auth;