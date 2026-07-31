import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Algorithm from "./components/Algorithm";
import Process from "./components/Process";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div>

      <div className="
    relative
    width-auto
    max-w-l
                min-h-screen
                bg-gradient-to-br
                from-blue-950
                to-sky-950
                z-10
            "> 
       <div
  className="
    absolute
    top-[5%]
    left-[25%]
    -translate-x-1/2
    w-auto
    h-auto
    rounded-full
    bg-blue-900
    blur-[180px]
    opacity-80
  "
/>

<div
  className="
    absolute
    top-[15%]
    left-[-8%]
    w-[clamp(250px,30vw,500px)]
    h-[clamp(350px,40vw,650px)]
    rounded-full
    bg-orange-300
    blur-[180px]
  "
/>

<div
  className="
    absolute
    top-[20%]
    left-[55%]
    -translate-x-1/2
    w-[clamp(350px,40vw,700px)]
    h-[clamp(350px,40vw,700px)]
    rounded-full
    bg-purple-500
    blur-[250px]
  "
/>

<div
  className="
    absolute
    top-[2%]
    right-[5%]
    w-[clamp(250px,30vw,500px)]
    h-[clamp(500px,40vw,700px)]
    rounded-full
    bg-white
    blur-[220px]
  "
/>

<div
  className="
    absolute
    top-[45%]
    right-[8%]
    w-[clamp(250px,30vw,450px)]
    h-[clamp(500px,40vw,700px)]
    rounded-full
    bg-white/15
    blur-[250px]
  "
/>

<div
  className="
    absolute
    top-[72%]
    right-[10%]
    w-[clamp(250px,30vw,500px)]
    h-[clamp(450px,35vw,650px)]
    rounded-full
    bg-blue-700
    blur-[220px]
  "
/>

<div
  className="
    absolute
    top-[58%]
    left-[52%]
    -translate-x-1/2
    w-[clamp(300px,35vw,600px)]
    h-[clamp(300px,35vw,600px)]
    rounded-full
    bg-orange-300
    blur-[260px]
  "
/>

<div
  className="
    absolute
    top-[42%]
    left-[-5%]
    w-[clamp(250px,30vw,500px)]
    h-[clamp(450px,40vw,700px)]
    rounded-full
    bg-green-300
    blur-[280px]
  "
/>

<div
  className="
    absolute
    top-[78%]
    left-[-5%]
    w-[clamp(300px,35vw,600px)]
    h-[clamp(400px,35vw,650px)]
    rounded-full
    bg-purple-500
    blur-[250px]
  "

/>

<div
  className="
    absolute
    bottom-[5%]
    left-[50%]
    -translate-x-1/2
    w-[clamp(350px,40vw,700px)]
    h-[clamp(350px,40vw,700px)]
    rounded-full
    bg-purple-500
    blur-[280px]
  "
/>


      <Navbar />
      <Hero />
      <Features />
      <Process />
<Algorithm />
<Aboutus />  

    </div>
    </div>
  );
}

export default App;