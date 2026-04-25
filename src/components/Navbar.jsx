import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuItems = [
    {
      href: "#home",
      heading: "Home",
    },
    {
      href: "#about",
      heading: "About",
    },
    {
      href: "#skills",
      heading: "Skills",
    },
    {
      href: "#projects",
      heading: "Projects",
    },
    {
      href: "#experience",
      heading: "Expreience",
    },
    {
      href: "#contact",
      heading: "Contact",
    },
  ];
  return (
    <nav className="bg-[#1f1f1f] px-7 shadow-gray-800 shadow-lg py-5 flex justify-between ">
      <div className="text-3xl font-bold text-white/80">
        M <span className="text-purple-600">Ahmad</span>
      </div>
      {/* For Desktop Items */}
      <div className="hidden md:flex gap-7">
        {MenuItems.map((item) => {
          return (
            <a
              href={item.href}
              className="relative text-white text-md hover:text-purple-600 hover:font-medium transition duration-300 group"
            >
              <span>{item.heading}</span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
            </a>
          );
        })}
      </div>
      {/* For Mobile buttons */}
      <div className="md:hidden flex text-xl text-white">
        {showMenu ? (
          <FaXmark onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <FaBars onClick={() => setShowMenu(!showMenu)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
