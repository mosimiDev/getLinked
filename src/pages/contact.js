import React,  { useState, useEffect } from "react";

const Contact = () => {

  const [postContact, setPostContact] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: ""
  });

  // Error state
  const [error, setError] = useState("");
  // success state
  const [success, setSuccess] = useState("")
  
  

 

  // Check user input is valid
  const isValid = () => {
    const { email, phone_number, first_name, message } = postContact;
    let throwError = "";
    if (!email || !phone_number || !first_name || !message) {
      throwError="All values are required"
    }
    if (throwError) {
      setError(throwError);
      return false;
    }
    return true;
  }

  // Handle UserInput
  function handleInputChange(e) {
    setPostContact({...postContact, [e.target.id]:e.target.value})
  }
  // Post Contact
  const storeContact = async () => {
    if (isValid()) {
      await fetch("https://backend.getlinked.ai/hackathon/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postContact),
      }).then((res) => console.log(res));
      setError("")
      setSuccess("Submitted Sucessfully")
      setPostContact({
        email: "",
        phone_number: "",
        first_name: "",
        message: "",
      });
    }
  }
  return (
    <div id="contact" className="h-screen">
      <div className="lg:flex lg:gap-2 lg:w-11/12 lg:mx-auto lg:mt-10">
        {/* Aside section */}
        <div className="hidden lg:block lg:mx-auto lg:w-[28rem]  lg:text-start lg:pl-12">
          <p className="text-[#D434FE] text-2xl font-SFproBold ">
            Get in touch
          </p>
          <p className="text-white mt-8 ">Contact</p>
          <p className="text-white mb-8">Information</p>
          <p className="text-white ">27, Alara Street</p>
          <p className="text-white ">Yaba 1000012</p>
          <p className="text-white mb-8"> Lagos State</p>
          <p className="text-white mb-8">Call Us: 07067981819</p>
          <p className="text-white ">we are open from Monday-Friday</p>
          <p className="text-white mb-8">08:00am - 05:00pm</p>
          {/* Share to social pages section */}
          <p className="text-[#D434FE] text-lg font-SFproBold mt-6 mb-2">
            Share on
          </p>
          {/* Icons section */}
          <div className="flex gap-4  ">
            <div className=" text-white text-2xl ">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </div>
            <a className=" text-white  " href="www.twitter.com">
              <img
                src={require("../assets/xtwitter.png")}
                className="object-cover w-5 mt-2 max-w-2"
              />
            </a>
            <div className=" text-white text-2xl ">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </div>
            <div className=" text-white text-2xl ">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
          {/*End of Icons section */}
        </div>
        {/*End of Aside section */}
        {/*  Main section */}
        <div className="w-11/12 mx-auto lg:w-[20rem]">
          <div className=" text-[#D434FE] pt-3 text-start ml-4 lg:hidden">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </div>
          {/* Text section */}
          <div className="w-60 text-start pl-3">
            <p className="text-[#D434FE] text-lg font-SFproBold my-4 ">
              Questions or need assistance? Let us know about it
            </p>
            <p className="text-white mb-4">
              Email us below to any question related to our event
            </p>
          </div>
          {/* End of Text section */}
          {/* Form section */}
          <form>
            {/* Input section */}
            <div className="w-60 text-start pl-3">
              <input
                type="text"
                placeholder="Team's Name"
                className="border-4 border-white bg-[#150E28] px-8 py-3 rounded mb-3 text-white"
                id="first_name"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={postContact.first_name}
              />
              <input
                type="text"
                placeholder="Topic"
                className="border-4  border-white bg-[#150E28] px-8 py-3 rounded mb-3 text-white"
                id="phone_number"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={postContact.phone_number}
              />
              <input
                type="text"
                placeholder="Email"
                className="border-4 border-white bg-[#150E28] px-8 py-3 rounded mb-3 text-white"
                id="email"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={postContact.email}
              />
              <textarea
                placeholder="Message"
                className="border-4 border-white bg-[#150E28] px-8 py-7 rounded mb-3 text-white"
                id="message"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={postContact.message}
              />
            </div>
            {/* End of Input section */}
          </form>
          {/* End of Form section */}
          <p className="text-[#FF0000]">{error}</p>
          <p className="text-[#D434FE] text-xl">{success}</p>
          {/* Button */}

          <button
            className="text-white my-5 w-32 md:w-32 rounded-md px-5 py-3 bg-[#D434FE] "
            onClick={storeContact}
          >
            Submit
          </button>
          {/* End of Button */}
        </div>
        {/* End of Main section */}
      </div>
      {/* Share to social pages section */}
      <p className="text-[#D434FE] text-lg font-SFproBold mt-6 mb-2 lg:hidden">
        Share on
      </p>
      {/* Icons section */}
      <div className="flex gap-4 justify-center lg:hidden">
        <div className=" text-white text-2xl ">
          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
        </div>
        <a className=" text-white  " href="www.twitter.com">
          <img
            src={require("../assets/xtwitter.png")}
            className="object-cover w-5 mt-2 max-w-2"
          />
        </a>
        <div className=" text-white text-2xl ">
          <i className="fa-brands fa-facebook" aria-hidden="true"></i>
        </div>
        <div className=" text-white text-2xl ">
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </div>
      </div>
      {/*End of Icons section */}
    </div>
  );
};

export default Contact;
