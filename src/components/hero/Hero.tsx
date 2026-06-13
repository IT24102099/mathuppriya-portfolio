import Image from "next/image";
import Navbar from "../layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container text-center">

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
  src="/profile.jpg"
  alt="Mathuppriya"
  fill
  sizes="256px"
  className="object-cover"
  priority
/>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-emerald-300 font-medium">
              HELLO, I'M
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 [font-family:var(--font-playfair)]">
            Mathuppriya
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-3xl text-slate-300 mb-6">
            Full Stack Developer | Software Engineering Student
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Passionate about building scalable web applications,
            creating meaningful user experiences, and continuously
            growing as a software engineer through real-world projects
            and modern technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-14">

            <div>
              <h3 className="text-4xl font-bold">3.18</h3>
              <p className="text-slate-400 mt-2">GPA</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">1+</h3>
              <p className="text-slate-400 mt-2">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">8+</h3>
              <p className="text-slate-400 mt-2">Technologies</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-14 flex-wrap">

            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition">
              Download CV
            </button>

          </div>

        </div>
        <div className="absolute top-[20%] left-[5%] w-24 h-24 bg-blue-500/20 rounded-full blur-sm"></div>

<div className="absolute top-[60%] right-[10%] w-28 h-28 bg-blue-600/20 rounded-full blur-sm"></div>

<div className="absolute top-[40%] right-0 w-12 h-12 bg-orange-500/20 rounded-full blur-sm"></div>
      </section>
    </>
  );
}