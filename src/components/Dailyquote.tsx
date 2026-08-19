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
        <div>
            <p>"{quote}"</p>
            <p>— {author}</p>
        </div>
    );
}

export default Dailyquote;