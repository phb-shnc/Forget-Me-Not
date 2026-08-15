function Navbarhome(){
    return(
        <nav className="
                bg-amber-100/10
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
            ">
            
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

             <div
                className="
                hidden
                    lg:flex
                    items-center
                

                    gap-8
                    lg:gap-12
                "
            >

            <div className=" 
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
                    ">
                <a>Dashboard</a>
                <a>Topics & Lessons</a>
                <a>Review Session</a>
            </div>

            </div>
            

            </nav>

    );
}

export default Navbarhome;