import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="footer" className="mt-32">
      {/* Footer section */}
      <div className="lg:flex w-64 mx-auto sm:w-[26rem] lg:w-11/12 lg:gap-32 xl:gap-20">
        {/* Section one */}
        <div className=" mb-20  sm:mx-auto lg:w-80 xl:w-4/5">
          <img
            src={require("../assets/Logo.png")}
            className="object-cover w-28  sm:w-32"
          />
          <p className="text-white text-start text-sm mt-6 mb-6 sm:text-lg sm:text-start ">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <img
            src={require("../assets/star.png")}
            className="relative right-36 bottom-[4rem]  w-3 inline"
          />
          <div className="flex gap-2">
            <p className="text-white text-sm sm:text-lg ">Terms of Use</p>
            <p className="text-[#D434FE] font-SFproBold  "> | </p>
            <p className="text-white text-sm sm:text-lg ">Privacy Policy</p>
          </div>
        </div>
        {/* End of Section one */}

        {/* Section two */}
        <div className="mb-8 xl:w-72 ">
          <img
            src={require("../assets/star.png")}
            className="relative left-2 top-[8rem]  w-5 inline"
          />
          <h3 className="text-[#D434FE] text-start sm:text-xl sm:text-start">
            Useful Links
          </h3>
          <p className="text-white text-start text-sm my-4 sm:text-lg">
            Overview
          </p>
          <p className="text-white text-start text-sm my-4  sm:text-lg">
            Timeline
          </p>
          <p className="text-white text-start text-sm my-4 sm:text-lg">FAQs</p>
          <p className="text-white text-start text-sm my-4 sm:text-lg">
            Register
          </p>
          <div className="flex gap-4 sm:gap-8 lg:gap-2 lg:w-64">
            <p className="text-[#D434FE] text-sm sm:text-lg">Follow us</p>
            <div className=" text-white text-2xl ">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </div>
            <a className=" text-white  " href="www.twitter.com">
              <img
                src={require("../assets/xtwitter.png")}
                className="object-cover w-5 mt-2 max-w-2 "
              />
            </a>
            <div className=" text-white text-2xl ">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </div>
            <div className=" text-white text-2xl ">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        {/* End of Section two */}
        {/* Section three */}
        <div className=" mb-8 lg:w-52  xl:w-72">
          <img
            src={require("../assets/star.png")}
            className="relative left-20 top-[4rem]  w-3 inline"
          />
          <h3 className="text-[#D434FE] text-start sm:text-lg">Contact Us</h3>
          <div className="flex gap-2 my-4">
            <div className=" text-white text-xl ">
              <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
            </div>
            <p className=" text-white text-sm sm:text-lg">+234 679 81819</p>
          </div>
          <div className="flex gap-2 my-4">
            <div className=" text-white text-xl ">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            </div>
            <p className=" text-white text-sm sm:text-lg">
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
        {/* End of Section three */}
      </div>
      <img
        src={require("../assets/starpur.png")}
        className="relative right-6   w-3 inline"
      />
      <p className="text-white text-sm py-10 sm:text-lg">
        All rights reserved. &#9400;getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
