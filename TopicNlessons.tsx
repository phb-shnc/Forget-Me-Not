import Navbarhome from "../components/Navbarhome";
import { auth } from "../firebaseConfig";
import { useEffect, useState, type FormEvent } from "react";
import {
    LiaBookSolid,
    LiaPenSolid,
    LiaTimesSolid,
    LiaTrashAltSolid,
} from "react-icons/lia";

interface Topic {
    id: number;
    title: string;
    color: string;
    lessons: number;
}

const DEFAULT_COVER_COLOR = "#4338ca";
const TOPICS_STORAGE_KEY = "forget-me-not.topics";

function getTopicsStorageKey() {
    return `${TOPICS_STORAGE_KEY}:${auth.currentUser?.uid ?? "guest"}`;
}

const initialTopics: Topic[] = [
    {
        id: 1,
        title: "Calculus",
        color: "#312e81",
        lessons: 8,
    },
];

function isStoredTopic(value: unknown): value is Topic {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const topic = value as Partial<Topic>;
    return (
        typeof topic.id === "number" &&
        typeof topic.title === "string" &&
        typeof topic.color === "string" &&
        typeof topic.lessons === "number"
    );
}

function loadTopics(storageKey: string) {
    if (typeof window === "undefined") {
        return initialTopics;
    }

    try {
        const storedTopics = window.localStorage.getItem(storageKey);
        if (storedTopics === null) {
            return initialTopics;
        }

        const parsedTopics: unknown = JSON.parse(storedTopics);
        return Array.isArray(parsedTopics)
            ? parsedTopics.filter(isStoredTopic)
            : initialTopics;
    } catch {
        return initialTopics;
    }
}

