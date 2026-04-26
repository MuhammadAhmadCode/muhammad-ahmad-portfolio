import { motion } from "motion/react";
import React from "react";
import { BiPhoneCall, BiSolidLocationPlus } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { href } from "react-router-dom";

const Contact = () => {
  const socials = [
    {
      icon: <BsGithub />,
      href: "https://github.com/MuhammadAhmadCode/",
    },
    {
      icon: <BsFacebook />,
      href: "https://www.google.com/",
    },
    {
      icon: <BsInstagram />,
      href: "https://www.google.com/",
    },
    {
      icon: <BsYoutube />,
      href: "https://www.google.com/",
    },
  ];
  return (
    <motion.div
      id="contact"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-white min-h-screen w-full md:px-20 px-5"
    >
      <div className="flex mb-6 items-center gap-2 flex-col">
        <h1 className="text-4xl font-black">
          Get In <span className="text-purple-600">Touch</span>
        </h1>
        <h3 className="text-white/70 text-center text-lg">
          Have a project in mind or want to collaborate? Let's talk!
        </h3>
      </div>
      <div className="w-full mt-9 flex md:flex-row flex-col md:px-20 gap-7 justify-around">
        <form className="flex md:w-1/2 flex-col gap-7" action="">
          <div className="flex flex-col gap-2">
            <label className=" text-white/80" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="eg: Ahmad, Ali etc"
              className="py-4 px-3 bg-[#2a2929] rounded-xl "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className=" text-white/80" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="eg: ahmad@gmail.com"
              className="py-4 px-3 bg-[#2a2929] rounded-xl "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className=" text-white/80" htmlFor="message">
              Your Message
            </label>
            <textarea
              type="email"
              name="email"
              id="email"
              placeholder="Your Message Here"
              className="py-4 px-3 min-h-50 bg-[#2a2929] rounded-xl "
            />
          </div>
          <motion.button
            onClick={(e) => e.preventDefault()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="bg-purple-600 p-3 rounded-xl cursor-pointer text-lg font-medium"
          >
            Send Message
          </motion.button>
        </form>
        <div className="md:w-[40%] mb-3 flex flex-col  gap-8 md:mt-0">
          <div>
            <div className="flex gap-6 items-center">
              <BiSolidLocationPlus className="text-2xl " />{" "}
              <span className="text-xl font-bold">Location</span>
            </div>
            <span className="pl-12 text-white/70 mt-5">
              Dhakki Charssada, Pakistan
            </span>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <MdEmail className="text-2xl " />{" "}
              <span className="text-xl font-bold">Email</span>
            </div>
            <span className="pl-12 text-white/70 mt-5">
              ma2565983@gmail.com
            </span>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <BiPhoneCall className="text-2xl " />{" "}
              <span className="text-xl font-bold">Phone</span>
            </div>
            <span className="pl-12 text-white/70 mt-5">+92 3348383486</span>
          </div>
          <div className="md:mt-9 flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <span className="text-xl font-bold">Follow Me On</span>
            </div>
            <div className="flex gap-3">
              {socials.map((social, index) => {
                return (
                  <motion.a
                    whileHover={{ scale: 1.09 }}
                    href={social.href}
                    target="_blank"
                    key={index}
                    className="w-13 cursor-pointer h-13 flex text-lg justify-center items-center bg-[#2a2929] transition-all hover:bg-[#383737] rounded-full mt-5"
                  >
                    {social.icon}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
