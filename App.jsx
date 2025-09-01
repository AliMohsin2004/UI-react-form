import React from "react";
import Inputfields from "./components/Inputfields";
import Button from "./components/Button";
import { FaEnvelope, FaLock } from "react-icons/fa";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#22503F]">
      <div className="w-96 h-96 p-6 bg-[#F6FBF9] rounded-xl shadow-lg">
        <h1 className="title font-bold text-2xl flex justify-center text-[#000] font-Roboto">
          Create An Account
        </h1>
        <p className="desc font-semibold text-md gap-1 p-4 mt-2 lowercase text-[#84C7AE] text-center font-Roboto">
          Create an account to enjoy all the services without any ads for free!
        </p>

        <div className="flex flex-col items-center mt-2">
          <Inputfields
            type="email"
            placeholder="Email Address..."
            icon={<FaEnvelope />}
          />
          <Inputfields
            type="password"
            placeholder="Enter Password..."
            icon={<FaLock />}
          />
        </div>

        <div>
          <Button />
        </div>

        <p className="flex justify-center text-[#84C7AE] mt-2 font-Roboto font-light gap-1">
          already have an account?
          <span className="font-semibold text-[#22503F] underline cursor-pointer">
            SignUp
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
