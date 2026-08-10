import { use, useState, type FormEvent } from "react";


function Login() {

    const[isopacity, setOpacity] = useState(false);
    const[isSlider, setSlider] = useState(false);
    

    const [Loginemail, setLoginEmail] = useState("");
    const[Loginpassword, setLoginPassword] = useState("");

    const [Signupemail, setSignupEmail] = useState("");
    const[Signuppassword, setSignupPassword] = useState("");
    const[Confirmpassword, setConfirtPassword] = useState("");


    
    const[createdPass, setCreatedpass] = useState("");

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
        <div className="relative bg-amber-100 
                        w-[990px]
                        shadow-yellow-50
                        shadow-xl
                        rounded-3xl
                        min-h-[560px]
                        ">

            <div className=" absolute h-full w-1/2 top-0 left-0 z-10 ease-in-out transition 
                duration-700 opacity-100
            ">

        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 h-full px-10 justify-center items-center"
        >
            <h1 className="text-2xl font-bold">
                Log In
            </h1>

            <input
                type="email"
                placeholder="juancruz@gmail.com"
                value={Loginemail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="border border-blue-900 px-9 py-2 rounded-xl"
            />

            <input
                type="password"
                placeholder="Password"
                value={Loginpassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="border border-blue-900 px-9 py-2 rounded-xl"
            />

            <button
                type="submit"
                className="bg-blue-950 text-white py-2 px-6 rounded-2xl  hover:bg-indigo-900
                transition duration-400 hover:cursor-pointer hover:scale-105"
            >
                Sign In
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
        bg-white
        h-full
        w-1/2
        rounded-3xl`}>

        </div>


        <div className="absolute 
        z-30 
        h-full 
        flex 
        flex-col 
        w-1/2
        justify-center
        items-center
        top-0
        left-0

        
        
        
        ">
            
            <h1  className={`${isopacity ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>Already have an account?</h1>
            <h1  className={`${isopacity ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>Let's Continue your journey!</h1>

              <button
                onClick={() => {setOpacity(true); setSlider(true)}}
                className={ ` ${isopacity ? "border-transparent" : "border-blue-950"} border border-blue-950 text-indigo-950 py-2 px-6 rounded-l 
                transition-all duration-400 hover:cursor-pointer hover:scale-105`}>
               
               <p  className={`${isopacity ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
                        Sign In</p> 
            </button>



        </div>

        <div className="absolute 
        z-30 
        h-full 
        flex 
        flex-col 
        w-1/2
        justify-center
        items-center
        top-0
        right-0

        
        
        
        ">
            
            <h1  className={`${isopacity ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>Don't have an account yet?</h1>
            <h1  className={`${isopacity ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>Start you journey with us!</h1>

              <button
                onClick={() => {setOpacity(false);
                     setSlider(false) }}
                className={ ` ${isopacity ? "border-blue-950" :"border-transparent"} border border-blue-950 text-indigo-950 py-2 px-6 rounded-l 
                transition-all duration-400 hover:cursor-pointer hover:scale-105`}>
               
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

                <h1 className="text-2xl font-bold">
                Sign Up
            </h1>

            <input
                type="email"
                placeholder="juancruz@gmail.com"
                value={Signupemail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="border border-blue-900 px-9 py-2 rounded-xl"
            />

            <input
                type="password"
                placeholder="Create a Password"
                value={Signuppassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className="border border-blue-900 px-9 py-2 rounded-xl"
            />

            <input
                type="password"
                placeholder="Password"
                value={Confirmpassword}
                onChange={(e) => setConfirtPassword(e.target.value)}
                className="border border-blue-900 px-9 py-2 rounded-xl"
            />

            <button
                type="submit"
                className="bg-blue-950 text-white py-2 px-6 rounded-2xl hover:bg-indigo-900
                transition duration-400 hover:cursor-pointer hover:scale-105 "
            >
                Sign Up
            </button>

            </form>
        </div>

        </div>

    </div>
);
}
export default Login;