import React from "react";


const About = () => {
  return (
    <div id="about">
      <h1 className="text-xl lg:text-3xl mt-10 text-white font-SFproBold tracking-wide sm:my-7 md:mt-16">
        Africa is awakening online
      </h1>
      <p className="text-white py-3 w-4/5 lg:w-3/5 mx-auto tracking-wider font-SFproLight md:text-xl">
        Lulu is on a mission to become the most sophisticated , recognized and
        advanced Africa Language-based model online.
      </p>
      {/* First Section */}
      <div className="md:flex mt-12 w-5/6 md:w-11/12 mx-auto md:gap-2">
        {/* Translate */}
        <div className=" md:w-1/3 md:my-5 ">
          <img
            src={require("../assets/Component.png")}
            className="mx-auto w-14 h-8"
          />
          <h3 className="text-white my-4 tracking-wider font-SFproMedium ">
            Translate
          </h3>
          <p className="text-white w-3/4 text-sm font-SFproLight mx-auto ">
            The Lulu system rewards players with Cowry Tokens for inputting the
            correct African language translation of phrases that appear on the
            screen in English and French.
          </p>
        </div>
        {/* Earn & Spend */}
        <div className="md:w-1/3 my-5">
          <img
            src={require("../assets/Component.png")}
            className="mx-auto w-14 h-8"
          />
          <h3 className="text-white my-4 tracking-wider font-SFproMedium">
            Earn & Spend
          </h3>
          <p className="text-white w-3/4 text-sm font-SFproLight mx-auto">
            Lulu Cowry is a digital ERC20 currency on the Ethereum
            Blockchain.Anybody can earn and spend the tokens on The Lulu app or
            exchange for cash on most crypto exchanges.
          </p>
        </div>
        {/* Give */}
        <div className="md:w-1/3 my-5">
          <img
            src={require("../assets/Component.png")}
            className="mx-auto w-14 h-8"
          />
          <h3 className="text-white my-4 tracking-wider font-SFproMedium">
            Give
          </h3>
          <p className="text-white w-3/4 text-sm font-SFproLight mx-auto">
            You can gift Lulu Cowry tokens to friends on the app or contribute
            to an impact driven project you want or is driven by MyCom DAO.
          </p>
        </div>
      </div>

      {/* Section Two */}
      <div className="md:flex md:mt-20 w-5/6 md:w-11/12 mx-auto md:gap-2">
        {/* Grading System */}
        <div className="md:w-1/3  ">
          <img
            src={require("../assets/Component.png")}
            className="mx-auto w-14 h-8"
          />
          <h3 className="text-white my-4 tracking-wider font-SFproMedium">
            Grading System
          </h3>
          <p className="text-white  w-3/4 text-sm font-SFproLight mx-auto">
            Lulu runs on a grading system that determines the value of
            translations texts inputed and reward contributors Cowry tokens
            accordingly.
          </p>
        </div>
        {/* Mascot */}
        <div className="hidden md:block md:w-1/3 md:h-68">
          <img
            src={require("../assets/MascotII.png")}
            className="w-5/6 h-5/6 object-cover"
          />
        </div>
        {/* Crowy Wallet */}
        <div className="md:w-1/3 my-5">
          <img
            src={require("../assets/Component.png")}
            className="mx-auto w-14 h-8"
          />
          <h3 className="text-white my-4 tracking-wider  font-SFproMedium">
            Crowy Wallet
          </h3>
          <p className="text-white w-3/4 text-sm font-SFproLight mx-auto">
            Lulu assigns a wallet to users after an account has been created in
            the game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;