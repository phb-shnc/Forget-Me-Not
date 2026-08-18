import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";

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

        <button className="
        relative
        text-center 
        text-4xl 
        text-amber-50" onClick={() => setisOpen(!isOpen)}> 
            
            <IoMdNotificationsOutline />
            {unreadcount > 0 && (<span className="absolute top-1 rounded-full text-sm bg-red-600 w-3 h-3"></span>)}
            </button>
        

        
        {isOpen && <> <div className="absolute border
                            border-violet-900
                            bg-indigo-900
                            h-60
                            w-100
                            right-1
                            shadow-2xl
                            shadow-black
                        
                            overflow-y-auto
                            scrollbar-none
                            rounded-xl">
            {notif.map((notif) => <div 
            key={notif.id}
            className={`rounded-l
            p-4
           
            shadow-xl
            shadow
            m-2.5
            rounded-2xl
            
            
            
            ${notif.unread ? "bg-purple-900" : "bg-white/5"}`}>
                <div className="flex justify-between px-3">
                    <h3 className="font-semibold text-white"> 
                        {notif.title}
                    </h3>

                
                 {notif.unread && <span className="h-2 w-2 bg-indigo-400 rounded-full self-center" />}   
                
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