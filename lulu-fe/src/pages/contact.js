import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="text-3xl text-white font-bold tracking-wide py-3">
        Meet the Team
      </h1>
      <p className="text-white w-5/6 mx-auto md:text-xl">
        Lulu is on a mission to become the most sophisticated , recognized and
        advanced Africa Language-based model online.
      </p>
      {/* Team One */}
      <div className="md:flex md:w-3/5 md:mx-auto md:gap-64 xl:gap-96">
        <div className="my-10 ">
          <img
            src={require("../assets/Team.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">GreyMatter</p>
          <p className="text-yellow">Founder & CEO</p>
        </div>
        <div className="my-10">
          <img
            src={require("../assets/TeamII.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Diekola Ismail</p>
          <p className="text-yellow">Cofounder & CO</p>
        </div>
      </div>
      {/* Team Two */}
      <div className="md:flex md:w-3/5 md:mx-auto md:gap-64 xl:gap-96">
        <div className="my-10">
          <img
            src={require("../assets/TeamIII.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Idris Nabilat</p>
          <p className="text-yellow">Cofounder & CTO</p>
        </div>
        <div className="my-10">
          <img
            src={require("../assets/TeamIV.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Lorem Ipsom </p>
          <p className="text-yellow">Cofounder & CTO</p>
        </div>
      </div>
      <h2 className="text-2xl text-white font-bold tracking-wide my-3">
        Let's stay connected
      </h2>
      <p className="text-white w-5/6 mx-auto md:text-xl">
        Turpis ut consectetur mauris enim quam venenatis sed. Ornare at ultrices
        quis convallis risus malesuada quisque.
      </p>
      <div className="bg-darkPurple my-10 p-5 w-5/6 rounded-md mx-auto">
        <div className="w-full mx-auto">
          <p className="text-white mr-40 md:text-xl">Email</p>
          <input
            type={"text"}
            className="border bg-darkPurple border-white rounded p-2 md:p-4"
          />
          <p className="text-white mr-32 md:mt-5 md:text-xl">Message</p>
          <textarea
            className="border bg-darkPurple border-white rounded p-4 md:p-8 "
            placeholder="Your Message..."
          />
          <button className="bg-yellow w-11/12 mx-auto  my-5 rounded p-2 md:w-24 md:block">
            Send
          </button>
        </div>
      </div>
      {/* Contact Info */}
      <div className=" ">
        <img
          src={require("../assets/Component.png")}
          className="mx-auto w-14 h-8"
        />
        <h3 className="text-white my-4 tracking-wider font-bold md:text-2xl">
          Email
        </h3>
        <p className="text-white text-sm text-center md:text-xl">
          Lulu@gmail.com
        </p>
      </div>
      <div className=" my-5 md:my-7 ">
        <img
          src={require("../assets/Component.png")}
          className="mx-auto w-14 h-8"
        />
        <h3 className="text-white my-4 tracking-wider font-bold md:text-2xl">
          Phone
        </h3>
        <p className="text-white text-sm text-center md:text-xl">
          +23459679696959
        </p>
      </div>
      <div className="my-5 ">
        <img
          src={require("../assets/Component.png")}
          className="mx-auto w-14 h-8"
        />
        <div className="text-white tracking-wider font-bold my-4 md:text-2xl">
          Socials
        </div>
        <div className=" flex w-1/2 mx-auto gap-10 sm:gap-24 md:gap-32 ">
          <img src={require("../assets/f.png")} />
          <img src={require("../assets/twitter.png")} />
          <img src={require("../assets/vector.png")} />
          <img src={require("../assets/instagram.png")} />
        </div>
      </div>
      <div className=" my-6 ">
        <img
          src={require("../assets/Component.png")}
          className="mx-auto w-14 h-8"
        />
        <h3 className="text-white my-4 tracking-wider font-bold md:text-2xl">
          Office
        </h3>
        <p className="text-white text-sm sm:text-md mx-auto  md:text-xl">
          34, Water Street Grailand Estate Iju Road, Lagos, 100216, NG
        </p>
      </div>
      <div className="bg-white mt-20 w-5/6 mx-auto rounded-xl h-52">
        <h1 className="p-2 font-bold md:text-xl">
          Register now so you don't miss any updates
        </h1>
        <div className="bg-darkPurple w-11/12 mx-auto rounded-xl mt-10">
          <input
            type={"text"}
            placeholder="Enter your Email"
            className="border bg-darkPurple border-white rounded p-2 block w-full "
          />
          <button className="bg-yellow p-3 rounded-md  font-bold w-full ">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="md:flex">
        <div className="flex my-5 gap-2 w-5/6 mx-auto sm:gap-16">
          <Link to="#home" smooth className="text-white md:text-xl">
            Home
          </Link>
          <Link to="#about" smooth className="text-white md:text-xl">
            About
          </Link>
          <Link to="#whiteboard" smooth className="text-white md:text-xl">
            Whiteboard
          </Link>
          <Link to="#roadmap" smooth className="text-white md:text-xl">
            Roadmap
          </Link>
          <Link to="#contact" smooth className="text-white md:text-xl">
            Contact
          </Link>
        </div>
        <img
          src={require("../assets/twitter.png")}
          className="mx-auto md:w-8  md:h-4 my-4"
        />
      </div>
      <hr className="text-white w-5/6 mx-auto rounded my-4 " />
      <img
        src={require("../assets/Logo.png")}
        className="w-16 object-cover mx-auto"
      />
      <div className="flex w-5/6 my-5 mx-auto gap-5 sm:gap-80 md:gap-6 md:relative md:w-64 md:left-60 ">
        <p className="text-white">Terms of Service</p>
        <p className="text-white">Privacy Policy</p>
      </div>
      <p className="text-white md:relative md:bottom-10 md:right-48">
        2022 Lulu. All rights reserved
      </p>
    </div>
  );
};

export default Contact;
