import Image from "next/image";
import Navbar from "../layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="
relative
min-h-screen
flex
items-center
justify-center
px-6
sm:px-8
lg:px-16
">

        {/* Background Orbs */}

        <div className="absolute top-40 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-40 right-20 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="absolute top-1/2 right-10 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl" />

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div className="order-2 lg:order-1">

              <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                <span className="text-emerald-400 tracking-widest text-sm">
                  HELLO, I'M
                </span>
              </div>

              <h1 className="font-playfair text-6xl md:text-8xl lg:text-[7rem] leading-none font-bold">
                Mathuppriya
              </h1>

              <h2 className="mt-6 text-xl md:text-2xl text-slate-300">
                Full Stack Developer
              </h2>

              <h3 className="text-slate-400 text-lg mt-2">
                Software Engineering Student
              </h3>

              <p className="mt-8 text-slate-400 max-w-xl leading-relaxed text-lg">
                Passionate about building scalable web applications,
                solving real-world problems, and creating meaningful
                digital experiences through modern technologies.
              </p>

              {/* Stats */}

              <div className="flex gap-10 mt-12 flex-wrap">

                <div>
                  <h3 className="text-4xl font-bold text-white">
                    3.18
                  </h3>
                  <p className="text-slate-400 mt-1">
                    GPA
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white">
                    4+
                  </h3>
                  <p className="text-slate-400 mt-1">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white">
                    10+
                  </h3>
                  <p className="text-slate-400 mt-1">
                    Technologies
                  </p>
                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-12 flex-wrap">

                <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
                  View Projects
                </button>

                <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition">
                  Download CV
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="order-1 lg:order-2 flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl scale-125" />

                <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border border-white/10 shadow-2xl">

                  <Image
                    src="/profile.jpg"
                    alt="Mathuppriya"
                    fill
                    priority
                    className="object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}