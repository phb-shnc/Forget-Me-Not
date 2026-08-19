import { use, useEffect, useState } from "react";
import type { PiPlaceholder } from "react-icons/pi";

function NoteToSelf() {
   const [note, setNote] = useState(() => {
    return localStorage.getItem("notesnia") ?? "";
   });

   useEffect(() => {localStorage.setItem("notesnia", note);},[note]);

return (

    //container
    <div className="            
            mt-20
            rounded-3xl
            border
            bg-indigo-950/40 
            border-white/90
            overflow-hidden 
            w-[340px]
            min-h-[223px]">

                <div>
                    <h3 className="text-amber-50 
                                    text-center 
                                    p-2 
                                    font-bold 
                                    text-xl
                                    border-b ">
                        
                        Notes</h3>

                    <textarea 
                        value ={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add your notes here"
                    
                        className="w-[340px] 
                                    fixed 
                                    h-40 
                                    resize-none 
                                    rounded-xl 
                                    overflow-hidden 
                                    border-none 
                                    outline-0 
                                    p-5 
                                    text-[12px] 
                                    text-amber-50 
                                    placeholder:text-xl"/>
                </div>
                
            </div>
    );
}

export default NoteToSelf;
