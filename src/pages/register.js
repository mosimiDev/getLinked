import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

const Register = () => {
  // Get categories state
  const [getCategories, setGetCategories] = useState([]);

  // Post data state
  const [newUserData, setNewUserData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: "",
    category: parseInt("0"),
    privacy_poclicy_accepted: false,
  });

  // Error state
  const [error, setError] = useState("");
  // success state
  const [success, setSuccess] = useState("");

  // Check user input is valid
  const isValid = () => {
    const { email, phone_number, team_name, group_size, project_topic, category, privacy_poclicy_accepted} = newUserData
    let throwError = "";
    if (!email || !phone_number || !team_name || !group_size || !project_topic || !category|| !privacy_poclicy_accepted) {
      throwError = "All values are required";
    }
    if (throwError) {
      setError(throwError);
      return false;
    }
    return true;
  };

  // Handle UserInput
  function handleInputChange(e) {
    setNewUserData({ ...newUserData, [e.target.id]: e.target.value });
  }

  // Get Categories

  useEffect(() => {
    fetch("https://backend.getlinked.ai/hackathon/categories-list", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => setGetCategories(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Post New Users
  const storeNewUser = async () => {
    if (isValid()) {
      await fetch("https://backend.getlinked.ai/hackathon/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserData),
      }).then((res) => console.log(res));
      setError("");
      setSuccess("=You Have Been Registered Sucessfully")
      setNewUserData({
        email: "",
        phone_number: "",
        team_name: "",
        group_size: 0,
        project_topic: "",
        category: parseInt("0"),
        privacy_poclicy_accepted: false,
      });
    }
  };
  return (
    <div id="register">
      <p className="text-[#D434FE] pt-4 pb-10 text-start ml-6 lg:hidden">
        Register
      </p>
      <div className="lg:flex lg:gap-1 lg:w-11/12 lg:mx-auto">
        {/* Image Section */}
        <img
          src={require("../assets/3d-big.png")}
          alt="image"
          className="mx-auto w-60 object-cover lg:w-[25rem]    lg:my-auto"
        />
        {/* End of Image section */}
        {/* Text Section */}
        <div className="my-8 mx-auto  w-[17rem]  lg:w-1/2">
          <p className="hidden lg:text-[#D434FE] lg:text-2xl lg:pt-4 lg:pb-10 lg:text-start  lg:block">
            Register
          </p>
          {/*Text plus emojis section*/}
          <div className="flex gap-1 h-12 ">
            <p className="text-white mt-2">Be part of this movement!</p>
            <span className="flex w-[4.5rem]  h-6 border-b-2 border-dotted border-[#D434FE] items-start">
              <img
                src={require("../assets/woman-walking.png")}
                alt="image"
                className=" ml-2 object-cover "
              />
              <img
                src={require("../assets/man-walking.png")}
                alt="image"
                className=" object-cover"
              />
            </span>
          </div>
          {/* End of Text plus emojis */}
          <h2 className="text-white mb-8 lg:text-start ">
            CREATE YOUR ACCOUNT
          </h2>
          <p className="text-[#D434FE] text-xl">{success}</p>
          {/* Form section */}
          <form>
            {/* First category of input */}
            <div className="lg:flex lg:gap-3">
              {/* Team name input div */}
              <div>
                <label className="text-white block mb-2 text-start">
                  Team's Name
                </label>
                <input
                  type="text"
                  placeholder="Enter the name of your group"
                  className="border-4 border-white bg-[#150E28] w-[17rem] px-8 py-3 rounded-lg mb-3 text-white"
                  id="team_name"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={newUserData.team_name}
                />
              </div>
              {/* End of Team name input div */}
              {/* Phone input div */}
              <div>
                <label className="text-white mb-2  text-start block">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="border-4 border-white bg-[#150E28] w-[17rem] px-8 py-3 rounded-lg mb-3 text-white"
                  id="phone_number"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={newUserData.phone_number}
                />
              </div>
              {/* End of Phone input div */}
            </div>
            {/*End of First category of input */}
            {/* Second category of input */}
            <div className="lg:flex lg:gap-3">
              {/* Email input div */}
              <div>
                <label className="text-white block mb-2 text-start">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border-4 border-white bg-[#150E28] w-[17rem] px-8 py-3 rounded-lg mb-3 text-white"
                  id="email"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={newUserData.email}
                />
              </div>
              {/* End of Email input div */}
              {/* Project Topic input div */}
              <div>
                <label className="text-white mb-2  text-start block">
                  Project Topic
                </label>
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className="border-4 border-white bg-[#150E28] w-[17rem] px-8 py-3 rounded-lg mb-3 text-white"
                  id="project_topic"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={newUserData.project_topic}
                />
              </div>
              {/* End of Project Topic input div */}
            </div>
            {/*End of Second category of input */}
            {/* Third category of input */}
            <div className="flex gap-2">
              {/* Category input div */}
              <div>
                <label className="text-white block mb-2 text-start">
                  Category
                </label>

                <select
                  placeholder="Select your category"
                  className="border-4 border-white bg-[#150E28] w-[10rem] px-8 py-3 rounded-lg mb-3 text-white lg:w-[17rem]"
                  id="category"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={newUserData.category}
                >
                  {getCategories?.map((item) => (
                    <option key={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              {/* End of Category input div */}
              {/* Group Size input div */}
              <div>
                <label className="text-white mb-2  text-start block">
                  Group Size
                </label>
                <input
                  type="number"
                  placeholder="Select"
                  className="border-4 border-white bg-[#150E28] w-[6rem] px-5 py-3 rounded-lg mb-3 text-white lg:w-[17rem]"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  id="group_size"
                />
              </div>
              {/* End of Group Size input div */}
            </div>
            {/*End of Third category of input */}
          </form>
          {/*End of Form section */}
          {/* Review registration section */}
          <p className="text-[#D434FE] text-sm mt-2">
            Please review your registration details before submitting
          </p>
          {/* Review registration section */}
          {/* checkbox section */}
          <input
            type="checkbox"
            className="my-4 mr-2"
            id="privacy_poclicy_accepted"
            onClick={(e) => {
              handleInputChange(e);
            }}
            value={!newUserData.privacy_poclicy_accepted}
          />
          <label className="text-white ">
            I agreed with the event terms and conditions and privacy policy
          </label>
          {/* checkbox section */}
          <p className="text-[#FF0000] text-xl">{error}</p>
          {/* Button */}
          <button
            className="text-white mx-auto  mt-5 mb-8 w-32 md:w-32 rounded-md px-5 py-3 bg-gradient-to-r from-[#FF26B9] to-[#903AFF] block lg:w-[35rem]"
            onClick={storeNewUser}
          >
            Submit
          </button>
          {/* End of Button */}
        </div>
        {/*End of Text Section */}
      </div>
    </div>
  );
};

export default Register;
