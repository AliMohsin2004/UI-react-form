import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

// Reusable Input Field Component
function Inputfields({ type = "text", placeholder, icon }) {
  return (
    <div className="flex items-center w-80 h-12 border-2 rounded-xl mt-2   bg-white px-3">
    
      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 h-full outline-none px-2 font-light font-Roboto text-sm bg-transparent"
      />
        {/* Icon */}
      <span className="text-gray-500 text-sm flex justify-between">{icon}</span>
    </div>
  );
}

export default Inputfields;
