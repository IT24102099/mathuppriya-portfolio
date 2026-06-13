export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-300 uppercase tracking-[0.2em] mb-3">
          GET IN TOUCH
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-12 [font-family:var(--font-playfair)]">
          Let's Build Something Amazing
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-slate-300 leading-8 mb-8">
              I’m always interested in discussing software engineering,
              web development, innovative projects, internships,
              and opportunities to collaborate.
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-emerald-300">
                  Email
                </p>

                <p className="text-slate-300">
                  mathuppriyan@gmail.com
                </p>
              </div>

              <div>
                <p className="text-emerald-300">
                  Location
                </p>

                <p className="text-slate-300">
                  Manipay, Sri Lanka
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            <a
              href="https://github.com/mathuppriya-dev"
              target="_blank"
              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-6
              hover:border-emerald-400/40
              transition
              "
            >
              GitHub →
            </a>

            <a
              href="https://www.linkedin.com/in/mathuppriya-naguleswaran-dev"
              target="_blank"
              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-6
              hover:border-emerald-400/40
              transition
              "
            >
              LinkedIn →
            </a>

            <a
              href="mailto:mathuppriyan@gmail.com"
              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-6
              hover:border-emerald-400/40
              transition
              "
            >
              Send Email →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}