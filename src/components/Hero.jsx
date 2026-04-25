import { motion } from "motion/react";
import React from "react";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen text-white flex md:flex-row flex-col-reverse  md:justify-between w-full pt-30 p-16 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="flex md:justify-normal md:items-start justify-center items-center md:w-1/2 mt-14 flex-col gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl mb-4 font-black">
            Hi, I am{" "}
            <span className="text-purple-600 md:flex block">M Ahmad</span>{" "}
          </h1>
          <h2 className="text-2xl font-bold">Full Stack Developer</h2>
        </div>
        <div>
          <h4 className="text-xl text-white/80 text-center md:text-left md:w-[80%]">
            I create stunning web experiences with modern technologies and
            innovative design.
          </h4>
        </div>
        <div className="flex gap-3">
          <a
            className="bg-purple-600/70 transition-all hover:rounded-full text-white duration-300 text-lg p-4 rounded-xl"
            href="#projects"
          >
            View Work
          </a>
          <a
            className="bg-transparent border-2 border-purple-600/70 transition hover:rounded-full text-white duration-300 text-lg p-4 rounded-xl"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Right Side Image */}
      <div className="flex md:w-1/2 justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600 to-pink-600 animate-pulse opacity-80">
            <motion.img
              className="absolute  rounded-full h-64 w-64 md:w-80 md:h-80 object-cover"
              src="/src/assets/profile.jpg"
              alt="profile"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
