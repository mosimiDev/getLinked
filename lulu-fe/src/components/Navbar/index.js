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
          className={" w-20 h-10  object-cover"}
        />

        <div
          className="text-white text-xl pointer lg:hidden m-7"
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
            className=" text-white block w-12  mx-auto lg:inline my-8 "
          >
            About
          </Link>
          <hr className="text-white w-12 lg:hidden mx-auto" />
          <Link
            to="#contact"
            smooth
            className="text-white lg:mx-6 block w-20  mx-auto lg:inline my-8"
          >
            Contact Us
          </Link>
          <hr className="text-white w-12 lg:hidden mx-auto" />
          <Link
            to="#roadmap"
            smooth
            className="text-white lg:mx-6 block w-12  mx-auto lg:inline my-8"
          >
            Roadmap
          </Link>
          <hr className="text-white w-12 lg:hidden mx-auto" />
          <Link
            to="#whiteboard"
            smooth
            className="text-white lg:mx-6 block w-12  mx-auto lg:inline my-8"
          >
            Whiteboard
          </Link>
          <hr className="text-white w-12 lg:hidden mx-auto" />
        </div>
        <nav className="hidden lg:block  pt-1 border-2 h-10 border-yellow rounded-md  w-32 ">
          <Link
            to="#playGame"
            smooth
            className="mx-5 text-yellow border-yellow"
          >
            Play Game
          </Link>
        </nav>
      </nav>
    </div>
  );
};
export default Navbar;
