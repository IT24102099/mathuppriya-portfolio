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

<h2 className="text-2xl md:text-6xl font-bold [font-family:var(--font-playfair)]">
  
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
            <div className="mx-auto max-w-[88%]">
  <p
    className="
    text-slate-300
    text-[16px]
    md:text-[18px]
    leading-[2.2]
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
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-3xl mb-3">🎓</h3>

              <h4 className="font-semibold mb-2">
                Education
              </h4>

              <p className="text-slate-400">
                Northern UNI
              </p>

              <p className="text-slate-400">
                Software Engineering
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-3xl mb-3">⭐</h3>

              <h4 className="font-semibold mb-2">
                GPA
              </h4>

              <p className="text-slate-400">
                3.18
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-3xl mb-3">📍</h3>

              <h4 className="font-semibold mb-2">
                Location
              </h4>

              <p className="text-slate-400">
                Manipay, Sri Lanka
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-3xl mb-3">💻</h3>

              <h4 className="font-semibold mb-2">
                Focus
              </h4>

              <p className="text-slate-400">
                Full Stack Development
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}