export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "React Native",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
      ],
    },

    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Java",
        "Spring Boot",
        "REST APIs",
      ],
    },

    {
      title: "Database",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
      ],
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Figma",
      ],
    },
  ];

  return (
    <section
  id="skills"
  className="pt-48 pb-32 px-6"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-20">
          <p className="text-emerald-300 uppercase tracking-[0.2em] mb-3">
            TECHNICAL EXPERTISE
          </p>

          <h2 className="text-5xl md:text-6xl font-bold [font-family:var(--font-playfair)]">
            Skills
          </h2>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
              bg-white/5
              border
              border-white/10
              rounded-[32px]
              p-8
              backdrop-blur-xl
              hover:border-emerald-400/30
              transition-all
              duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-8 text-emerald-300">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    text-slate-300
                    text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}