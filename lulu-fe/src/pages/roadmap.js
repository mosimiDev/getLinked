import React from "react";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <h1 className="text-3xl text-white font-bold tracking-wide py-3">
        Roadmap
      </h1>
      <p className="text-white py-3 w-5/6 mx-auto tracking-wider font-medium md:text-xl">
        Lulu is on a mission to become the most sophisticated , recognized and
        advanced Africa Language-based model online.
      </p>
      <img
        src={require("../assets/RoadmapImg.png")}
        className="w-5/6 mx-auto mt-8"
      />
      {/* Phases Section */}
      <div className="flex w-11/12 mx-auto sm:gap-16 md:gap-2 ">
        {/* phase 1 */}
        <div className="mx-3 w-28 relative right-5 bottom-12 sm:w-1/4 md:w-auto md:top-4">
          <h2 className="text-white text-sm sm:text-xl ">Phase 1</h2>
          <div className="flex border-2 rounded border-yellow my-3 ">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white text-xs m-auto sm:text-sm md:text-xl">
              Launch Lulu on ios and Android
            </p>
          </div>
          <div className="flex border-2 rounded border-yellow my-3 ">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl ">
              Community Checkpoints
            </p>
          </div>
          <div className="flex border-2 rounded border-yellow my-3">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              Player Ranking
            </p>
          </div>
          <div className="flex border-2 rounded border-yellow my-3">
            <span className="w-10 bg-yellow text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              First ICO
            </p>
          </div>
        </div>

        {/* phase 2 */}
        <div className="mx-3 w-28 relative right-14 top-36 sm:w-1/4 md:w-auto md:top-4 md:right-8">
          <h2 className="text-white text-sm sm:text-xl ">Phase 2</h2>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-sm sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              App Upgrade
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              Launch Marketplace
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              Launch Learning Program
            </p>
          </div>
        </div>
        {/* phase 3 */}
        <div className="mx-3 w-28  relative bottom-5 right-24 sm:w-1/4 md:w-auto md:top-4 md: right-10 ">
          <h2 className="text-white text-xs sm:text-xl">Phase 3</h2>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              Blockchain Dev
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              Token Pre-sale
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              Exchange Utility
            </p>
          </div>
        </div>
        {/* phase 4 */}
        <div className="mx-3 w-32 relative top-36 right-40 sm:w-1/4 md:w-auto md:right-12 md:top-4">
          <h2 className="text-white text-sm sm:text-xl">Phase 4</h2>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm  md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs sm:text-sm md:text-xl">
              App Upgrade
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs  sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs  sm:text-sm md:text-xl">
              Passport NFTs
            </p>
          </div>
          <div className="flex border-2 rounded border-darkPurple my-3">
            <span className="w-10 bg-darkPurple text-xs sm:text-sm md:font-bold">
              SEP 24TH
            </span>
            <p className="text-white m-auto text-xs  sm:text-sm md:text-xl">
              Expansion
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-white font-bold tracking-wide mt-32">
        Tokenomics
      </h1>
      <p className="text-white w-5/6  mx-auto font-bold my-10 md:text-xl">
        Lulu is on a mission to become the most sophisticated , recognized and
        advanced Africa Language-based model online.
      </p>
      <div className="bg-darkPurple rounded w-5/6  mx-auto">
        <div className="flex space-x-32 sm:space-x-80 p-3">
          <p className="text-white md:mx-auto">Lorem ipsum</p>
          <p className="text-white ">000000</p>
        </div>
        <hr className="text-white" />
        <div className="flex space-x-32 sm:space-x-80 p-3 ">
          <p className="text-white md:mx-auto">Lorem ipsum</p>
          <p className="text-white">000000</p>
        </div>
        <hr className="text-white" />
        <div className="flex space-x-32 sm:space-x-80 p-3 ">
          <p className="text-white md:mx-auto">Lorem ipsum</p>
          <p className="text-white">000000</p>
        </div>
        <hr className="text-white" />
        <div className="flex space-x-32 sm:space-x-80 p-3 ">
          <p className="text-white md:mx-auto">Lorem ipsum</p>
          <p className="text-white">000000</p>
        </div>
        <hr className="text-white" />
        <div className="flex space-x-32 sm:space-x-80 p-3 ">
          <p className="text-white md:mx-auto">Lorem ipsum</p>
          <p className="text-white">000000</p>
        </div>
        <hr className="text-white" />
        <div className="flex space-x-32 sm:space-x-80 p-3">
          <p className="text-white md:mx-auto">Lorem ipsum</p>
          <p className="text-white">000000</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Roadmap;
