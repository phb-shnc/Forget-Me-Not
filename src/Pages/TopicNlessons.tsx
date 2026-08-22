import Navbarhome from "../components/Navbarhome";
import { useState } from "react";
import { LiaBookSolid } from "react-icons/lia";

    interface lessons{ topics: string, qty:number, };
    interface Topicprops{ Topic:lessons, }


function TopicNlessons() {
 const [isTopic, setTopic] = useState(false);
    return (
        <>
            <Navbarhome />

            <div className="bg-indigo-950 min-h-screen">
                <div className="px-40 ">
                    <div className="pt-30 flex justify-between">
                        <p className="text-gray-400">5 Topics 6 Lessons</p>
                        <button className="bg-indigo-300 p-1 px-5 py-2 rounded-2xl">+ New Topic</button>
                    </div>

                    <div className="bg-indigo-900 flex flex-col gap-4 h-40 py-3 w-60 mt-9 rounded-2xl border border-white text-white">
                         <div className="flex mt-3 px-4 text-4xl w-full justify-between ">
                            <LiaBookSolid />

                            <h2 className="text-sm text-center">100%</h2>
                         </div>
                         <div className="px-5 ">
                            <h3 className="text-l font-bold">Calculus</h3>
                            <h3 className="text-sm font-light">8 lessons</h3>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TopicNlessons;