function TopicNlessons() {
    const storageKey = getTopicsStorageKey();
    const [topics, setTopics] = useState<Topic[]>(() => loadTopics(storageKey));
    const [isTopicDialogOpen, setIsTopicDialogOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
    const [topicToDelete, setTopicToDelete] = useState<Topic | null>(null);
    const [title, setTitle] = useState("");
    const [coverColor, setCoverColor] = useState(DEFAULT_COVER_COLOR);
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(topics));
        } catch {
            return;
        }
    }, [storageKey, topics]);

    useEffect(() => {
        if (!isTopicDialogOpen && !topicToDelete) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key !== "Escape") {
                return;
            }

            if (topicToDelete) {
                setTopicToDelete(null);
                return;
            }

            setIsTopicDialogOpen(false);
            setEditingTopic(null);
            setTitle("");
            setCoverColor(DEFAULT_COVER_COLOR);
            setError("");
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isTopicDialogOpen, topicToDelete]);

    const totalLessons = topics.reduce((total, topic) => total + topic.lessons, 0);
    const topicCountLabel = `${topics.length} ${topics.length === 1 ? "Topic" : "Topics"}`;
    const lessonCountLabel = `${totalLessons} ${totalLessons === 1 ? "Lesson" : "Lessons"}`;

    const resetTopicForm = () => {
        setTitle("");
        setCoverColor(DEFAULT_COVER_COLOR);
        setError("");
        setEditingTopic(null);
    };

    const openNewTopic = () => {
        setIsEditMode(false);
        resetTopicForm();
        setIsTopicDialogOpen(true);
    };

    const openEditTopic = (topic: Topic) => {
        setEditingTopic(topic);
        setTitle(topic.title);
        setCoverColor(topic.color);
        setError("");
        setIsTopicDialogOpen(true);
    };

    const closeTopicDialog = () => {
        setIsTopicDialogOpen(false);
        resetTopicForm();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) {
            setError("Enter a title for this topic.");
            return;
        }

        if (editingTopic) {
            setTopics((currentTopics) =>
                currentTopics.map((topic) =>
                    topic.id === editingTopic.id
                        ? {
                              ...topic,
                              title: trimmedTitle,
                              color: coverColor,
                          }
                        : topic,
                ),
            );
        } else {
            setTopics((currentTopics) => {
                const nextId = currentTopics.reduce(
                    (highestId, topic) => Math.max(highestId, topic.id),
                    0,
                ) + 1;

                return [
                    ...currentTopics,
                    {
                        id: nextId,
                        title: trimmedTitle,
                        color: coverColor,
                        lessons: 0,
                    },
                ];
            });
        }

        closeTopicDialog();
    };

    const confirmDelete = () => {
        if (!topicToDelete) {
            return;
        }

        setTopics((currentTopics) =>
            currentTopics.filter((topic) => topic.id !== topicToDelete.id),
        );
        setTopicToDelete(null);
    };

    return (
        <>
            <Navbarhome />

            <div className="min-h-screen bg-indigo-950">
                <div className="px-6 py-30 sm:px-12 lg:px-40">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-gray-400">
                            {topicCountLabel} {lessonCountLabel}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={openNewTopic}
                                aria-haspopup="dialog"
                                className="cursor-pointer rounded-2xl bg-indigo-300 px-5 py-2 text-indigo-950 transition-colors duration-250 hover:bg-indigo-400"
                            >
                                + New Topic
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditMode((currentMode) => !currentMode)}
                                aria-pressed={isEditMode}
                                className={`cursor-pointer rounded-2xl border px-5 py-2 transition-colors duration-250 ${
                                    isEditMode
                                        ? "border-indigo-300 bg-indigo-300 text-indigo-950 hover:bg-indigo-400"
                                        : "border-white/30 text-white hover:border-indigo-300 hover:bg-white/10"
                                }`}
                            >
                                {isEditMode ? "Done Editing" : "Edit Topics"}
                            </button>
                        </div>
                    </div>

                    {isEditMode && (
                        <p className="mt-4 text-sm text-indigo-200">
                            Choose Edit or Delete for any topic folder.
                        </p>
                    )}

                    <div className="mt-9 flex w-full flex-row flex-wrap items-start gap-4">
                        {topics.map((topic) => (
                            <div
                                key={topic.id}
                                className="w-60 overflow-hidden rounded-2xl border border-white bg-indigo-900 text-white transition duration-500 hover:scale-102"
                            >
                                <div
                                    className="flex h-24 items-center justify-between px-4 text-4xl"
                                    style={{ backgroundColor: topic.color }}
                                >
                                    <LiaBookSolid />
                                    <h2 className="text-center text-sm">{topic.lessons === 0 ? "0%" : "100%"}</h2>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{topic.title}</h3>
                                    <h3 className="text-sm font-light">
                                        {topic.lessons} {topic.lessons === 1 ? "lesson" : "lessons"}
                                    </h3>

                                    {isEditMode && (
                                        <div className="mt-4 flex gap-2 border-t border-white/10 pt-3">
                                            <button
                                                type="button"
                                                onClick={() => openEditTopic(topic)}
                                                aria-label={`Edit ${topic.title}`}
                                                className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl border border-indigo-300/50 px-3 py-2 text-sm text-indigo-100 transition-colors hover:bg-indigo-300 hover:text-indigo-950"
                                            >
                                                <LiaPenSolid aria-hidden="true" />
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setTopicToDelete(topic)}
                                                aria-label={`Delete ${topic.title}`}
                                                className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl border border-red-300/50 px-3 py-2 text-sm text-red-100 transition-colors hover:bg-red-300 hover:text-red-950"
                                            >
                                                <LiaTrashAltSolid aria-hidden="true" />
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isTopicDialogOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4"
                    role="presentation"
                    onClick={closeTopicDialog}
                >
                    <div
                        className="w-full max-w-md rounded-3xl border border-white/20 bg-indigo-900 p-6 text-white shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="topic-dialog-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <h2 id="topic-dialog-title" className="text-2xl font-bold">
                                    {editingTopic ? "Edit topic" : "Create a new topic"}
                                </h2>
                                <p className="mt-1 text-sm text-indigo-200">
                                    {editingTopic
                                        ? "Update the title or cover color for this topic."
                                        : "Add a title and choose a color for its cover."}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={closeTopicDialog}
                                aria-label={editingTopic ? "Close edit topic dialog" : "Close new topic dialog"}
                                className="cursor-pointer rounded-full p-2 text-indigo-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <LiaTimesSolid />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="topic-title" className="text-sm font-semibold">
                                    Topic title
                                </label>
                                <input
                                    id="topic-title"
                                    type="text"
                                    value={title}
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                        setError("");
                                    }}
                                    placeholder="e.g. Algebra"
                                    required
                                    aria-invalid={Boolean(error)}
                                    aria-describedby={error ? "topic-title-error" : undefined}
                                    autoFocus
                                    className="rounded-xl border border-white/20 bg-indigo-950 px-4 py-3 text-white outline-none placeholder:text-indigo-300 focus:border-indigo-300"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="cover-color" className="text-sm font-semibold">
                                    Cover color
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        id="cover-color"
                                        type="color"
                                        value={coverColor}
                                        onChange={(event) => setCoverColor(event.target.value)}
                                        className="h-12 w-12 cursor-pointer rounded-lg border border-white/20 bg-transparent p-1"
                                    />
                                    <span
                                        className="rounded-xl border border-white/20 px-4 py-3 text-sm"
                                        style={{ backgroundColor: coverColor }}
                                    >
                                        {coverColor}
                                    </span>
                                </div>
                            </div>

                            {error && (
                                <p id="topic-title-error" role="alert" className="text-sm text-red-300">
                                    {error}
                                </p>
                            )}

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={closeTopicDialog}
                                    className="cursor-pointer rounded-2xl px-5 py-2 text-indigo-200 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-2xl bg-indigo-300 px-5 py-2 text-indigo-950 transition-colors hover:bg-indigo-400"
                                >
                                    {editingTopic ? "Save changes" : "Save topic"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {topicToDelete && (
                <div
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4"
                    role="presentation"
                    onClick={() => setTopicToDelete(null)}
                >
                    <div
                        className="w-full max-w-md rounded-3xl border border-white/20 bg-indigo-900 p-6 text-white shadow-2xl"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="delete-topic-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2 id="delete-topic-title" className="text-2xl font-bold">
                            Delete this topic?
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-indigo-200">
                            The topic folder <strong className="text-white">{topicToDelete.title}</strong> will be permanently removed. This action cannot be undone.
                        </p>
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setTopicToDelete(null)}
                                className="cursor-pointer rounded-2xl px-5 py-2 text-indigo-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={confirmDelete}
                                className="cursor-pointer rounded-2xl bg-red-300 px-5 py-2 text-red-950 transition-colors hover:bg-red-400"
                            >
                                Delete topic
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default TopicNlessons;
