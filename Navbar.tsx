function Navbar() {
    return (
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

                py-3

                bg-white/10
                backdrop-blur-2xl

                border
                border-amber-50/50

                rounded-3xl
                shadow-lg

                z-50
            "
        >
            {/* Logo */}
            <div>
                <a href="#"
                    className="
                        text-xl
                        sm:text-xl
                        md:text-2xl

                        font-serif
                        font-bold
                        tracking-wide
                        text-amber-50
                    "
                >
                    ForgetMeNot
                </a>
            </div>

            {/* Right Side */}
            <div
                className="
                    flex
                    items-center

                    gap-4
                    md:gap-8
                    lg:gap-12
                "
            >
                {/* Navigation */}
                <div 
                    className=" 
                        flex

                        gap-4
                        md:gap-6
                        lg:gap-8

                        text-xl
                        md:text-base
                        lg:text-l

                        text-white
                        font-serif
                    "
                >
                    <a href="#" className="hover:text-amber-200 transition">
                        Resources
                    </a>

                    <a href="#" className="hover:text-amber-200 transition">
                        About Us
                    </a>

                    <a href="#" className="hover:text-amber-200 transition">
                        Features
                    </a>
                </div>

                {/* Buttons */}
                <div
                    className="
                        flex
                        items-center

                        gap-3
                        md:gap-5
                    "
                >
                    <a href="#"
                    
                        className="
                            relative

                            px-4
                            md:px-8
                            lg:px-8

                            py-2
                            md:py-2

                            rounded-xl

                            bg-gradient-to-br
                            to-indigo-900

                            border
                            border-amber-300/50

                            text-white
                            font-serif

                            text-xs
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
                        Login
                    </a>

                    <a href="#"
                        className="
                            relative

                            px-5
                            md:px-6
                            lg:px-8

                            py-2
                            md:py-2

                            rounded-xl

                            bg-gradient-to-tl
                            from-amber-300/50
                            to-amber-50

                            border
                            border-indigo-900/70

                            text-indigo-900
                            font-serif

                            text-xs
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
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;