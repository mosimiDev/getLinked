import React from "react";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <h1 className="text-2xl text-white font-SFproBold  tracking-wide pb-3">
        Roadmap
      </h1>
      <p className="text-white py-3 w-3/5 mx-auto tracking-wider font-SFproLight md:text-xl">
        Turpis ut consectetur mauris enim quam venenatis sed. Ornare at ultrices
        quis convallis risus malesuada quisque.
      </p>
      <img
        src={require("../assets/RoadmapImg.png")}
        className="w-5/6 mx-auto mt-8"
      />
      {/* Phases Section */}
      <div className="flex w-11/12 mx-auto sm:gap-16 md:gap-2 ">
        {/* phase 1 */}
        <div className="mx-3 w-28 relative right-5 lg:bottom-32 sm:w-1/4 ">
          <h2 className="text-white text-sm sm:text-xl ">Phase 1</h2>
          <div className="flex border-2 rounded border-yellow my-3 ">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight text-xs m-auto sm:text-sm ">
              Launch Lulu on ios and Android
            </p>
          </div>
          <div className="flex border-2 rounded border-yellow my-3 ">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm  ">
              Community Checkpoints
            </p>
          </div>
          <div className="flex border-2 rounded border-yellow my-3">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              Player Ranking
            </p>
          </div>
          <div className="flex border-2 rounded border-yellow my-3">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm">
              First ICO
            </p>
          </div>
        </div>

        {/* phase 2 */}
        <div className="mx-3 w-28 relative right-12 top-40 sm:w-1/4  md:top-4 md:right-8">
          <h2 className="text-white text-sm sm:text-xl ">Phase 2</h2>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              App Upgrade
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm">
              Launch Marketplace
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              Launch Learning Program
            </p>
          </div>
        </div>
        {/* phase 3 */}
        <div className="mx-3 w-28  relative right-28 sm:w-1/4 lg:bottom-32  md:right-10 ">
          <h2 className="text-white text-xs sm:text-xl">Phase 3</h2>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              Blockchain Dev
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              Token Pre-sale
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              Exchange Utility
            </p>
          </div>
        </div>
        {/* phase 4 */}
        <div className="mx-3 w-32 relative top-40 right-44 sm:w-1/4  md:right-12 md:top-4">
          <h2 className="text-white text-sm sm:text-xl">Phase 4</h2>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm  md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs sm:text-sm ">
              App Upgrade
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs  sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs  sm:text-sm ">
              Passport NFTs
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-SFproLight">
              SEP 24TH
            </span>
            <p className="text-white font-SFproLight m-auto text-xs  sm:text-sm ">
              Expansion
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-xl lg:text-3xl text-white font-SFproBold tracking-wide mt-32 lg:mt-12">
        Tokenomics
      </h1>
      <p className="text-white w-3/5  mx-auto font-SFproLight my-10 md:text-xl">
        Turpis ut consectetur mauris enim quam venenatis sed. Ornare at ultrices
        quis convallis risus malesuada quisque.
      </p>
      <div className=" lg:flex lg:gap-4">
        <div className="hidden lg:block lg:w-2/6 ">
          <img
            src={require("../assets/MascotIII.png")}
            className="hidden lg:block lg:mr-8 lg:h-80"
          />
        </div>
        <div className="bg-darkPurple rounded mx-4 md:w-1/2 lg:w-3/6 lg:h-72 rounded-xl ">
          <div className="flex w-5/6 mx-auto space-x-8 lg:space-x-32 md:mx-auto sm:space-x-80 p-3">
            <p className="text-white ">Lorem ipsum</p>
            <p className="text-white ">00000000000</p>
          </div>
          <hr className="text-white w-10/12  mx-auto" />
          <div className="flex w-5/6 mx-auto space-x-8 md:mx-auto lg:space-x-32 sm:space-x-80 p-3 ">
            <p className="text-white ">Lorem ipsum</p>
            <p className="text-white">00000000000</p>
          </div>
          <hr className="text-white w-10/12  mx-auto" />
          <div className="flex w-5/6 mx-auto space-x-8 md:mx-auto lg:space-x-32 sm:space-x-80 p-3 ">
            <p className="text-white ">Lorem ipsum</p>
            <p className="text-white">00000000000</p>
          </div>
          <hr className="text-white w-10/12  mx-auto" />
          <div className="flex w-5/6 mx-auto space-x-8 md:mx-auto lg:space-x-32 sm:space-x-80 p-3 ">
            <p className="text-white ">Lorem ipsum</p>
            <p className="text-white">00000000000</p>
          </div>
          <hr className="text-white w-10/12  mx-auto" />
          <div className="flex w-5/6 mx-auto space-x-8 md:mx-auto lg:space-x-32 sm:space-x-80 p-3 ">
            <p className="text-white ">Lorem ipsum</p>
            <p className="text-white">00000000000</p>
          </div>
          <hr className="text-white w-10/12  mx-auto" />
          <div className="flex w-5/6 mx-auto space-x-8 md:mx-auto lg:space-x-32 sm:space-x-80 p-3">
            <p className="text-white ">Lorem ipsum</p>
            <p className="text-white">00000000000</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Roadmap;
