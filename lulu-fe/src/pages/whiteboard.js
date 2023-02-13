import React from "react";

const Whiteboard = () => {
  return (
    <div id="whiteboard">
      <h1 className="text-xl lg:text-2xl text-white font-SFproBold tracking-wide my-4 lg:my-10 md:mt-20">
        Lorem ipsum dolor sit amet
      </h1>
      <p className="text-white lg:mt-5 w-2/3 mx-auto tracking-wider font-SFproLight ">
        Turpis ut consectetur mauris enim quam venenatis sed. Ornare at ultrices
        quis convallis risus malesuada quisque.
      </p>
      {/* Encompassing div */}
      <div className="lg:flex lg:gap-8">
        {/* Layout x text div */}
        <div>
          {/* Text div */}
          <div className={"relative top-80  lg:w-96 lg:left-16"}>
            <h3 className="text-white text-xl  tracking-wider font-SFproBold   ">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-white py-3 tracking-wider font-SFproLight sm:w-5/6 sm:mx-auto ">
              Turpis ut consectetur mauris enim quam venenatis sed. Ornare at
              ultrices quis convallis risus malesuada quisque.
            </p>
          </div>
          {/* Layout div */}
          <div className="w-full mx-auto">
            {/* Igbo man */}
            <img
              src={require("../assets/Caroussel.png")}
              className={
                "hidden lg:block lg:relative lg:w-20 lg:top-0 lg:left-72 "
              }
            />
            {/* Yoruba woman */}
            <img
              src={require("../assets/CarousselII.png")}
              className={
                "hidden lg:block lg:relative lg:w-20  lg:left-80 lg:ml-14"
              }
            />
            {/* Big woman */}
            <img
              src={require("../assets/CarousselIII.png")}
              className={
                "relative w-32 left-28  bottom-18 object-cover sm:w-40 lg:w-28 lg:ml-80 "
              }
            />
            {/* Hijab woman */}
            <img
              src={require("../assets/CarousselIV.png")}
              className={
                "relative w-28 left-60 bottom-52 pt-20 object-cover sm:left-3/4 lg:w-20 lg:ml-16  lg:mt-40 "
              }
            />
            {/* man with cap */}
            <img
              src={require("../assets/CarousselV.png")}
              className={
                "relative w-28 bottom-80 object-cover sm:left-1/3 lg:w-20  lg:mt-32 lg:ml-48 "
              }
            />
          </div>
        </div>
        {/* Big Picture div */}
        <div className="hidden lg:block  lg:w-96 lg:h-1/2  lg:relative lg:left-40 lg:top-28 ">
          <img
            src={require("../assets/BigImage.png")}
            className={"hidden lg:block lg:w-96  "}
          />
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
