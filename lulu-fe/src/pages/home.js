import React from "react";

const Home = () => {
  return (
    <div id="home">
      <h1 className="text-xl text-white font-SFproBold tracking-wide py-3  sm:text-yellow md:text-white lg:text-yellow xl:text-white">
        Earn for who you are
      </h1>
      <p className="text-white py-3 w-5/6 mx-auto tracking-wider font-SFproLight lg:text-xl">
        Lulu is a system built to populate African language content on the
        metaverse. To do this, Lulu rewards you with Lulu Cowry Tokens for every
        phrase you know in any African language.
      </p>
      <button className="bg-yellow my-5 w-5/6 md:w-32 rounded-md px-5 py-3">
        Play Game
      </button>
      <img src={require("../assets/Mascot.png")} className="mx-auto" />
      <p className="text-white text-md tracking-wider font-SFproLight  lg:font-SFproMedium md:text-xl">
        Supported by
      </p>
      <div className="flex w-5/6 mx-auto mt-7 gap-3 sm:gap-7 xl:gap-28">
        <img
          src={require("../assets/MyCom.png")}
          className="w-20 h-3 my-3 object-cover sm:h-6 md:w-32 md:h-8"
        />
        <img
          src={require("../assets/Wikimedia.png")}
          className="w-20 h-3 my-3 object-cover sm:h-6 sm:w-28 md:w-36 md:h-8"
        />
        <img
          src={require("../assets/AfroCrowd.png")}
          className="w-20 h-3 my-3 object-cover sm:h-6 md:w-32 md:h-10"
        />
        <img
          src={require("../assets/BadHuman.png")}
          className="w-20 h-3 my-3 object-cover sm:h-6 md:w-32 md:h-14"
        />
        <img
          src={require("../assets/WikimediaII.png")}
          className="w-20 h-3 my-3 object-cover sm:h-6 md:w-32 md:h-8"
        />
      </div>
    </div>
  );
};

export default Home;
