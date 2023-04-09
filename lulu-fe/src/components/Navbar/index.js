import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";

const Navbar = () => {

  const [clicked, setClicked] = useState(false); 
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div>
      <nav className="flex justify-between h-22 p-5">
        <img
          src={require("../../../src/assets/Logo.png")}
          className={" w-16 h-8  object-cover"}
        />

        <div
          className="text-white text-xl pointer lg:hidden "
          onClick={handleClick}
        >
          <i
            id="bar"
            className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
        <div className={clicked ? "#myList active " : "#myList"} id="myList">
          <Link
            to="#about"
            smooth
            className=" text-white lg:mx-10 my-8  w-12 block  lg:inline  "
          >
            About
          </Link>
          <hr className="text-white w-12 lg:hidden " />
          <Link
            to="#contact"
            smooth
            className="text-white lg:mx-10 block w-24   lg:inline my-8"
          >
            Contact Us
          </Link>
          <hr className="text-white w-12 lg:hidden " />
          <Link
            to="#roadmap"
            smooth
            className="text-white lg:mx-10 block w-12   lg:inline my-8"
          >
            Roadmap
          </Link>
          <hr className="text-white w-12 lg:hidden " />
          <Link
            to="#whiteboard"
            smooth
            className="text-white lg:mx-10 block w-12   lg:inline my-8"
          >
            Whiteboard
          </Link>
          <hr className="text-white w-12 lg:hidden " />
        </div>
        <nav className="hidden lg:block pt-1  border-2 h-10 border-yellow rounded-md  w-32 ">
          <Link
            to="#playGame"
            smooth
            className="mx-5 pt-4 text-yellow border-yellow"
          >
            Play Game
          </Link>
        </nav>
      </nav>
    </div>
  );
};
export default Navbar;
