function Login() {
    return(

  <div className="relative
         bg-indigo-950 
         min-h-screen
         flex
         justify-center
         items-center
         p-9
         ">
           <div className="relative  bg-white w-[890px] rounded-2xl max-w-full min-h-[460px] shadow-xl shadow-yellow-100/40 shadow-">
            <div
                    className="
                        absolute
                        top-0
                        h-full
                        transition-all
                        duration-700
                        ease-in-out
                        left-0
                        w-1/2
                        opacity-100
                        z-10
                        
                    "
                    >
                        <form className="bg-white gap-2 flex flex-col rounded-2xl justify-center items-center px-10 h-full ">
                            <h1 className="text-2xl font-bold">Sign In</h1>
                            <p className="font-light text-sm text-left">Email</p>
                            
                            <input type="email" placeholder="juancruz@gmail.com" 
                                    className="border 
                                    border-b-blue-900 
                                    px-9 
                                    py-1 
                                    rounded-xl
                                    "/>

                            <input type="password" placeholder="Password" 
                                    className="border 
                                    border-b-blue-900 
                                    px-9 
                                    py-1 
                                    rounded-xl"/>

                            <a href="#" className="bg-blue-950 mt-8
                            text-l text-amber-50 py-2 px-6 shadow-xl rounded-2xl">Sign In</a>
                          
                        </form>
            </div>

            <div
            className="
                absolute
                top-0
                h-full
                transition-all
                duration-700
                ease-in-out
                left-0
                w-1/2
                z-20
            "
            >

            </div>

            </div>
    </div>

         
    );
}
export default Login;