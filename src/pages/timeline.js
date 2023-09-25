import React from "react";

const Timeline= () => {
  return (
    <div id="timeline">
      <h1 className=" text-white font-SFproBold mt-20 sm:text-xl md:text-2xl">
        Timeline
      </h1>
      <p className="text-white text-sm py-3 w-56 mx-auto sm:text-lg sm:w-80 sm:text-start md:text-xl md:w-96 ">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <img
        src={require("../assets/starpur.png")}
        className="relative right-20 top-[0.6rem]  w-5 inline"
      />
      {/* Timeline section */}
      <div>
        {/* First timeline */}
        <div className="flex p-5 gap-2 w-11/12  mx-auto  lg:w-6">
          {/* <!-- Icons div --> */}
          <div className=" w-8">
            <div
              id="vl"
              className="border-l-2 w-1 h-24 bg-[#D434FE] mx-auto"
            ></div>
            <div className="text-white px-3 py-1 rounded-full bg-[#D434FE]  mt-1 ">
              1
            </div>
          </div>
          {/* <!-- Text div --> */}
          <div className="">
            <h4 className="text-[#D434FE] text-start font-SFproBold text-base sm:text-xl lg:w-[27rem] lg:relative lg:right-80">
              Hackathon Announcement
            </h4>
            <p className="text-white font-SFproLight text-start text-sm sm:text-lg lg:relative lg:right-[30rem] lg:text-end">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <h4 className="text-[#D434FE] font-SFproBold text-start text-base sm:text-xl">
              November 18,2023
            </h4>
          </div>
        </div>
        {/*End of First timeline */}
        {/* Second timeline */}
        <div className="flex p-5 gap-2 w-11/12 mx-auto lg:w-6">
          {/* <!-- Icons div --> */}
          <div className=" w-8">
            <div
              id="vl"
              className="border-l-2 w-1 h-24 bg-[#D434FE] mx-auto"
            ></div>
            <div className="text-white px-3 py-1 rounded-full bg-[#D434FE] mt-1 ">
              2
            </div>
          </div>
          {/* <!-- Text div --> */}
          <div className="">
            <h4 className="text-[#D434FE] font-SFproBold text-base text-start sm:text-xl lg:w-[27rem] ">
              Team Registration begins
            </h4>
            <p className="text-white font-SFproLight text-sm  text-start sm:text-lg">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
            <h4 className="text-[#D434FE] font-SFproBold text-start text-base sm:text-xl lg:relative lg:right-80">
              November 18,2023
            </h4>
          </div>
        </div>
        {/*End of Second timeline */}
        {/* Third timeline */}
        <div className="flex p-5 gap-2 w-11/12 mx-auto lg:w-6 ">
          {/* <!-- Icons div --> */}
          <div className=" w-8">
            <div
              id="vl"
              className="border-l-2 w-1 h-24 bg-[#D434FE] mx-auto"
            ></div>
            <div className="text-white px-3 py-1 rounded-full bg-[#D434FE] mt-1 ">
              3
            </div>
          </div>
          {/* <!-- Text div --> */}
          <div className="lg:w-80">
            <h4 className="text-[#D434FE] font-SFproBold text-base text-start sm:text-xl lg:w-[27rem] lg:relative lg:right-80">
              Team Registration ends
            </h4>
            <p className="text-white font-SFproLight text-sm text-start mb-10 sm:text-lg lg:relative lg:right-[25rem] lg:text-end">
              Interested Participants are no longer Allowed to register
            </p>
            <h4 className="text-[#D434FE] font-SFproBold text-start text-base sm:text-xl">
              November 18,2023
            </h4>
          </div>
        </div>
        {/*End of Third timeline */}
        <img
          src={require("../assets/star.png")}
          className="relative left-24 bottom-[1rem]  w-4 inline"
        />
        {/* Fourth timeline */}
        <div className="flex p-5 gap-2 w-11/12 mx-auto lg:w-6">
          {/* <!-- Icons div --> */}
          <div>
            <div
              id="vl"
              className="border-l-2 w-1 h-24 bg-[#D434FE] mx-auto"
            ></div>
            <div className="text-white px-3 py-1 rounded-full bg-[#D434FE] mt-1 ">
              4
            </div>
          </div>
          {/* <!-- Text div --> */}
          <div className="lg:w-80">
            <h4 className="text-[#D434FE] font-SFproBold text-base text-start sm:text-xl lg:w-[27rem]">
              Announcement of the accepted teams and ideas
            </h4>
            <p className="text-white font-SFproLight text-sm text-start sm:text-lg">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <h4 className="text-[#D434FE] font-SFproBold text-start text-base sm:text-xl lg:relative lg:right-[20rem] lg:bottom-32">
              November 18,2023
            </h4>
          </div>
        </div>
        {/*End of Fourth timeline */}
        {/* Fifth timeline */}
        <div className="flex p-5 gap-2 w-11/12 mx-auto lg:w-6">
          {/* <!-- Icons div --> */}
          <div>
            <div
              id="vl"
              className="border-l-2 w-1 h-24 bg-[#D434FE] mx-auto"
            ></div>
            <div className="text-white px-3 py-1 rounded-full bg-[#D434FE] mt-1 ">
              5
            </div>
          </div>
          {/* <!-- Text div --> */}
          <div className="lg:w-80">
            <h4 className="text-[#D434FE] font-SFproBold text-base text-start sm:text-xl lg:w-[27rem] lg:relative lg:right-[30rem]">
              Getlinked Hackathon 1.0 Offically Begins
            </h4>
            <p className="text-white font-SFproLight text-sm  text-start sm:text-lg lg:relative lg:right-[25rem] lg:text-end">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
            <h4 className="text-[#D434FE] font-SFproBold text-start text-base sm:text-xl">
              November 18,2023
            </h4>
          </div>
        </div>
        {/*End of Fifth timeline */}
        {/* Sixth timeline */}
        <div className="flex p-5 gap-2 w-11/12 mx-auto lg:w-6">
          {/* <!-- Icons div --> */}
          <div>
            <div
              id="vl"
              className="border-l-2 w-1 h-24 bg-[#D434FE] mx-auto"
            ></div>
            <div className="text-white px-3 py-1 rounded-full bg-[#D434FE] mt-1 ">
              6
            </div>
          </div>
          {/* <!-- Text div --> */}
          <div className="lg:w-80">
            <h4 className="text-[#D434FE] font-SFproBold text-base text-start sm:text-xl lg:w-[27rem]">
              Demo Day
            </h4>
            <p className="text-white font-SFproLight text-sm text-start sm:text-lg">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
            <h4 className="text-[#D434FE] font-SFproBold text-start text-base sm:text-xl lg:relative lg:right-[18rem] lg:bottom-[6rem]">
              November 18,2023
            </h4>
          </div>
        </div>
        {/*End of Sixth timeline */}
      </div>
      {/* End of Timeline section */}
      <img
        src={require("../assets/star.png")}
        className="relative right-32 bottom-[1rem]  w-3 inline"
      />
      <img
        src={require("../assets/starpur.png")}
        className="relative right-24 top-[3rem]  w-3 inline"
      />
      {/* Prizes Section */}
      <h3 className="text-white text-lg mt-10 sm:text-xl sm:mt-24 md:text-2xl">
        Prizes and
      </h3>
      <h4 className=" text-[#D434FE] font-SFproBold sm:text-lg md:text-xl">
        Rewards
      </h4>
      <img
        src={require("../assets/starpur.png")}
        className="relative left-20 bottom-[2rem]  w-2 inline"
      />
      <p className="text-white sm:text-lg">
        {" "}
        Highlight of the prizes or rewards for winners and for participants.
      </p>
      {/* Prizes Images */}
      <img
        src={require("../assets/star.png")}
        className="relative left-32 top-[20rem]  w-3 inline"
      />
      <img
        src={require("../assets/star.png")}
        className="relative right-28 top-[14rem]  w-3 inline"
      />
      <div className="lg:flex lg:w-1/2  lg:mx-auto mt-8 xl:gap-1">
        <img
          src={require("../assets/9486889 1.png")}
          className="mx-auto my-8 w-52 object-cover sm:w-80 md:w-96 lg:w-[28rem]"
        />

        {/* Medals section */}
        <div
          className=" mt-20 mb-28"
          style={{
            backgroundImage: "url(/img/Purple-Lens-Flare-PNG.png)",
            backgroundRepeat: "no-repeat",
            borderRadius: "500px",
            backgroundBlendMode: "saturation",
          }}
        >
          <img
            src={require("../assets/Rewards.png")}
            className="mx-auto sm:w-80 md:w-96 lg:w-80"
          />
        </div>
        {/*End of Medals section */}
      </div>
      {/*End of Prizes Images */}
      {/*End of Prizes Section */}
      <img
        src={require("../assets/star.png")}
        className="relative left-12 bottom-[6rem]  w-3 inline"
      />
      {/* Sponsor Section */}
      <h2 className="font-SFproBold text-lg text-white mb-3 sm:text-xl md:text-2xl lg:mt-32">
        Partners and Sponsors
      </h2>
      <p className=" text-sm text-white sm:text-lg lg:w-80 lg:mx-auto">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <img
        src={require("../assets/starpur.png")}
        className="relative right-20 top-[6rem]  w-3 inline"
      />
      <img
        src={require("../assets/star.png")}
        className="relative left-20 top-[12rem]  w-3 inline"
      />
      {/* Sponsor Image */}
      <div className="mt-16 border border-[#D434FE] rounded-xl w-4/5 mx-auto p-10 mb-24 lg:w-[27rem] lg:mt-6 xl:w-[29rem]">
        <img
          src={require("../assets/Partner and Sponsors.png")}
          className="mx-auto sm:w-80 object-cover md:w-96 lg:w-96"
        />
      </div>
      {/*End of Sponsor Image */}

      <hr className="text-[#27272a]" />
      <img
        src={require("../assets/star.png")}
        className="relative left-24 top-[2rem]  w-3 inline"
      />
      {/* Privacy Section */}
      <div className="lg:flex lg:gap-40 mt-12 w-72 mx-auto lg:w-11/12 xl:mt-28 xl:w-4/5 xl:mx-auto xl:gap-60">
        {/* Text Section */}
        <div className="mb-20 md:w-96">
          <h3 className="text-white text-lg font-SFproBold sm:text-xl md:text-2xl ">
            Privacy Policy and
          </h3>
          <h4 className=" text-[#D434FE] font-SFproBold sm:text-lg md:text-xl lg:mr-40 ">
            Terms
          </h4>
          <p className="text-white text-sm mt-3 mb-8  sm:text-base md:text-lg">
            {" "}
            Last updated on September 12,2023
          </p>
          <h6 className="text-white sm:text-base md:text-lg">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </h6>

          {/* Inner Section */}
          <div className="mt-14 border border-[#D434FE] py-10  px-4 rounded sm:w-96 sm:mx-auto md:w-[26rem]">
            <img
              src={require("../assets/starpur.png")}
              className="relative left-28 bottom-[5rem]  w-5 inline"
            />
            <p className="text-white mb-10 text-sm sm:text-base sm:text-start md:text-lg">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h4 className=" text-[#D434FE] font-SFproBold text-start sm:text-lg">
              Licensing policy
            </h4>
            <p className="text-white mt-2 mb-8 text-sm sm:text-base md:text-lg">
              Here are terms of our Standard License:
            </p>
            {/* Subsection */}
            <div className="flex gap-2">
              <span className=" text-[#84cc16]">
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
              </span>
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <img
              src={require("../assets/starpur.png")}
              className="relative right-36 bottom-[1rem]  w-5 inline"
            />
            {/*End of Subsection */}
            {/* Subsection 2 */}
            <div className="flex gap-2 mb-8">
              <span className=" text-[#84cc16]">
                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>
              </span>
              <p className="text-white text-sm sm:text-base sm:text-start md:text-lg">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            {/* End of Subsection 2 */}

            <button className="text-white my-5 w-32 md:w-32 rounded-md px-5 py-3 bg-gradient-to-r from-[#FF26B9] to-[#903AFF] md:w-40">
              Read More
            </button>
          </div>

          {/* End of Inner Section */}
        </div>
        {/*End of Text Section */}

        <div
          style={{
            backgroundImage: "url(/img/BGvector.png)",
            backgroundRepeat: "no-repeat",
            marginLeft: "1rem",
            marginRight: "1rem",
            width: "18rem",
          }}
          className="lg:mt-60 xl:h-[40rem]" 
        >
          <img
            src={require("../assets/starpur.png")}
            className="relative right-28 top-[4rem]  w-5 inline"
          />
          <img
            src={require("../assets/star.png")}
            className="relative left-20 top-[6rem]  w-3 inline"
          />
          <img
            src={require("../assets/08 1.png")}
            className="mx-auto w-60 object-cover pt-28 sm:w-72 sm:pt-20"
          />
          <img
            src={require("../assets/star.png")}
            className="relative right-16 bottom-[4rem]  w-5 inline"
          />
          <img
            src={require("../assets/star.png")}
            className="relative left-28 bottom-[6rem]  w-2 inline"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
