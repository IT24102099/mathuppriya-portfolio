export default function Tools() {
  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "MongoDB Compass",
    "MySQL Workbench",
    "Vercel",
    "Netlify",
    "ClickUp",
    "Draw.io",
    "Canva",
  ];

  return (
    <section
      id="tools"
      className="pt-32 pb-48 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 tracking-[0.3em] uppercase mb-4">
          DEVELOPMENT TOOLKIT
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-16 [font-family:var(--font-playfair)]">
          Tools
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {tools.map((tool) => (
            <div
              key={tool}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-md
                rounded-3xl
                p-6
                hover:border-emerald-400/40
                transition-all
              "
            >
              <h3 className="text-lg font-medium">
                {tool}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}