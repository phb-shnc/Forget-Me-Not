import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Algorithm from "./components/Algorithm";
import Process from "./components/Process";
import Aboutus from "./components/Aboutus";

function App() {
  const glow = `
            absolute
            rounded-full
            blur-[220px]
  `;

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-gradient-to-br
        from-blue-950
        to-sky-950
      "
    >
      {/* Background Glow Layer */}
      <div className="absolute inset-0  pointer-events-none">

        <div
          className={`${glow}
            top-[5%]
            left-[25%]
            -translate-x-1/2
            w-[clamp(300px,35vw,650px)]
            h-[clamp(300px,35vw,650px)]
            bg-blue-900/80`}
        />

        <div
          className={`${glow}
            top-[15%]
            left-[-8%]
            w-[clamp(250px,30vw,500px)]
            h-[clamp(350px,40vw,650px)]
            bg-orange-300/40`}
        />

        <div
          className={`${glow}
            top-[20%]
            left-[55%]
            -translate-x-1/2
            w-[clamp(350px,40vw,700px)]
            h-[clamp(350px,40vw,700px)]
            bg-purple-500/70
            blur-[250px]`}
        />

        <div
          className={`${glow}
            top-[18%]
            right-[-10%]
            w-[clamp(300px,35vw,600px)]
            h-[clamp(500px,45vw,750px)]
            bg-green-300/30`}
        />

        <div
          className={`${glow}
            top-[2%]
            right-[5%]
            w-[clamp(250px,30vw,500px)]
            h-[clamp(500px,40vw,700px)]
            bg-white/20`}
        />

        <div
          className={`${glow}
            top-[45%]
            right-[8%]
            w-[clamp(250px,30vw,450px)]
            h-[clamp(500px,40vw,700px)]
            bg-white/15
            blur-[250px]`}
        />

        <div
          className={`${glow}
            top-[72%]
            right-[10%]
            w-[clamp(250px,30vw,500px)]
            h-[clamp(450px,35vw,650px)]
            bg-blue-700/25`}
        />

        <div
          className={`${glow}
            top-[58%]
            left-[52%]
            -translate-x-1/2
            w-[clamp(300px,35vw,600px)]
            h-[clamp(300px,35vw,600px)]
            bg-orange-300/35
            blur-[260px]`}
        />

        <div
          className={`${glow}
            top-[42%]
            left-[-5%]
            w-[clamp(250px,30vw,500px)]
            h-[clamp(450px,40vw,700px)]
            bg-green-300/30
            blur-[280px]`}
        />

        <div
          className={`${glow}
            top-[78%]
            left-[-5%]
            w-[clamp(300px,35vw,600px)]
            h-[clamp(400px,35vw,650px)]
            bg-purple-500/40
            blur-[250px]`}
        />

        <div
          className={`${glow}
            top-[92%]
            left-[15%]
            w-[clamp(300px,35vw,550px)]
            h-[clamp(350px,35vw,600px)]
            bg-green-300/35
            blur-[250px]`}
        />

        <div
          className={`${glow}
            bottom-[5%]
            left-[50%]
            -translate-x-1/2
            w-[clamp(350px,40vw,700px)]
            h-[clamp(350px,40vw,700px)]
            bg-purple-500/45
            blur-[280px]`}
        />
      </div>

      {/* Content */}
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Algorithm />
      <Aboutus />
    </div>
  );
}

export default App;