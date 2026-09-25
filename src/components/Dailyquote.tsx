import { useEffect, useState } from "react";

function Dailyquote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

useEffect(() => {
    const fetchQuote = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/quote`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            const data = await response.json();

            setQuote(data.quote);
            setAuthor(data.author);
        } catch (error) {
            console.error(error);
            setError("Unable to load today's quote.");
        } finally {
            setLoading(false);
        }
    };

    fetchQuote();
}, []);

    return (
        <section className="flex h-full min-h-[270px] w-full min-w-0 items-center justify-center">
            <div className="flex aspect-square w-full max-w-[250px] flex-col justify-center overflow-hidden rounded-full border border-white/90 bg-indigo-950/40 p-6 text-center text-white sm:p-7">
                {loading ? (
                    <p className="text-sm font-medium text-white/70">
                        Loading today&apos;s quote...
                    </p>
                ) : error ? (
                    <p className="text-sm font-medium text-red-200">{error}</p>
                ) : (
                    <>
                        <h2 className="text-xs font-bold uppercase tracking-widest">
                            Quote of the day
                        </h2>
                        <p className="mt-3 border-y border-white/20 py-3 text-sm font-semibold leading-relaxed">
                            “{quote}”
                        </p>
                        <p className="mt-2 text-right text-xs text-white/70">
                            — {author}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}

export default Dailyquote;