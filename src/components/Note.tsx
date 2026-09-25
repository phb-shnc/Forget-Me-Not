import {useEffect, useState } from "react";

function NoteToSelf() {
   const [note, setNote] = useState(() => {
    return localStorage.getItem("notesnia") ?? "";
   });

   useEffect(() => {localStorage.setItem("notesnia", note);},[note]);

return (
    <div className="flex h-full min-h-[270px] w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/90 bg-indigo-950/40">
        <div className="flex min-h-0 flex-1 flex-col">
            <h3 className="border-b border-white/40 p-3 text-center text-lg font-bold text-amber-50 sm:text-xl">
                Notes
            </h3>

            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add your notes here"
                className="min-h-[200px] w-full flex-1 resize-none overflow-y-auto rounded-b-3xl border-none bg-transparent p-4 text-base leading-relaxed text-amber-50 outline-none placeholder:text-amber-50/40 sm:p-5"
            />
        </div>
    </div>
    );
}

export default NoteToSelf;
