"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Globe,
  FileCode,
  Palette,
  Wind,
  Boxes,
  GitBranch,
  Mail,
  Monitor,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  glow: string;
};

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: <Globe size={20} />,
    skills: [
      {
        name: "React.js",
        icon: <Code2 size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(97,218,251,0.45)]",
      },
      {
        name: "JavaScript",
        icon: <FileCode size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(247,223,30,0.45)]",
      },
      {
        name: "HTML5",
        icon: <Globe size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(227,79,38,0.45)]",
      },
      {
        name: "CSS3",
        icon: <Palette size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(38,77,228,0.45)]",
      },
      {
        name: "Tailwind CSS",
        icon: <Wind size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]",
      },
    ],
  },

  {
    title: "Backend Development",
    icon: <Server size={20} />,
    skills: [
      {
        name: "Node.js",
        icon: <Boxes size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(104,160,99,0.45)]",
      },
      {
        name: "Express.js",
        icon: <Server size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
      },
    ],
  },

  {
    title: "Database Technologies",
    icon: <Database size={20} />,
    skills: [
      {
        name: "MongoDB",
        icon: <Database size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(19,170,82,0.45)]",
      },
      {
        name: "MySQL",
        icon: <Database size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(0,117,143,0.45)]",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    icon: <Wrench size={20} />,
    skills: [
      {
        name: "Git",
        icon: <GitBranch size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(240,80,50,0.45)]",
      },
      {
        name: "GitHub",
        icon: <GitBranch size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
      },
      {
        name: "Postman",
        icon: <Mail size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(255,108,55,0.45)]",
      },
      {
        name: "VS Code",
        icon: <Monitor size={18} />,
        glow: "hover:shadow-[0_0_30px_rgba(0,122,204,0.45)]",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 px-6"
      aria-labelledby="skills-heading"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-emerald-400 uppercase tracking-[0.35em] text-sm mb-4">
            TECHNICAL EXPERTISE
          </p>

          <h2
            id="skills-heading"
            className="
            text-4xl
            md:text-6xl
            font-bold
            text-white
            [font-family:var(--font-playfair)]
            "
          >
            Tech Stack & Skills
          </h2>

          <p className="mt-6 max-w-3xl text-slate-400 text-lg leading-8">
            Technologies, tools, and frameworks I use to build
            scalable, modern, and user-focused web applications.
          </p>
        </motion.div>

        {/* Main Container */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Animated Border */}

          <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-emerald-500/40 via-cyan-500/30 to-purple-500/40 blur-sm" />

          <div
            className="
            relative
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-8
            md:p-12
            "
          >

            <div className="space-y-14">

              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: groupIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                >

                  {/* Group Header */}

                  <div className="flex items-center gap-3 mb-6">

                    <div className="text-emerald-400">
                      {group.icon}
                    </div>

                    <h3
                      className="
                      text-white
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-sm
                      "
                    >
                      {group.title}
                    </h3>

                  </div>

                  {/* Badges */}

                  <div className="flex flex-wrap gap-4">

                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          y: -6,
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className={
  "group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 cursor-default " +
  skill.glow
}
                        role="listitem"
                        aria-label={skill.name}
                      >
                        <span className="text-slate-300 group-hover:text-white transition-colors">
                          {skill.icon}
                        </span>

                        <span className="text-slate-300 group-hover:text-white text-sm md:text-base font-medium transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

