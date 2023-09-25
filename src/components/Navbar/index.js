import React, { useState } from "react";
import { useNavigate, Routes, Route, NavLink } from "react-router-dom";
import Register from "../../pages/register";
import "./index.css";
import Contact from "../../pages/contact";
import Timeline from "../../pages/timeline";
import Overview from "../../pages/overview";
import FAQ from "../../pages/faq";

const Navbar = () => {

  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register", { replace: true });
    
  }
  const navigateToHome = () => {
    navigate("/", { replace: true });
  }

  const [clicked, setClicked] = useState(false); 
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div>
      <nav className="flex justify-between h-22 p-5">
        <img
          src={require("../../../src/assets/Logo.png")}
          className={
            " w-20 h-4  object-cover sm:w-24 lg:h-[18px] lg:mt-8 xl:ml-14"
          }
          onClick={navigateToHome}
        />

        <div className=" lg:hidden " onClick={handleClick}>
          {clicked ? (
            <div>
              <img
                src={require("../../assets/closeIcon.png")}
                className="cursor-pointer"
              />
              <span className="relative text-sm bottom-[1.6rem] text-white sm:bottom-[1.5rem]">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          ) : (
            <img
              src={require("../../assets/Vector.png")}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className={clicked ? "#myList active " : "#myList"} id="myList">
          <NavLink
            to="/timeline"
            
            className=" text-white mx-8 lg:mx-10 my-2  w-12 block  lg:inline  "
          >
            Timeline
          </NavLink>

          <NavLink
            to="/overview"
            
            className="text-white mx-8  lg:mx-10 block w-12   lg:inline my-3"
          >
            Overview
          </NavLink>

          <NavLink
            to="/FAQ"
            
            className="text-white mx-8  lg:mx-10 block w-12   lg:inline my-3"
          >
            FAQs
          </NavLink>

          <NavLink
            to="/contact"
            
            className="text-white mx-8  lg:mx-10 block w-12   lg:inline my-3"
          >
            Contact
          </NavLink>
          <button
            className="mx-8 text-white border-1 h-12  rounded-md  w-32 my-3 bg-gradient-to-r from-[#FF26B9] to-[#903AFF]"
            onClick={navigateToRegister}
          >
            Register
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/FAQ" element={<FAQ/>} />
        
      </Routes>
    </div>
  );
};
export default Navbar;
