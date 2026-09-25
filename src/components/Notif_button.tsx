import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
// import { isolate } from "three/src/nodes/TSL.js";

function Notif_button() {
    const [isOpen, setisOpen] = useState(false);

    const notif=[{
        id: 1,
            title: "Review Reminder",
            message: "You have a Calculus review scheduled today.",
            time: "5 min ago",
            unread: true,
        },
        {
            id: 2,
            title: "Great job!",
            message: "You completed your Web Development review.",
            time: "1 hour ago",
            unread: true,
        },
        {
            id: 3,
            title: "Upcoming Review",
            message: "Data Structures is scheduled for tomorrow.",
            time: "Yesterday",
            unread: false,
        },
    ]

    const unreadcount = notif.filter((notif) => notif.unread).length


    return (
    

        <div className="relative">

        {isOpen && <><div className="h-10 rounded-full w-10 z-20 absolute bg-white/50 top-[0px] right-[-1.5px] shadow-black shadow-2xl"></div></>}
        <button
            type="button"
            aria-label="Toggle notifications"
            className="relative z-30 flex h-9 w-9 items-center justify-center rounded-full text-3xl text-amber-50 transition-colors hover:bg-white/10"
            onClick={() => setisOpen(!isOpen)}
        >
            <IoMdNotificationsOutline />

            {unreadcount > 0 && (
                <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-red-600 ring-2 ring-[#00002B]" />
            )}
        </button>
        

        
            {isOpen && <> <div className="absolute right-0 top-full mt-2 h-60 w-80 max-w-[calc(100vw-2rem)] border
                            border-violet-900
                            bg-indigo-900
                            shadow-2xl
                            shadow-black
                        
                            overflow-y-auto
                            rounded-xl">

                                <h3 className="px-3 p-2 text-xl font-semibold tracking-wide text-white/85 shadow ">Notifications</h3>
            {notif.map((notif) => <div 
            key={notif.id}
            className={`rounded-l
            p-4
           
            shadow-xl
            shadow
            m-2.5
            rounded-2xl
            
            
            
            ${notif.unread ? "bg-purple-900" : "bg-white/5"}`}>
                <div className="flex  gap-2 px-3">
                    {notif.unread && <span className="h-2 w-2  bg-gradient-to-br from-indigo-400 to-red-700 rounded-full self-center" />}  
                   
                    <h3 className="font-semibold text-white"> 
                        {notif.title}
                    </h3>

                
                  
                
                </div>

                <div className="flex flex-col justify-between px-3 text-[12px]">
                <p className="text-white/30">{notif.time}</p>
                 <p className="text-white/80">{notif.message}</p>

</div>
            </div>)}
        
                  </div></>}


    </div>
    );
}

export default Notif_button;