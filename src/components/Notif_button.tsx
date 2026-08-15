import { IoMdNotificationsOutline } from "react-icons/io";

function Notif_button() {
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



    return (

        <div></div>
    );
}

export default Notif_button;