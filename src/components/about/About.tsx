export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        {/* Section Title */}
        <div className="mb-16">
          <p className="text-emerald-300 mb-2">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold [font-family:var(--font-playfair)]">
            My Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">

          {/* Left Side */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">

            <p className="text-slate-300 leading-8 text-lg">
              I'm Mathuppriya, a Software Engineering undergraduate
              passionate about building scalable digital solutions
              and continuously improving my development skills.

              <br /><br />

              My journey focuses on Full Stack Development,
              where I enjoy creating responsive user interfaces,
              integrating backend services, and working with
              modern technologies to solve real-world problems.

              <br /><br />

              Currently, I am expanding my expertise through
              academic projects, hands-on development, and
              continuous learning in web technologies.
            </p>

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