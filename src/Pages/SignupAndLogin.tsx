import { useState, type FormEvent, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar4Auth from "../components/Navbar4Auth";

// firebase
import { auth, db} from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, type User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, useLocation } from "react-router-dom";


function Signup() {
    const navigate = useNavigate();

    const location = useLocation();

    // check if user is logged in
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [checkingAuth, setCheckingAuth] = useState(true);

    const[isopacity, setOpacity] = useState(location.pathname === "/login"); // it will return false if the location.pathname is signup, otherwise it is true so it can be switched automatically.
    const[isSlider, setSlider] = useState(location.pathname === "/login");
    
    // form input
    const [Loginemail, setLoginEmail] = useState("");
    const[Loginpassword, setLoginPassword] = useState("");

    const [Signupemail, setSignupEmail] = useState("");
    const[Signuppassword, setSignupPassword] = useState("");
    const[Confirmpassword, setConfirtPassword] = useState("");

    // error states for Login & Signup
    const [loginError, setLoginError] = useState("");
    const [signupError, setSignupError] = useState("");
    const [loading, setLoading] = useState(false);

    // if user already exists.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setCheckingAuth(false);
        });

        return () => unsubscribe();
    }, []);


    const getFriendlyErrorMessage = (errorCode: string) => {
        switch (errorCode) {
            case "auth/invalid-email":
                return "Error: Please input a valid email.";
            case "auth/user-not-found":
            case "auth/wrong-password":
            case "auth/invalid-credential":
                return "Error: Invalid credentials or account does not exist.";
            case "auth/email-already-in-use":
                return "Error: An account already exists with this email.";
            case "auth/weak-password":
                return "Error: Password should be at least 6 characters.";
            case "auth/missing-password":
                return "Error: Please enter a password.";
            case "auth/mis ":
                return "Error: Please enter a password.";
            default:
                return "An error occurred. Please try again.";
        }
    };



    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginError("");

        if (!Loginemail) {
            setLoginError("Error: Please input a valid email.");
            return;
        }

        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, Loginemail, Loginpassword);
            navigate("/home");
        } catch (error: any) {
            console.error("Login Error:", error.code);
            setLoginError(getFriendlyErrorMessage(error.code));
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSignupError("");

        if (!Signupemail) {
            setSignupError("Error: Please input a valid email.");
            return;
        }

        if (Signuppassword !== Confirmpassword) {
            setSignupError("Error: Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            // create account in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                Signupemail,
                Signuppassword
            );
            const user = userCredential.user;

            // save user record in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                createdAt: new Date(),
            });

            navigate("/home");
        } catch (error: any) {
            console.error("Signup Error:", error.code);
            setSignupError(getFriendlyErrorMessage(error.code));
        } finally {
            setLoading(false);
        }
    };

    // show loading text while Firebase verifies login state
    if (checkingAuth) {
        return (
            <div className="min-h-screen bg-indigo-950 flex items-center justify-center text-white font-semibold">
                Checking session...
            </div>
        );
    }

    return(

<>
 <Navbar4Auth />

    <div className="relative min-h-screen flex items-center justify-center
        bg-indigo-950 p-9">
        <div className="relative bg-gradient-to-br
                        from-indigo-900
                        via-indigo-950
                        to-indigo-800
                        w-[95%] 
                        md:max-w-[890px]
                        shadow-yellow-50
                        shadow
                        rounded-3xl
                        min-h-[600px]
                        md:min-h-[460px]
                        ">
            
            {currentUser ? (
                        <div className="flex flex-col items-center justify-center text-center px-6 py-10 z-50">
                            <h1 className="uppercase tracking-wide font-bold text-white/80 text-[12px] mb-2">
                                ForgetMeNot
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                You are already signed in!
                            </h2>
                            <p className="text-purple-300 font-medium mb-6">
                                Signed in as: <span className="text-white font-semibold">{currentUser.email}</span>
                            </p>

                            <button
                                onClick={() => navigate("/home")}
                                className="border border-purple-500 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 hover:scale-105 hover:cursor-pointer shadow-lg"
                            >
                                Go to Home Page
                            </button>
                        </div>
                    ) : (
                        <>
            <div className={`absolute 
                            h-full 
                            w-full
                            md:w-1/2
                            top-0 
                            left-0 
                            z-10 
                            transition-opacity
                            duration-500

                        ${isSlider
                            ? "opacity-0 pointer-events-none  md:opacity-100 md:pointer-events-auto"
                            : "opacity-100 pointer-events-auto "
                        }
                    `}>
                            

        

        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 h-full px-10 justify-center items-center"
        >

            <div>
                <h1 className="uppercase 
                            tracking-wide 
                            font-bold 
                            text-white/80 
                            text-center 
                            py-5 
                            text-[12px]">
                    
                    ForgetMeNot</h1>

            <h1 className="lg:text-2xl 
                            text-3xl
                            font-bold 
                            text-transparent 
                            bg-gradient-to-br 
                            bg-clip-text 
                            from-white 
                            lg:text-left 
                            text-center
                            to-purple-800">

                    Log In</h1>

            <h1 className="text-l 
                            text-left 
                            font-bold 
                            text-transparent 
                            bg-gradient-to-br 
                            bg-clip-text 
                            from-white
                            to-purple-800
                            lg:mb-0
                            mb-3">

                Welcome! Please log in your account. </h1>

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


                                    {/* LOG IN ERROR DISPLAY */}
                                    <h3 className={`text-red-400 font-semibold text-xs text-center transition-all ${
                                        loginError ? "block" : "hidden"
                                    }`}>
                                        {loginError}
                                    </h3>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="border border-violet-800 border-2 text-white py-2 px-6 rounded-xl font-semibold hover:bg-violet-800
                                        transition duration-400 hover:cursor-pointer hover:scale-105"
                                    >
                                        {loading ? "Logging in..." : "Log In"}
                                    </button>

                                    <div className="flex md:hidden flex-col items-center gap-2 mt-4">
                                        <p className="text-white/70 text-sm">
                                            Don't have an account?
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setSlider(true)}
                                            className="relative text-purple-300 
                                                    font-semibold 
                                                    after:-bottom-1
                                                    after:left-0
                                                    after:w-full
                                                    after:h-0.5
                                                    after:absolute
                                                    after:rounded-full
                                                    after:bg-purple-100/70

                                                    hover:text-purple-200 
                                                    transition"
                                        >
                                            Sign up
                                        </button>
                                </div>

                                </form>
                                </div>

        <div className={`${isSlider ? "translate-x-full" : "translate-x-0"} 
                        absolute 
                        left-0
                        top-0
                        duration-700
                        transition-transform
                        ease-in-out
                        z-20
                        md:block
                        hidden
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
                    hidden
                    md:flex 
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
            
            <h1  className={`${isopacity ? "opacity-0" : "opacity-100"} 
                            transition-opacity 
                            duration-500 
                            md:text-4xl 
                            text-2xl 
                            font-bold 
                            bg-indigo-950 
                            bg-clip-text 
                            text-center 
                            tracking-wide
                            text-transparent`}>
                
                            Already have an account?</h1>

            <h1  className={`${isopacity ? "opacity-0" : "opacity-100"} 
                            transition-opacity 
                            duration-500 
                            text-l 
                            font-bold 
                            text-indigo-950 
                            mb-8`}>
                
                             Let's Continue your journey!</h1>

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
                        hidden
                        md:flex 
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
            
            <h1  className={`${isopacity ? "opacity-100" : "opacity-0"} 
                            transition-opacity 
                            duration-500 
                            md:text-4xl 
                            text-2xl 
                            text-center 
                            font-bold 
                            text-indigo-950 
                            mx-8 
                            mb-1`}>
                                
                                Don't have an account yet?</h1>

            <h1  className={`${isopacity ? "opacity-100" : "opacity-0"} 
                            transition-opacity 
                            duration-500 
                            text-l 
                            font-bold 
                            text-indigo-950 
                            mb-8`}>
                                
                                Start your journey with us!</h1>

              <button
                onClick={() => {setOpacity(false);setSlider(false) }}
                className={ ` ${isopacity ? "bg-purple-500" :"bg-transparent"}  
                            py-2 
                            px-6 
                            rounded-xl 
                            transition-all 
                            duration-400 
                            hover:cursor-pointer 
                            hover:scale-105 
                            border 
                            border-purple-500 
                            hover:bg-amber-50/0 
                            text-white 
                            font-semibold`}>
               
               <p  className={`${isopacity ? "opacity-100" : "opacity-0"} 
                            transition-opacity 
                            duration-500`}>
                                
                         Sign up</p> 
            </button>



        </div>

        <div className={`
                        absolute
                        h-full
                        top-0
                        right-0
                        w-full
                        md:w-1/2
                        

                        transition-opacity
                        duration-500

                        ${isSlider
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
                        }
                    `}>

            <form 
            onSubmit={handleSignup}
            className="flex 
                    flex-col 
                    gap-4 
                    h-full 
                    justify-center 
                    items-center 
                    px-10">

<div>
                <h1 className="uppercase 
                            tracking-wide 
                            font-bold 
                            text-white/80 
                            text-center 
                            py-5 
                            text-[12px]">

                    ForgetMeNot</h1>

            <h1 className="text-2xl 
                            font-bold 
                            text-transparent 
                            bg-gradient-to-br 
                            bg-clip-text 
                            md:text-left 
                            text-center
                            from-white 
                            to-purple-800">

                Create account </h1>

            <h1 className="text-l  
                            md:text-left 
                            text-center
                            font-bold 
                            text-transparent 
                            bg-gradient-to-br 
                            bg-clip-text 
                            from-white 
                            to-purple-800
                            lg:mb-0
                            mb-3">
                Start practicing your memory now!</h1>

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

            {/* SIGN UP ERROR DISPLAY */}
            <h3 className={`text-red-400 font-semibold text-xs text-center transition-all ${
                signupError ? "block" : "hidden"
            }`}>
                {signupError}
            </h3>

            <button
                disabled={loading}
                type="submit"
                className="border 
                border-violet-800 
                lg:border-violet-800 
                lg:bg-transparent
                border-2 
                text-white 
                py-2 
                px-6 
                rounded-xl 
                font-semibold 
                lg:hover:bg-violet-800
                bg-purple-500
                 transition 
                duration-400 
                hover:cursor-pointer 
                hover:scale-105"
            >
                {loading ? "Creating..." : "Sign Up"}
            </button>

            <div className="flex md:hidden flex-col items-center gap-2 mt-4">

                                    <p className="text-white/70 text-sm">
                                        Already have an account?
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setSlider(false)}
                                        className="relative text-purple-300 
                                                    font-semibold 
                                                    after:-bottom-1
                                                    after:left-0
                                                    after:w-full
                                                    after:h-0.5
                                                    after:absolute
                                                    after:rounded-full
                                                    after:bg-purple-100/70

                                                    hover:text-purple-200 
                                                    transition"
                                    >
                                        Log in
                                    </button>
                    </div>

            </form>
        </div>
        </>
        )}
        </div>

    </div>
    </>
);
}

// function showError(text) {
    
// }
export default Signup;