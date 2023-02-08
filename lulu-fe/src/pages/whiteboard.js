import React from "react";

const Whiteboard = () => {
  return (
    <div id="whiteboard">
      <h1 className="text-3xl text-white font-bold tracking-wide my-10 md:mt-20">
        Africa is awakening online
      </h1>
      <p className="text-white mt-5 w-5/6 mx-auto tracking-wider font-medium md:text-xl">
        Turpis ut consectetur mauris enim quam venenatis sed. Ornare at ultrices
        quis convallis risus malesuada quisque.
      </p>
      {/* Encompassing div */}
      <div>
        {/* Layout x text div */}
        <div>
          {/* Text div */}
          <div className={"relative top-96 lg:w-96 "}>
            <h3 className="text-white text-2xl py-3 tracking-wider font-medium lg:mb-8 lg:font-bold ">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-white py-3 tracking-wider font-medium sm:w-5/6 sm:mx-auto md:text-xl ">
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
                "hidden lg:block lg:relative lg:w-20 lg:bottom-2 lg:left-1/4"
              }
            />
            {/* Yoruba woman */}
            <img
              src={require("../assets/CarousselII.png")}
              className={
                "hidden lg:block lg:relative lg:w-20 lg:bottom-2 lg:left-1/3"
              }
            />
            {/* Big woman */}
            <img
              src={require("../assets/CarousselIII.png")}
              className={
                "relative w-32 left-28  bottom-18 object-cover sm:left-1/2 sm:w-40 lg:w-28 lg:bottom-1 lg:left-1/2"
              }
            />
            {/* Hijab woman */}
            <img
              src={require("../assets/CarousselIV.png")}
              className={
                "relative w-28 left-60 bottom-52 pt-20 object-cover sm:left-3/4 lg:w-20 lg:left-1/3 lg:bottom-1"
              }
            />
            {/* man with cap */}
            <img
              src={require("../assets/CarousselV.png")}
              className={
                "relative w-28 bottom-80 object-cover sm:left-1/3 lg:w-20 lg:bottom-0 lg:left-1/4"
              }
            />
          </div>
        </div>
        {/* Big Picture div */}
        <div className=" lg:w-52  lg:relative lg:left-3/4  lg:bottom-96 ">
          <img
            src={require("../assets/BigImage.png")}
            className={
              "hidden lg:block lg:w-40 lg:center"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
