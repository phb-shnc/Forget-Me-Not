import { useState } from "react";

function Calendar() {
    // The month currently being displayed
    const [currentDate, setCurrentDate] = useState(new Date());

    // The date the user clicked
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    // Get current month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Find what day of the week the 1st falls on
    const firstDay = new Date(year, month, 1).getDay();

    // Find how many days are in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Create array of dates
    const days = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
    );

    // Go to previous month
    const previousMonth = () => {
        setCurrentDate(
            new Date(year, month - 1, 1)
        );

        // Reset selected date
        setSelectedDate(null);
    };

    // Go to next month
    const nextMonth = () => {
        setCurrentDate(
            new Date(year, month + 1, 1)
        );

        // Reset selected date
        setSelectedDate(null);
    };

    return (
        <div className="w-[340px] m-20 rounded-3xl border bg-indigo-950/40 border-white/90 p-5">

            {/* Calendar header */}
            <div className="flex items-center justify-between">

                <button
                    onClick={previousMonth}
                    className="text-4xl text-white hover:text-purple-300"
                >
                    ‹
                </button>

                <h2 className="text-white font-bold tracking-widest">
                    {currentDate
                        .toLocaleString("default", {
                            month: "long",
                        })
                        .toUpperCase()}{" "}
                    {year}
                </h2>

                <button
                    onClick={nextMonth}
                    className="text-4xl text-white hover:text-purple-300"
                >
                    ›
                </button>

            </div>


            {/* Weekdays */}
            <div className="grid grid-cols-7 text-center mt-2">

                {[
                    "SUN",
                    "MON",
                    "TUE",
                    "WED",
                    "THU",
                    "FRI",
                    "SAT",
                ].map((day) => (
                    <div
                        key={day}
                        className="text-white/60 font-semibold text-sm"
                    >
                        {day}
                    </div>
                ))}

            </div>


            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-0 mt-1">

                {/* Empty spaces before the first day */}
                {Array.from({ length: firstDay }).map((_, index) => (
                    <div key={`empty-${index}`} />
                ))}


                {/* Dates */}
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`
                            h-9
                            w-9
                            rounded-full
                            text-white
                            transition

                            ${
                                selectedDate === day
                                    ? "bg-purple-500"
                                    : "hover:bg-purple-500/50"
                            }
                        `}
                    >
                        {day}
                    </button>
                ))}

            </div>


            {/* Selected date */}
            {selectedDate !== null && (
                <div className="mt-5 text-center text-white">
                    Selected date:

                    <p className="font-bold text-purple-300">
                        {currentDate.toLocaleString("default", {
                            month: "long",
                        })}{" "}
                        {selectedDate}, {year}
                    </p>
                </div>
            )}

        </div>
    );
}

export default Calendar;