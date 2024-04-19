import { useState } from "react";

import { Link } from "../components";

const navLinkData = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Services", link: "#services" },
  { title: "Work", link: "#projects" },
  { title: "Skills", link: "#skills" },
  { title: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-max">
      <button
        id="menu"
        className=" fixed top-1 right-3 h-10  capitalize  laptop:hidden w-24 z-40 rounded-md bg-primary hover:bg-red-600 text-white"
        onClick={toggleNavbar}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <section
        className={`${
          isOpen ? "flex" : "hidden laptop:flex"
        } flex-col laptop:flex-row   backdrop-blur-lg bg-primary/50  rounded-lg fixed top-14 right-2 tablet:right-3 laptop:top-1 w-[80%] tablet:w-[40%] laptop:w-max  capitalize h-max z-40  `}
      >
        {navLinkData.map((link, index) => {
          return (
            <Link
              key={index}
              onClick={toggleNavbar}
              link={link.link}
              title={link.title}
            />
          );
        })}
      </section>
    </div>
  );
}
