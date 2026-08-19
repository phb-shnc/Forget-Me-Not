import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Profilebutton() {

    const [isOpen, setisOpen] = useState(false);
    const navigate = useNavigate();

    // logout function
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login"); // Redirect user to login page
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="relative">
            {isOpen && <><div className="h-8 rounded-full w-8 absolute bg-white/50 top-[1px] right-[1.5px] shadow-black shadow-2xl"></div></>}
        <button className="flex relative items-center text-4xl text-center text-white "
        onClick={() => setisOpen(!isOpen)}>
        
             <CgProfile />
        </button>

  {isOpen && ( <> <div className="absolute
                            right-0
                            top-full
                            mt-3

                            z-50

                            w-[280px]
                            rounded-2xl
                            border
                            border-violet-900
                            bg-indigo-900
                            p-3
                            text-white
                            shadow-2xl
                            shadow-black"> 


                <div className="flex flex-col">
                    
                    <p className="mt-3 self tracking-wide text-left px-2 self-center">
                        Profile & Settings
                    </p>

                     <p className="text-[11px] mt-0 self tracking-wide  text-left px-2">
                        Manage your account and study preferences
                    </p>

                    <div className="flex flex-col 
                    font-light
                    ">

                    <Link to="#" className="
                                mt-3 
                                tracking-wide 
                                border-y-gray-500 
                                border-y 
                                py-4 
                                text-left 
                                px-2 
                                hover:bg-violet-900 
                                transition-colors 
                                duration-400">
                        Personal Information
                    </Link>

                    <Link to="#" className=" 
                                tracking-wide 
                                py-4 
                                text-left 
                                px-2 
                                border-b-gray-500 
                                border-b 
                                hover:bg-violet-900 
                                transition-colors 
                                duration-400">
                        Study Reminders
                    </Link>

                    <Link  to="#" className="
                                tracking-wide 
                                py-4 
                                text-left 
                                px-2 
                                border-b-gray-500 
                                border-b 
                                hover:hover:bg-violet-900 
                                transition-colors 
                                duration-400">
                        Appearance
                    </Link>

                    <Link to="#"  className="
                                tracking-wide 
                                py-4 
                                text-left 
                                px-2 
                                border-b-gray-500 
                                border-b 
                                hover:hover:bg-violet-900 
                                transition-colors 
                                duration-400">
                        Data & Account
                    </Link>

                    <button 
                        onClick={handleLogout}
                        className="relative tracking-wide self-center flex py-2 text-left px-2 mt-2 hover:text-violet-300 after:bg-violet-600 after:bottom-1 after:h-0.5 after:w-15 after:absolute after:rounded-2xl transition-colors duration-400 hover:cursor-pointer"
                    >
                        Log out
                    </button>
                    </div>
            </div>
             </div>

        </>  )}
         </div>
  
           


    );
}

export default Profilebutton;