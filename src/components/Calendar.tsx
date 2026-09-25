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
        <div className="flex h-full min-h-[300px] w-full min-w-0 flex-col rounded-3xl border border-white/90 bg-indigo-950/40 p-4 sm:p-5">
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    aria-label="Previous month"
                    onClick={previousMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-3xl leading-none text-white transition-colors hover:bg-white/10 hover:text-purple-300 sm:h-9 sm:w-9"
                >
                    ‹
                </button>

                <h2 className="text-center text-base font-bold tracking-wider text-white sm:text-lg">
                    {currentDate
                        .toLocaleString("default", {
                            month: "long",
                        })
                        .toUpperCase()}{" "}
                    {year}
                </h2>

                <button
                    type="button"
                    aria-label="Next month"
                    onClick={nextMonth}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-3xl leading-none text-white transition-colors hover:bg-white/10 hover:text-purple-300 sm:h-9 sm:w-9"
                >
                    ›
                </button>
            </div>

            <div className="mt-3 grid grid-cols-7 text-center text-[11px] font-semibold text-white/60 sm:text-xs">
                {[
                    "SUN",
                    "MON",
                    "TUE",
                    "WED",
                    "THU",
                    "FRI",
                    "SAT",
                ].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="mt-2 grid grid-cols-7 gap-y-1">
                {Array.from({ length: firstDay }).map((_, index) => (
                    <div key={`empty-${index}`} />
                ))}

                {days.map((day) => {
                    const today = new Date();
                    const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                    return (
                        <button
                            type="button"
                            key={day}
                            onClick={() => setSelectedDate(day)}
                            aria-current={isToday ? "date" : undefined}
                            className={`flex aspect-square w-full max-w-8 items-center justify-center justify-self-center rounded-full bg-blue-900 text-xs text-white transition-colors sm:text-sm ${
                                selectedDate === day
                                    ? "bg-purple-500"
                                    : "hover:bg-purple-500/50"
                            } ${
                                isToday
                                    ? "font-extrabold ring-2 ring-cyan-300 ring-offset-2 ring-offset-indigo-950"
                                    : ""
                            }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>

            {selectedDate !== null && (
                <div className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-center text-xs text-white/80">
                    Selected date:
                    <p className="mt-1 text-sm font-bold text-purple-300">
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