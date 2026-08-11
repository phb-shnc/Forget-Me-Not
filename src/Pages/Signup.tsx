import { useState, type FormEvent } from "react";


function Signup() {
      const[isopacity, setOpacity] = useState(false);
    const[isSlider, setSlider] = useState(false);
    

    const [Loginemail, setLoginEmail] = useState("");
    const[Loginpassword, setLoginPassword] = useState("");

    const [Signupemail, setSignupEmail] = useState("");
    const[Signuppassword, setSignupPassword] = useState("");
    const[Confirmpassword, setConfirtPassword] = useState("");



    const handleSignup = (e: FormEvent<HTMLFormElement>) => { e.preventDefault();

        console.log("Email:", Signupemail);
        console.log("Password:", Signuppassword);
        console.log("Created Password:", Confirmpassword)
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault();

        console.log("Email:", Loginemail);
        console.log("Password:", Loginpassword);
    };

    return(

    <div className="relative min-h-screen flex items-center justify-center
        bg-indigo-950 p-9">
        <div className="relative bg-gradient-to-br
                        from-indigo-900
                        via-indigo-950
                        to-indigo-800
                        w-[890px]
                        shadow-yellow-50
                        shadow-xl
                        rounded-3xl
                        min-h-[460px]
                        ">

            <div className=" absolute h-full w-1/2 top-0 left-0 z-10 ease-in-out transition 
                duration-700 opacity-100
            ">

        

        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 h-full px-10 justify-center items-center"
        >

            <div>
                <h1 className="uppercase tracking-wide font-bold text-white/80 text-center py-5 text-[12px]">ForgetMeNot</h1>

            <h1 className="text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-white to-purple-800">
                Log In
            </h1>

            <h1 className="text-l text-left font-bold text-transparent bg-gradient-to-br bg-clip-text from-white to-purple-800">
                Welcome! Please log in your account.
            </h1>
        </div>
            <input
                type="email"
                placeholder="juancruz@gmail.com"
                value={Loginemail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="bg-white font-semibold text-violet-900/50 px-9 py-2 rounded-full"
                
            />

            <input
                type="password"
                placeholder="Password"
                value={Loginpassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="bg-white font-semibold text-violet-900/50 px-9 py-2 rounded-full"
            />

            <button
                type="submit"
                className="border border-violet-800 border-2 text-white py-2 px-6 rounded-xl font-semibold hover:bg-violet-800
                transition duration-400 hover:cursor-pointer hover:scale-105"
            >
                Log In
            </button>

        </form>
        </div>

        <div className={`${isSlider ? "translate-x-full" : "translate-x-0"} absolute 
        left-0
        top-0
        duration-700
        transition-transform
        ease-in-out
        z-20
        bg-gradient-to-bl
        from-gray-300
        via-purple-800
        to-indigo-800

        h-full
        w-1/2
        rounded-3xl`}>

        </div>


        <div className={`absolute 
        z-30 
        h-full 
        flex 
        flex-col 
        w-1/2
        justify-center
        items-center
        top-0
        left-0
        
        ${isopacity ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
        
        transition-opacity
        duration-500
        `}>
            
            <h1  className={`${isopacity ? "opacity-0" : "opacity-100"} transition-opacity duration-500 text-3xl font-bold bg-indigo-950 bg-clip-text text-center text-transparent`}>Already have an account?</h1>
            <h1  className={`${isopacity ? "opacity-0" : "opacity-100"} transition-opacity duration-500 text-l font-bold text-indigo-950 mb-8`}>Let's Continue your journey!</h1>

              <button
                onClick={() => {setOpacity(true); setSlider(true)}}
                className={ `${isopacity ? "bg-transparent" :"bg-purple-500"} py-2 px-6 rounded-xl 
                transition-all duration-400 hover:cursor-pointer hover:scale-105 border border-purple-500 hover:bg-amber-50/0 text-white font-semibold`}>
               
               <p  className={`${isopacity ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
                        Sign In</p> 
            </button>



        </div>

        <div className={`absolute 
        z-30 
        h-full 
        flex 
        flex-col 
        w-1/2
        justify-center
        items-center
        top-0
        right-0

         ${isopacity ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        
        transition-opacity
        duration-500
        
        
        `}>
            
            <h1  className={`${isopacity ? "opacity-100" : "opacity-0"} transition-opacity duration-500 text-3xl text-center font-bold text-indigo-950 mx-8 mb-1`}>Don't have an account yet?</h1>
            <h1  className={`${isopacity ? "opacity-100" : "opacity-0"} transition-opacity duration-500 text-l font-bold text-indigo-950 mb-8`}>Start your journey with us!</h1>

              <button
                onClick={() => {setOpacity(false);
                     setSlider(false) }}
                className={ ` ${isopacity ? "bg-purple-500" :"bg-transparent"}  py-2 px-6 rounded-xl 
                transition-all duration-400 hover:cursor-pointer hover:scale-105 border border-purple-500 hover:bg-amber-50/0 text-white font-semibold`}>
               
               <p  className={`${isopacity ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
                        Sign up</p> 
            </button>



        </div>

        <div className="absolute 
        h-full 
        top-0 
        right-0 
        transition 
        ease-in-out 
        z-10 
        w-1/2
        opacity-100">

            <form 
            onSubmit={handleSignup}
            className="flex flex-col gap-4 h-full justify-center items-center px-10 gap 4"
            >

<div>
                <h1 className="uppercase tracking-wide font-bold text-white/80 text-center py-5 text-[12px]">ForgetMeNot</h1>

            <h1 className="text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-white to-purple-800">
                Create account
            </h1>

            <h1 className="text-l text-left font-bold text-transparent bg-gradient-to-br bg-clip-text from-white to-purple-800">
                Start practicing your memory now!
            </h1>
        </div>

            <input
                type="email"
                placeholder="juancruz@gmail.com"
                value={Signupemail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="bg-white font-semibold text-violet-900/50 px-9 py-2 rounded-full"
            />

            <input
                type="password"
                placeholder="Create a Password"
                value={Signuppassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="bg-white font-semibold text-violet-900/50 px-9 py-2 rounded-full"
            />

            <input
                type="password"
                placeholder="Password"
                value={Confirmpassword}
                onChange={(e) => setConfirtPassword(e.target.value)}
                className="bg-white font-semibold text-violet-900/50 px-9 py-2 rounded-full"
            />

            <button
                type="submit"
                className="border border-violet-800 border-2 text-white py-2 px-6 rounded-xl font-semibold hover:bg-violet-800
                transition duration-400 hover:cursor-pointer hover:scale-105"
            >
                Sign Up
            </button>

            </form>
        </div>

        </div>

    </div>
);
}
export default Signup;