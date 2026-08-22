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
                className="
                    bg-white
                    rounded-full
                    p-1
                    px-3
                    shadow-amber-50
                    shadow-sm
                    
                "
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