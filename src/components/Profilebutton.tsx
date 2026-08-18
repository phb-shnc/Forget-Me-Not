import { CgProfile } from "react-icons/cg";
import { useState } from "react";


function Profilebutton() {

    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="relative">
        <button className="flex items-center text-4xl text-center text-white "
        onClick={() => setisOpen(!isOpen)}>
        
             <CgProfile />
        </button>

       
       <div className="absolute 
                    bg-indigo-900 
                    border 
                    shadow-2xl  
                    border-violet-900 
                    text-white
                    z-50 
                    h-90 
                    inline-block 
                    p-3
                    w-70 
                    right-0 
                    rounded-2xl "> 


                <div className="flex flex-col">
                    
                    <p className="mt-3 self tracking-wide text-left px-2">
                        Profile & Settings
                    </p>

                     <p className="text-[11px] mt-0 self tracking-wide  text-left px-2">
                        Manage your account and study preferences
                    </p>

                    <div className="flex flex-col ">

                    <button className="mt-3 self tracking-wide border-y-gray-500 border-y py-4 text-left px-2 hover:bg-violet-900 transition-colors duration-400">
                        Personal Information
                    </button>

                    <button className=" tracking-wide  py-4 text-left px-2 border-b-gray-500 border-b hover:bg-violet-900 transition-colors duration-400">
                        Study Reminders
                    </button>

                    <button className="font-medium tracking-wide  py-4 text-left px-2 border-b-gray-500 border-b hover:hover:bg-violet-900 transition-colors duration-400">
                        Appearance
                    </button>

                    <button className="font-medium tracking-wide  py-4 text-left px-2 border-b-gray-500 border-b hover:hover:bg-violet-900 transition-colors duration-400">
                        Data & Account
                    </button>

                    <button className="relative font-medium tracking-wide self-center flex  py-2 text-left px-2 hover:text-violet-300 
                        after:bg-violet-600
                        after:bottom-1
                        after:h-0.5
                        after:w-15
                        after:absolute
                        after:rounded-2xl
                        transition-colors duration-400">
                        Log out
                    </button>
                    </div>
            </div>
            </div>
            
            
            
 </div>


    );
}

export default Profilebutton;