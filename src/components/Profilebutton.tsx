import { CgProfile } from "react-icons/cg";
import { useState } from "react";


function Profilebutton() {

    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="relative">
        <button className="flex items-center text-4xl text-center text-white"
        onClick={() => setisOpen(!isOpen)}>
             <CgProfile />
        </button>

        {isOpen && (<div className="absolute bg-violet-950 border shadow-2xl  border-violet-900 z-50 h-30 inline-block w-30 right-0 rounded-2xl "> 
                <div className="flex flex-col">
                    <button className="mt-3 self tracking-wide text-white py-1 text-left px-2 hover:bg-violet-900 transition-colors duration-400">
                        Profile
                    </button>

                    <button className=" tracking-wide text-white py-1 text-left px-2 hover:bg-violet-900 transition-colors duration-400">
                        Settings
                    </button>

                    <button className="font-medium tracking-wide text-white py-1 text-left px-2 hover:hover:bg-violet-900 transition-colors duration-400">
                        Log out
                    </button>
            </div>
            </div>
            
            )}

</div>


    );
}

export default Profilebutton;