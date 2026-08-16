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
    
        <div className="relative  ">

        <button onClick ={() => setisOpen(!isOpen)} 
        className="
        relative
        text-center 
        text-4xl 
        text-amber-50"> {
        }
            
            <IoMdNotificationsOutline />
            {unreadcount > 0 && (<span className="absolute top-1 rounded-full text-sm bg-red-600 w-3 h-3"></span>)}
            </button>


    </div>
    );
}

export default Notif_button;