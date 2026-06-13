export default function Projects() {
  const projects = [
  {
    title: "Northern UNI Smart Campus",
    description:
      "A smart campus management platform designed to streamline university operations including visitor management, facility booking, student services, and campus administration.",

    tech: ["React", "Node.js", "Express.js", "MongoDB"],

    image: "",

    github: "#",
  },

  {
    title: "Smart Career Guidance System",
    description:
      "A MERN-based career guidance platform that helps students discover suitable degree programs and university pathways using academic performance analysis and eligibility prediction.",

    tech: ["React", "Node.js", "Express.js", "MongoDB"],

    image: "",

    github:
      "https://github.com/IT24102099/A-Web-Based-Career-Selection-and-Education-Guidance-System",
  },

  {
    title: "Smart Campus Mobile App",
    description:
      "A cross-platform React Native application integrating campus services such as Lost & Found, visitor management, canteen services, authentication, and student operations.",

    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "JWT",
    ],

    image: "",

    github:
      "https://github.com/mathuppriya-dev/Mobile",
  },

  {
    title: "Blood Donation Management System",
    description:
      "A full-stack web application connecting blood donors and recipients through donor registration, blood request tracking, and inventory management.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],

    image: "",

    github:
      "https://github.com/mathuppriya-dev/Blood-Donation-System",
  },
];

  return (
    <section id="projects" className="pt-32 pb-48 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <div className="mb-20">
          <p className="text-emerald-300 uppercase tracking-[0.2em] mb-3">
            FEATURED WORK
          </p>

          <h2 className="text-5xl md:text-6xl font-bold [font-family:var(--font-playfair)]">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-[32px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-emerald-400/40
              transition-all
              duration-500
              "
            >

              {/* Image */}

              <div
  className="
  h-[280px]
  flex
  items-center
  justify-center
  bg-gradient-to-br
  from-emerald-500/20
  via-cyan-500/10
  to-purple-500/20
  border-b
  border-white/10
  "
>
  <h3
    className="
    text-3xl
    text-center
    font-bold
    px-6
    [font-family:var(--font-playfair)]
    "
  >
    {project.title}
  </h3>
</div>

              {/* Content */}

              <div className="p-8">

                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-4
                  [font-family:var(--font-playfair)]
                  "
                >
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-8 mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-emerald-400/10
                      text-emerald-300
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Button */}

                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="
  inline-flex
  items-center
  gap-2
  border
  border-white/20
  px-6
  py-3
  rounded-full
  hover:bg-white
  hover:text-black
  transition
  "
>
  GitHub →
</a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}