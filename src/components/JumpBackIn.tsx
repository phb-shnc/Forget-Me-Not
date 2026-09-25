import { Link } from "react-router-dom";

interface ReviewRev{
    subject: string,
    topics: string,
    percent: number,
    time: string,
}

interface JumpBackInprops{
    review: ReviewRev,
}

function JumpBackIn({ review }: JumpBackInprops) {
    return (
        <article className="flex h-full min-h-[270px] w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/90 bg-indigo-950/40 text-white">
            <h3 className="border-b border-white/30 px-4 py-3 text-center text-lg font-bold tracking-wide sm:text-xl">
                Jump back in
            </h3>

            <div className="grid flex-1 grid-cols-1 items-center gap-4 p-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5 sm:p-5">
                <div
                    aria-hidden="true"
                    className="aspect-square w-24 rounded-full border-[6px] border-white/80 sm:w-28"
                />

                <div className="min-w-0 rounded-2xl border border-white/50 bg-indigo-950/40 p-4">
                    <p className="break-words border-b border-white/20 pb-2 text-center text-lg font-medium sm:text-xl">
                        {review.subject}
                    </p>
                    <p className="mt-2 break-words text-sm text-white/90 sm:text-base">
                        {review.topics}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-3 text-xs text-white/70">
                        <p>{review.time}</p>
                        <p>12 recall questions</p>
                    </div>

                    <Link
                        to="/topicNlessons"
                        className="mx-auto mt-4 flex w-fit rounded-full border border-white/40 px-5 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
                    >
                        Start Now!
                    </Link>
                </div>
            </div>
        </article>
    );
}
export default JumpBackIn;