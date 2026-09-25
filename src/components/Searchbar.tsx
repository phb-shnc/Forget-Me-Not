import { useState } from "react";

function Searchbar() {
    const topics = [
        "Calculus",
        "Data Structures",
        "Web Development",
        "Object Oriented",
        "Ethics"
    ];

    const [search, setSearch] = useState("");

    const filteredTopics = topics.filter((topic) =>
        topic.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative flex items-center">

            <input
                aria-label="Search"
                className="w-36 rounded-full bg-white px-3 py-2 text-sm text-[#00002B] shadow-amber-50 shadow-sm outline-none ring-amber-50 focus:ring-2 sm:w-40"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
                <div className="
                    absolute
                    top-full
                    left-0
                    mt-2
                    w-full
                    bg-white
                    rounded-xl
                    shadow-lg
                    overflow-hidden
                    z-50
                ">
                    {filteredTopics.length > 0 ? (
                        filteredTopics.map((topic) => (
                            <div
                                key={topic}
                                className="
                                    px-4
                                    py-1
                                    hover:bg-purple-100
                                    cursor-pointer
                                "
                            >
                                {topic}
                            </div>
                        ))
                    ) : (
                        <p className="px-4 py-2 text-red-500">
                            No results found
                        </p>
                    )}
                </div>
            )}

        </div>
    );
}

export default Searchbar;