export default function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-300 uppercase tracking-[0.2em] mb-3">
          EDUCATION
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-20 [font-family:var(--font-playfair)]">
          Academic Journey
        </h2>

        <div className="relative">

          <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10"></div>

          <div className="relative pl-16 mb-16">

            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-emerald-400"></div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

              <p className="text-emerald-300 mb-3">
                2024 - 2028
              </p>

              <h3 className="text-3xl font-bold mb-3">
                Northern UNI
              </h3>

              <p className="text-slate-300 mb-3">
                Bachelor of Science (Hons) in Information Technology
              </p>

              <p className="text-slate-400">
                Specialized in Software Engineering
              </p>

              <p className="text-slate-400 mt-4">
                GPA: 3.18
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}