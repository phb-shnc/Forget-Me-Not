function RecentLessons() {
    return (
        <div className="flex h-full min-h-[270px] w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/90 bg-indigo-950/40">
            <div className="border-b border-white/40 px-4 py-3 text-center">
                <h2 className="text-base font-bold tracking-widest text-white sm:text-lg">
                    RECENT LESSONS
                </h2>
            </div>

            <div className="flex min-h-[210px] flex-1 flex-col items-center justify-center px-6 py-8 text-center">
                <p className="text-base font-semibold text-white/80 sm:text-lg">
                    No recent lessons
                </p>
                <p className="mt-2 max-w-[24rem] text-sm leading-relaxed text-white/50">
                    Your recently reviewed lessons will appear here.
                </p>
            </div>
        </div>
    );
}

export default RecentLessons;