import React from "react";


const Overview = () => {
  return (
    <div id="overview">
      {/* First Section */}
      <div className="lg:flex lg:w-4/5 lg:mt-20">
        {/* Main Image */}
        <img
          src={require("../assets/thebigidea.png")}
          className="mx-auto my-8 w-52 sm:w-72 sm:mt-12 md:mt-32 md:w-96"
        />
        {/* End of Main Image */}

        {/* Word Section */}
        <div className="w-60 mx-auto md:w-96">
          <h3 className="text-white text-lg mt-12 sm:text-xl md:text-2xl">
            Introduction to getlinked
          </h3>

          <h4 className=" text-[#D434FE] sm:text-lg md:text-xl">
            techHackathon 1.0
          </h4>
          <img
            src={require("../assets/starpur.png")}
            className="relative left-32 bottom-8 h-2 w-3 inline "
          />
          <p className="text-white text-sm mb-10 sm:text-base sm:text-start sm:w-80 md:text-lg md:w-96">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        {/* End of Word Section */}
      </div>
      {/* End of First Section */}
      <hr className="text-[#27272a]" />

      {/* Second Section */}
      <div className="lg:flex xl:w-4/5 xl:mx-auto  lg:mt-10">
        {/* Main Image2 */}
        <div
          style={{
            backgroundImage: "url(/img/Purple-Lens-Flare-PNG.png)",
            backgroundRepeat: "no-repeat",
            borderRadius: "700px",
          }}
        >
          <img
            src={require("../assets/star.png")}
            className="relative right-28 top-[10.9rem] w-3 inline"
          />
          <img
            src={require("../assets/7450159 1.png")}
            className="mx-auto my-8 w-52 sm:w-64 md:w-96"
          />
        </div>
        {/* End of Main Image2 */}

        {/* Word Section */}
        <div className="w-60 mx-auto md:w-96 lg:mt-32">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl">
            Rules and
          </h3>
          <h4 className=" text-[#D434FE] sm:text-lg md:text-xl">Guidelines</h4>
          <img
            src={require("../assets/starpur.png")}
            className="relative left-[7.5rem]  w-3 inline "
          />
          <p className="text-white text-sm mb-12 sm:text-base sm:w-72 sm:text-start md:text-lg md:w-96">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img
            src={require("../assets/star.png")}
            className="relative right-16 bottom-[2rem] w-3 inline"
          />
        </div>

        {/* End of Word Section */}
      </div>
      {/*End of Second Section */}

      {/* Third Section */}
      <img
        src={require("../assets/starpur.png")}
        className="relative top-4 right-2  w-4 inline "
      />
      <div className="lg:flex xl:w-4/5 xl:mx-auto  lg:mt-24">
        {/* Main Image3 */}
        <div
          style={{
            backgroundImage: "url(/img/Purple-Lens-Flare-PNG.png)",
            backgroundRepeat: "no-repeat",
            borderRadius: "500px",
            backgroundBlendMode: "saturation",
          }}
        >
          <img
            src={require("../assets/80465541.png")}
            className="mx-auto my-8 w-52 sm:w-64 sm:mt-20 md:w-96"
          />
        </div>
        {/* End of Main Image3 */}

        {/* Word Section */}
        <div className="w-60 mx-auto md:w-96">
          <img
            src={require("../assets/star.png")}
            className="relative left-4 bottom-[8rem] w-3 inline"
          />
          <h3 className="text-white text-lg sm:text-xl  md:text-2xl">
            Judging Criteria
          </h3>
          <h4 className=" text-[#D434FE] sm:text-lg md:text-xl">
            Key attributes
          </h4>

          {/* Inner Texts */}
          <div>
            {/* First Text Section */}
            <div className="mt-5 sm:w-72 sm:text-start md:w-96">
              <span className=" text-[#D434FE] text-white text-sm sm:text-base md:text-lg ">
                Innovation and Creativity:
              </span>
              <p className="text-white text-sm inline sm:text-base md:text-lg">
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
            </div>
            {/* End of First Text Section */}

            {/* Second Text Section */}
            <div className="mt-5 sm:w-72 sm:text-start md:w-96">
              <span className=" text-[#D434FE] text-white text-sm sm:text-base md:text-lg">
                Functionality:
              </span>
              <p className="text-white text-sm inline sm:text-base md:text-lg">
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
            </div>
            {/* End of Second Text Section */}

            {/* Third Text Section */}
            <div className="mt-5 sm:w-72 sm:text-start md:w-96">
              <span className=" text-[#D434FE] text-white text-sm sm:text-base md:text-lg">
                Impact and Relevance:
              </span>
              <p className="text-white text-sm inline sm:text-base md:text-lg">
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
            </div>
            {/* End of Third Text Section */}

            {/* Fourth Text Section */}
            <div className="mt-5 sm:w-72 sm:text-start md:w-96">
              <span className=" text-[#D434FE] text-white text-sm sm:text-base md:text-lg">
                Technical Complexity:
              </span>
              <p className="text-white text-sm inline sm:text-base md:text-lg">
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
            </div>
            {/* End of Fourth Text Section */}

            {/* Fifth Text Section */}
            <div className="mt-5 sm:w-72 sm:text-start md:w-96">
              <span className=" text-[#D434FE] text-white text-sm sm:text-base md:text-lg">
                Adherence to Hackathon Rules:
              </span>
              <p className="text-white text-sm inline sm:text-base md:text-lg">
                Judges will ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </div>
            {/* End of Fifth Text Section */}
          </div>
          {/*End of Inner Texts */}
          {/* Button */}
          <button className="text-white mt-5 mb-20 w-32 md:w-32 rounded-md px-5 py-3 bg-gradient-to-r from-[#FF26B9] to-[#903AFF] sm:mt-12  md:w-40">
            Read More
          </button>
          {/* End of Button */}
        </div>
        {/* End of Word Section */}
      </div>
      {/*End of Third Section */}
      <img
        src={require("../assets/star.png")}
        className="relative left-28 bottom-[8rem] w-3 inline"
      />
      <hr className="text-[#27272a]" />
    </div>
  );
};

export default Overview;