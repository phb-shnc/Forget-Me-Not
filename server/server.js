import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());

app.get("/api/quote", async (req, res) => {
    try {
        const response = await fetch(
            "https://api.api-ninjas.com/v2/quoteoftheday",
            {
                headers: {
                    "X-Api-Key": process.env.API_NINJAS_KEY,
                },
            }
        );

        if (!response.ok) {
            throw new Error("API Ninjas request failed");
        }

        const data = await response.json();

        res.json(data[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Unable to fetch today's quote",
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});