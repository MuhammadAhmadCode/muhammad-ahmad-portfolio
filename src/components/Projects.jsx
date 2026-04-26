import { motion } from "motion/react";
import React from "react";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen text-white md:p-20 p-5"
      id="projects"
    >
      <div className="flex mb-6 text-white items-center gap-2 flex-col">
        <h1 className="text-4xl text-center font-black">
          My <span className="text-purple-600">Projects</span>
        </h1>
        <h3 className="text-white/70 text-center text-lg">
          A Selection of My Hobby Projects.
        </h3>
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="bg-[#2a2929] w-full overflow-hidden rounded-2xl"
            >
              <div className="h-85 overflow-hidden w-full">
                <img src={project.image} className="" alt="" />
              </div>
              <div className="p-5 flex flex-col gap-5">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <h4 className="text-white/70">{project.description}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, index) => {
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
                <div className="flex justify-center gap-3">
                  <a
                    className="bg-purple-600/70 transition-all hover:rounded-full text-white duration-300 w-20 md:min-w-40 text-center text-md md:text-lg p-4 rounded-xl"
                    href={project.demo}
                  >
                    View Demo
                  </a>
                  <a
                    className="bg-transparent border-2 border-purple-600/70 transition hover:rounded-full w-20 md:min-w-40 text-center text-white duration-300 text-md md:text-lg p-4 rounded-xl"
                    href={project.code}
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
