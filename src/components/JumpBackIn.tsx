import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface ReviewRev{
    subject: string,
    topics: string,
    percent: number,
    time: string,
}

interface JumpBackInprops{
    review: ReviewRev,
}

function JumpBackIn({review}: JumpBackInprops ){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/TopicsNlessons");

};

return(
 <div className="w-[570px]
            h-[220px]
            mt-5
            ml-30
            mb-10
            rounded-xl
            
            border
           
            
           
            bg-indigo-950/40 
            border-white/90
            overflow-hidden
            text-white
            relative" onClick={handleClick}>
    <div>
        <div className="text-white">
            <h3 className="border-b text-2xl text-center py-1 " >Jump back on</h3>

            

            <div className="flex justify-evenly p-2 gap-0  ">

                <p className="h-40 w-40 border border-8 self-center rounded-full"></p>

<div className="
            bg-indigo-950/40 border-white/50 border w-80 h-40 rounded-2xl p-3 self-center">
            <p className="border-b text-2xl font-medium flex items-center justify-center">{review.subject}</p>
            <p className="text-[20px] mt-3">{review.topics}</p>

            <div className="flex text-[13px] justify-between opacity-80 border-b py-2">
            <p>{review.time}</p>
            <div >12 recall questions</div>
            </div>
            <Link to="/Dashboard" className="p- relative  mt- flex flex-col items-center justify-center
            after:absolute
            after:w-1/4
            after:h-[2.5px]
            after:rounded-full
            after:-bottom-[0.5px]
            after:bg-white
            
            "> Start Now!</Link>
</div>
</div>
        </div>
    </div>
 </div>

);

}
export default JumpBackIn;