import { motion } from "motion/react";
import React from "react";
import { assets } from "../assets/assets";
import { aboutInfo } from "../assets/assets";
const About = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-white min-h-screen w-full flex flex-col items-center pt-15"
      id="about"
    >
      <div className="flex mb-6 items-center gap-2 flex-col">
        <h1 className="text-4xl font-black">
          About <span className="text-purple-600">Me</span>
        </h1>
        <h3 className="text-white/70 text-lg">
          Get to know more about my journey and passion.
        </h3>
      </div>

      <div className="flex w-full p-18 items-center justify-around">
        <div className="md:w-1/2">
          <motion.img
            whileHover={{ scale: 0.9 }}
            className="w-120 rounded-2xl border-2 border-white/50"
            src={assets.profileImg}
            alt="mainImg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-7">
          <h2 className="text-3xl font-bold">My Journey</h2>
          <div className="text-white/70 text-md font-medium flex flex-col gap-5">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quaerat ratione vel hic, unde ab mollitia maxime obcaecati harum
              pariatur exercitationem tempora saepe nisi aut debitis inventore,
              illo alias. Nobis voluptas ullam ab impedit? Quam assumenda ipsum
              voluptates quisquam! Neque!
            </h4>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              eveniet doloremque provident aspernatur voluptate blanditiis quos.
              In voluptate consectetur accusantium.
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {aboutInfo.map((info, key) => {
              return (
                <motion.div
                  key={key}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#2a2929] select-none rounded-2xl p-4 flex flex-col gap-4"
                >
                  <div>
                    {
                      <info.icon className="text-4xl text-purple-600/90 font-bold" />
                    }
                  </div>
                  <h2 className="font-bold text-2xl">{info.title}</h2>
                  <h4>{info.description}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
