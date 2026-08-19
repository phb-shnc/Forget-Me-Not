import Notif_button from "./Notif_button";
import Profilebutton from "./Profilebutton";
import Searchbar from "./Searchbar";

import { Link } from "react-router-dom";
// import { constant } from "firebase/firestore/pipelines";


function Navbarhome(){
    
    const formatteDate = new Date().toLocaleDateString("en-US" ,{
        month:"numeric",
        day:"numeric",
        year:"numeric",

    });

    return(
        <>
        <nav className="
                bg-white/20
                backdrop-blur-3xl
                border
                border-white
                fixed
                top-2
                md:top-4
                lg:top-0
                left-1/2
                -translate-x-1/2

                md:w-[100%]
                w-[95%]
                max-w-[1800px]
                gap-23

                justify-between
                flex
                items-center
                

                px-4
                sm:px-6
                md:px-10
                lg:px-12

                rounded-b-3xl

                py-2

                md:py-2

               
                


                z-50
            ">
            
                <div className="flex gap-10">
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

                 <div className=" 
                        flex
                        relative
                        gap-2
                        md:gap-6
                        lg:gap-8
                        text-[29%]
                        md:text-xl
                        items-center
                       
                        lg:text-[15px]

                        text-white
                        font-medium
                        
                    ">
                <Link to="/Dashboard" >Dashboard</Link>
                <Link to="/TopicNlessons">Topics & Lessons</Link>
                <Link to="/Reviewsession">Review Session</Link>
            </div>

            </div>


            <div className="flex gap-5 ">
                <Notif_button />
                <Searchbar />
                <p className="text-white font-medium flex items-center">Username</p>
                <Profilebutton />
                <p className="text-white flex font-bold items-center">{formatteDate}</p>
</div>
        
            

            </nav>
        </>
    );
}

export default Navbarhome;