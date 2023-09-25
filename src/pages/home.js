import React from "react";
import "./home.css"
import Overview from "./overview";
import Timeline from "./timeline";
import FAQ from "./faq";
import Footer from "./footer";

const Home = () => {
  return (
    <div id="/">
      <hr className="text-[#D434FE]" />

      {/* Main Header */}
      <div className="">
        <h1 className="text-sm italic lg:text-lg text-white font-SFproBold tracking-wide pt-3   sm:text-base md:text-lg md:pt-8  lg:pl-[20rem] xl:text-xl">
          Igniting a revolution in HR Innovation
        </h1>
        <span>
          <img
            src={require("../assets/Vector4.png")}
            className="object-cover w-24 relative left-52 sm:left-[25rem] md:left-[30.3rem]  lg:left-[49.5rem] xl:left-[66rem] "
          />
        </span>
      </div>
      {/* End of Main Header */}

      {/* Main section div */}
      <div className="lg:flex lg:gap-5 lg:w-11/12 lg:mx-auto ">
        {/* Words Section */}
        <div className="xl:w-[38rem]">
          <img
            src={require("../assets/star.png")}
            className="relative right-12 mt-6 inline"
          />
          <img
            src={require("../assets/star.png")}
            className="relative left-28  w-2 inline"
          />
          <img
            src={require("../assets/Title.png")}
            className="object-cover w-56 mx-auto sm:w-64 md:w-96"
          />
          <p className="text-white text-sm py-3 w-5/6 mx-auto tracking-wider font-SFproLight sm:w-72 sm:text-base sm:text-start md:text-xl md:w-[26rem] lg:w-96">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="text-white my-5 w-32 rounded-md px-5 py-3 bg-gradient-to-r from-[#FF26B9] to-[#903AFF] md:w-40 lg:mr-[12.5rem]">
            Register
          </button>
          <img
            src={require("../assets/star.png")}
            className="relative left-6  w-2 inline"
          />
          <img
            src={require("../assets/Countdown time.png")}
            className="mx-auto my-2 w-36 sm:w-48 md:my-10 md:w-52 lg:mr-[10.5rem] xl:mr-[18rem]"
          />
        </div>
        {/* End of Words Section */}

        {/* Main Image */}
        {/* End of Image div */}
        <div>
          <img
            src={require("../assets/Hackathon guy.png")}
            className="mx-auto object-cover mt-4 w-60 sm:w-72 md:w-96 lg:w-[35rem]"
          />
          {/* End of Main Image */}
          <hr className="text-[#D434FE] mt-0 pt-0" />
        </div>
        {/* End of Image div */}
      </div>
      <Overview />
      <FAQ />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Home;
