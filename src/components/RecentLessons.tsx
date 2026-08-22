function RecentLessons() {
    return (
        <div className="
            w-[340px]
            mt-15
            rounded-3xl
            border
           bg-indigo-950/40 
           border-white/90
            overflow-hidden
        ">

            {/* Header */}
            <div className="
                border-b
                border-white/40
                py-3
                text-center
            ">
                <h2 className="
                    text-white
                    font-bold
                    tracking-widest
                    text-xl
                ">
                    RECENT LESSONS
                </h2>
            </div>


            {/* Empty state */}
            <div className="
                min-h-[170px]
                flex
                flex-col
                items-center
                justify-center
                px-6
                text-center
            ">

                <p className="
                    text-white/80
                    font-semibold
                    text-lg
                ">
                    No recent lessons
                </p>

                <p className="
                    text-white/50
                    text-sm
                    mt-2
                ">
                    Your recently reviewed lessons will appear here.
                </p>

            </div>

        </div>
    );
}

export default RecentLessons;