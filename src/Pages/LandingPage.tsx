import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Algorithm from "../components/Algorithm";
import Process from "../components/Process";
import Aboutus from "../components/Aboutus";

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#00002B] overflow-hidden isolate">

      {/* ================= Background Glow Layer ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

        <div
          className="
            absolute
            top-[60%]
            left-[25%]
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-900
            blur-[180px]
            opacity-80
          "
        />

        <div
          className="
            absolute
            top-[10%]
            left-0
            -translate-x-1/2
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
            left-full
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
            right-0
            translate-x-1/2
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
            right-0
            translate-x-1/3
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
            top-[70%]
            right-0
            translate-x-1/2
            w-[clamp(250px,30vw,500px)]
            h-[clamp(450px,35vw,650px)]
            rounded-full
            bg-white
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            top-[58%]
            left-0
            -translate-x-1/2
            w-[clamp(300px,35vw,600px)]
            h-[clamp(300px,35vw,600px)]
            rounded-full
            bg-orange-300
            blur-[230px]
          "
        />

        <div
          className="
            absolute
            top-[30%]
            left-0
            -translate-x-1/2
            w-[clamp(250px,30vw,500px)]
            h-[clamp(450px,40vw,700px)]
            rounded-full
            bg-green-300
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            top-[45%]
            left-[70%]
            w-[clamp(250px,30vw,500px)]
            h-[clamp(450px,40vw,700px)]
            rounded-full
            bg-blue-700
            blur-[150px]
          "
        />



                  {/* Main spotlight */}
                  <div
                    className="
                      absolute
                      bottom-[-250px]
                      left-1/2
                      -translate-x-1/2
                      w-[min(1000px,95vw)]
                      h-[850px]
                      rounded-full
                      bg-fuchsia-600/20
                      blur-[180px]
                    "
                  />

                  {/* Bright center */}
                  <div
                    className="
                      absolute
                      bottom-[-180px]
                      left-1/2
                      -translate-x-1/2
                      w-[700px]
                      h-[320px]
                      rounded-full
                      bg-pink-300/30
                      blur-[120px]
                    "
                  />

                  {/* Soft outer bloom */}
                  <div
                    className="
                      absolute
                      bottom-[20]
                      left-1/2
                      -translate-x-1/2
                      w-[100px]
                      h-[3550px]
                      rounded-full
                      bg-purple-900/60
                      blur-[280px]
                    "
                  />

                </div>

      {/* ================= Website Content ================= */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <section id="features" className="scroll-mt-24">
          <Features />
        </section>

        <Process />
        <Algorithm />

        <section id="aboutus">
          <Aboutus />
        </section>
      </div>

    </div>
  );
}

export default LandingPage;