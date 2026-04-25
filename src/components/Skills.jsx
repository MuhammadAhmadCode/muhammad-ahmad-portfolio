import { motion } from "motion/react";
import React from "react";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen border-t-2 border-t-white/20 w-full p-20 "
      id="skills"
    >
      <div className="flex mb-6 text-white items-center gap-2 flex-col">
        <h1 className="text-4xl text-center font-black">
          My <span className="text-purple-600">Skills</span>
        </h1>
        <h3 className="text-white/70 text-center text-lg">
          Technologies I work with to bring ideas to life.
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {skills.map((skill, index) => {
          return (
            <motion.div
              whileHover={{ y: -20 }}
              key={index}
              className="p-7 flex flex-col gap-4 rounded-xl text-white bg-[#2a2929]"
            >
              <div className="flex items-center gap-2">
                <span className="text-5xl text-purple-600">
                  {<skill.icon />}
                </span>
                <span className="text-xl w-40 font-bold">{skill.title}</span>
              </div>
              <h2 className="text-white/70">{skill.description}</h2>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-xl bg-[#363636]"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
