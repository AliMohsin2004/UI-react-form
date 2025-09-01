import React from "react";
import {FaEnvelope,FaLock} from "react-icons/fa";

function inputfields({ type = "text", placeholder }) {
  return (
    <div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-80 h-12 border-2 rounded-xl mt-2 font-light font-Roboto text-sm px-3 bg-white"
    /> 
    </div>
    
  );
}

export default inputfields;
