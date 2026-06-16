export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        {/* Section Title */}
        <div className="mb-16">
        <p className="text-emerald-400 uppercase tracking-[0.3em] mb-3">
  ABOUT ME
</p>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold [font-family:var(--font-playfair)]">
  
  Who I am and what drives me
</h2>
        </div>

        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8 items-start">

          {/* Left Side */}
          <div
  className="
bg-white/[0.03]
border
border-emerald-400/40
rounded-[32px]
backdrop-blur-md
p-8 md:px-16
md:py-12
transition-all
duration-500
hover:border-emerald-400
hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]
"
>
<br/>
            <div className="max-w-[92%] mx-auto">
  <p
    className="
    text-slate-300
    text-[15px]
    md:text-[17px]
    leading-[2]
    text-justify
    font-normal
    "
  >
              I'm Mathuppriya, a Software Engineering undergraduate
              and hands-on experience building modern web applications from concept to deployment.
              and continuously improving my development skills. My journey focuses on Full Stack Development,
              where I enjoy creating responsive user interfaces,
              integrating backend services, and working with
              modern technologies to solve real-world problems.Currently, I am expanding my expertise through
              academic projects, hands-on development, and
              continuous learning in web technologies.
            </p>
            </div>

          <div className="flex items-center gap-1 text-xl text-slate-200 text-[12px] md:text-[12px] leading-[2]"> <span className="text-xl">📍</span> <span>Sri Lanka</span> </div>
          <div className="flex items-center gap-1 text-xl text-slate-200 text-[12px] md:text-[12px] leading-[2]"> <span className="text-xl">🎓</span> <span>Software Engineering Undergraduate</span> </div>
          <div className="flex items-center gap-1 text-xl text-slate-200 text-[12px] md:text-[12px] leading-[2]"> <span className="text-xl">✉️</span> <span>mathuppriyan@gmail.com</span> </div>
<br/>

          </div>

          {/* Right Side */}
       {/* Right Side - Bento Grid */}

<div className="grid grid-cols-2 gap-5">

  {/* Education - Large Card */}

  <div
    className="
    col-span-2
    bg-white/[0.03]
    border
    border-white/10
    rounded-[30px]
    p-8
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-emerald-400/60
    hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]
    "
  >
    <div className="flex items-center gap-3 mb-4">
  <span className="text-4xl">🎓</span>

  <h4 className="text-2xl font-semibold text-white">
    Education
  </h4>
</div>
<br></br>
<p className="text-slate-300">
  Northern UNI
</p>

<p className="text-slate-400 mt-1">
  Software Engineering Undergraduate
</p>
  </div>

  {/* GPA */}

  <div
    className="
    bg-white/[0.03]
    border
    border-white/10
    rounded-[30px]
    p-6
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-yellow-400/60
    hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]
    "
  >
    <div className="flex items-center gap-3 mb-4">
  <span className="text-4xl">⭐</span>

  <h4 className="text-xl font-semibold text-white">
    GPA
  </h4>
</div>
<br></br>
<p className="text-2xl font-bold text-slate-300">
  3.18
</p>
  </div>

  {/* Focus */}

  <div
    className="
    bg-white/[0.03]
    border
    border-white/10
    rounded-[30px]
    p-6
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-cyan-400/60
    hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
  >
    <div className="flex items-center gap-3 mb-4">
  <span className="text-4xl">💻</span>

  <h4 className="text-xl font-semibold text-white">
    Focus
  </h4>
</div>
<br></br>
<p className="text-slate-300">
  Full Stack Development
</p>
  </div>

  {/* Location - Full Width */}

  <div
    className="
    col-span-2
    bg-white/[0.03]
    border
    border-white/10
    rounded-[30px]
    p-6
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-pink-400/60
    hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]
    "
  >
    <div className="flex items-center gap-3 mb-4">
  <span className="text-4xl">📍</span>

  <h4 className="text-xl font-semibold text-white">
    Location
  </h4>
</div>
<br></br>
<p className="text-slate-300">
  Manipay, Sri Lanka
</p>
  </div>

</div>
</div>
</div>
    </section>
  );
}