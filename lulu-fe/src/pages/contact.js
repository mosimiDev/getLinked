import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Contact = () => {
  return (
    <div id="contact" className="mt-12">
      <h1 className="text-2xl text-white font-SFproBold tracking-wide py-3 lg:mt-20">
        Meet the Team
      </h1>
      <p className="text-white w-5/6 mx-auto font-SFproLight lg:w-3/6">
        Lulu is on a mission to become the most sophisticated , recognized and
        advanced Africa Language-based model online.
      </p>
      {/* Team One */}
      <div className="md:flex md:w-3/5 md:mx-auto md:gap-64 lg:gap-12">
        <div className="my-10 ">
          <img
            src={require("../assets/TeamIV.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Lorem Ipsum</p>
          <p className="text-yellow">Founder & CEO</p>
        </div>
        <div className="my-10 hidden lg:block">
          <img
            src={require("../assets/TeamIV.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Lorem Ipsom </p>
          <p className="text-yellow">Founder & CEO</p>
        </div>
        <div className="my-10 hidden lg:block">
          <img
            src={require("../assets/TeamIV.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Lorem Ipsom </p>
          <p className="text-yellow">Founder & CEO</p>
        </div>
        <div className="my-10">
          <img
            src={require("../assets/TeamIV.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Lorem Ipsom</p>
          <p className="text-yellow">Founder & CEO</p>
        </div>
      </div>
      {/* Team Two */}
      <div className="md:flex md:w-3/5 md:mx-auto md:gap-64 lg:gap-8  lg:w-2/5 ">
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
            src={require("../assets/Team.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Grey Matter </p>
          <p className="text-yellow">Founder & CEO</p>
        </div>
        <div className="my-10">
          <img
            src={require("../assets/TeamII.png")}
            className="w-32 object-cover mx-auto "
          />
          <p className="text-white">Diekola Ismail </p>
          <p className="text-yellow">Cofounder & CO</p>
        </div>
      </div>
      <h2 className="text-2xl text-white font-SFproBold tracking-wide mt-5 my-3">
        Let's stay connected
      </h2>
      <p className="text-white w-5/6 mx-auto font-SFproLight lg:w-3/6">
        Turpis ut consectetur mauris enim quam venenatis sed. Ornare at ultrices
        quis convallis risus malesuada quisque.
      </p>
      <div className=" lg:flex">
        <div className="bg-darkPurple my-10 p-5 w-5/6 rounded-md mx-auto lg:w-2/6 lg:rounded lg:relative lg:left-1/2 ">
          <div className="w-full mx-auto lg:relative">
            <p className="text-white mr-48 font-SFproLight">Email</p>
            <input
              type={"text"}
              className="border bg-darkPurple border-white rounded p-2 md:p-4 w-64"
            />
            <p className="text-white mr-40 md:mt-5 font-SFproLight">Message</p>
            <textarea
              className="border bg-darkPurple border-white rounded h-32  w-64 "
              placeholder="Your Message..."
            />
            <button className="bg-yellow w-11/12 mx-auto  my-5 rounded p-2 md:w-24 md:block lg:w-64">
              Send
            </button>
          </div>
        </div>
        {/* Contact Info */}
        <div className=" lg:flex   lg:w-3/6 lg:relative lg:right-1/2">
          <div className="lg:flex  lg:relative  lg:left-32 lg:gap-64 lg:h-36">
            <div className=" lg:my-5   ">
              <img
                src={require("../assets/Component.png")}
                className="mx-auto w-14 h-8"
              />
              <h3 className="text-white my-4 tracking-wider font-SFproLight md:text-xl ">
                Email
              </h3>
              <p className="text-white text-sm text-center font-SFproLight ">
                mycommunitydao@gmail.com
              </p>
            </div>
            <div className=" my-5 ">
              <img
                src={require("../assets/Component.png")}
                className="mx-auto w-14 h-8"
              />
              <h3 className="text-white my-4 tracking-wider font-SFproLight md:text-xl">
                Phone
              </h3>
              <p className="text-white text-sm text-center font-SFproLight">
                +23459679696959
              </p>
            </div>
          </div>
          <div className="lg:flex  lg:relative lg:top-48 lg:right-96 lg:gap-64 lg:h-48">
            <div className="my-5 ">
              <img
                src={require("../assets/Component.png")}
                className="mx-auto w-14 h-8"
              />
              <div className="text-white tracking-wider font-SFproLight md:text-xl my-4 ">
                Socials
              </div>
              <div className=" flex w-1/2 mx-auto gap-10 sm:gap-24 md:gap-32 lg:gap-8 ">
                <img
                  src={require("../assets/f.png")}
                  className="w-5 h-4 lg:w-6 object-cover"
                />
                <img
                  src={require("../assets/twitter.png")}
                  className="w-5 h-4 lg:w-6 object-cover"
                />
                <img
                  src={require("../assets/vector.png")}
                  className="w-5 h-4 lg:w-6 object-cover"
                />
                <img
                  src={require("../assets/instagram.png")}
                  className="w-5 h-4 lg:w-6 object-cover"
                />
              </div>
            </div>
            <div className=" my-6  l">
              <img
                src={require("../assets/Component.png")}
                className="mx-auto w-14 h-8"
              />
              <h3 className="text-white my-4 tracking-wider font-SFproLight md:text-xl">
                Office
              </h3>
              <p className="text-white md:w-40 text-sm sm:text-md mx-auto  font-SFproLight">
                34, Water Street Grailand Estate Iju Road, Lagos, 100216, NG
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:bg-lightPurple lg:w-full lg:rounded-xl  lg:pt-12  lg:mt-32">
        <div className="bg-white mt-20 w-5/6 mx-auto lg:flex rounded-xl h-52 lg:h-32 lg:w-4/6 lg:my-auto ">
          <h1 className="p-2 font-SFproBold lg:text-lightPurple md:text-xl lg:my-auto">
            Register now so you don't miss any updates
          </h1>
          <div className="bg-lightPurple w-11/12 mx-auto rounded-xl mt-10 lg:flex lg:my-auto lg:h-16 lg:gap-2 lg:mr-3">
            <input
              type={"text"}
              placeholder="Enter your Email"
              className="border bg-darkPurple border-white rounded p-2 block w-full lg:w-3/6 lg:h-12 lg:my-auto lg:ml-4 "
            />
            <button className="bg-yellow p-3 rounded-md  font-bold w-full lg:w-2/6 lg:h-12 lg:w-48 lg:my-auto ">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="md:flex">
          <div className="flex my-9 gap-2 w-3/6   mx-2 lg:mx-auto lg:relative lg:left-16 sm:gap-16">
            <Link to="#home" smooth className="text-white font-SFproLight">
              Home
            </Link>
            <Link to="#about" smooth className="text-white font-SFproLight">
              About
            </Link>
            <Link
              to="#whiteboard"
              smooth
              className="text-white font-SFproLight"
            >
              Whiteboard
            </Link>
            <Link to="#roadmap" smooth className="text-white font-SFproLight">
              Roadmap
            </Link>
            <Link to="#contact" smooth className="text-white font-SFproLight">
              Contact
            </Link>
          </div>
          <img
            src={require("../assets/twitter.png")}
            className="mx-auto md:w-6  md:h-4 my-6 lg:relative lg:right-20"
          />
        </div>
        <hr className="text-white w-4/6 mx-auto rounded my-4 " />
        <img
          src={require("../assets/Logo.png")}
          className="w-16 object-cover  mx-auto"
        />
        <div className="flex w-5/6 my-5 mx-auto  gap-5 sm:gap-80 md:gap-6 lg:bottom-14 lg:relative md:w-64 lg:left-80 ">
          <p className="text-white font-SFproLight">Terms of Service</p>
          <p className="text-white font-SFproLight">Privacy Policy</p>
        </div>
        <p className="text-white font-SFproLight  inline-block lg:relative lg:bottom-24 lg:right-80 ">
          &#169; 2022 Lulu. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
