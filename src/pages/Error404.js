import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {

 const navigate = useNavigate();
 const navigateToHome = () => {
   navigate("/", { replace: true });
 };
 return (
   <div className="w-96 mx-auto">
     <h1 className="text-white text-xl mx-auto mt-32">404</h1>
     <h1 className="text-white text-xl mx-auto mt-4">Page Not Found</h1>
     <button
       onClick={navigateToHome}
       className="text-white mt-12 mb-96 w-32 rounded-md px-5 py-3 bg-gradient-to-r from-[#FF26B9] to-[#903AFF] md:w-48 "
     >
       Go Back To Home
     </button>
   </div>
 );
}
export default Error404;