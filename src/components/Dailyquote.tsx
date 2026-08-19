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

    if (loading) {
        return <p>Loading today's quote...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="">
        <div className="w-[220px]
            h-[220px]
            mt-5
            ml-20
            mb-10
            rounded-full
            p-9
            border
            text-center
            flex
            flex-col
            justify-center
            bg-indigo-950/40 
            border-white/90
            overflow-hidden
            text-white
            text-[12px]
            ">
            <p className="font-bold text-center ">Quote of the day</p>
            <p className="border-b-gray-700 border-t mt-2 p-2 font-semibold">"{quote}"</p>
            <p className="text-[10px] text-right">— {author}</p>
        </div>
        </div>
    );
}

export default Dailyquote;