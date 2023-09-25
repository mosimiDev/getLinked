import React from "react";

const FAQ = () => {
  return (
    <div id="FAQ">
      <img
        src={require("../assets/starpur.png")}
        className="relative right-20 top-[3rem] w-5 inline"
      />
      <div className="lg:flex xl:w-4/5 xl:mx-auto  lg:mt-24  ">
        {/* Word Section */}
        <div className="w-60 mx-auto mt-10 md:w-96">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl">
            Frequently Ask
          </h3>
          <h4 className=" text-[#D434FE] sm:text-lg md:text-xl">Question</h4>
          <p className="text-white text-sm my-4 sm:text-base sm:text-start sm:w-72 sm:mb-8 md:text-lg md:w-96">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          {/* Question Section */}
          <div>
            {/* Question one */}
            <div className="flex sm:w-80  md:w-96">
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg ">
                Can I work on a project I started before the hackathon?
              </p>
              <span className=" text-[#D434FE]">
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            {/* End of Question One */}
            <hr className="text-[#D434FE] sm:w-80 md:w-96" />
            {/* Question two */}
            <div className="flex sm:w-80 md:w-96">
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg ">
                What happens if i need help during the hackathon?
              </p>
              <span className=" text-[#D434FE]">
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            {/* End of Question two */}
            <hr className="text-[#D434FE] sm:w-80 md:w-96" />
            {/* Question three */}
            <div className="flex sm:w-80 md:w-96 md:gap-1">
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg">
                What happens if i don't have an idea for a project?
              </p>
              <span className=" text-[#D434FE]">
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            {/* End of Question three */}
            <hr className="text-[#D434FE] sm:w-80 md:w-96" />
            {/* Question four */}
            <div className="flex sm:w-80 md:w-96 md:gap-2">
              <p className="text-white text-sm sm:text-base sm:text-start">
                Can I join a team or do I have to come with one?
              </p>
              <span className=" text-[#D434FE]">
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            {/* End of Question four */}
            <hr className="text-[#D434FE] sm:w-80 md:w-96" />
            {/* Question five */}
            <div className="flex  sm:w-80 md:w-96 md:gap-4">
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg">
                What happens after the hackathon ends?
              </p>
              <span className=" text-[#D434FE]">
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            {/* End of Question five */}
            <hr className="text-[#D434FE] sm:w-80 md:w-96" />
            {/* Question six */}
            <div className="flex sm:w-80 md:w-96 md:gap-2">
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg">
                Can I work on a project I started before the hackathon?
              </p>
              <span className=" text-[#D434FE]">
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </span>
            </div>
            {/* End of Question six */}
            <hr className="text-[#D434FE] sm:w-80 md:w-96" />
          </div>
          {/* End of Question Section */}
        </div>
        {/* End of Word Section */}
        {/* Image Section */}
        <div>
          <img
            src={require("../assets/_.png")}
            className="relative right-11 top-[7rem]  inline sm:right-[4rem]"
          />
          <img
            src={require("../assets/_ 1.png")}
            className="relative right-8 top-[5.5rem] inline sm:top-[6rem]"
          />
          <img
            src={require("../assets/starpur.png")}
            className="relative right-3  top-[5.5rem]  inline "
          />
          <img
            src={require("../assets/starpur.png")}
            className="relative right-20 top-[11rem]  inline xl:right-28"
          />
          <img
            src={require("../assets/_.png")}
            className="relative right-2 top-[6.5rem]  inline sm:left-[1rem]"
          />
          <img
            src={require("../assets/star.png")}
            className="relative right-40 top-[13rem]  inline"
          />
          <img
            src={require("../assets/cwok_casual_21 1.png")}
            className="mx-auto my-20  w-52 sm:w-72 md:w-96"
          />
          <img
            src={require("../assets/star.png")}
            className="relative left-12 bottom-[5rem]  w-5 inline"
          />
        </div>

        {/* End of Image Section */}
      </div>
      <hr className="text-[#27272a]" />
    </div>
  );
};

export default FAQ;
