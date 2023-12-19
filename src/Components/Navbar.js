import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import SpeechToText from "./SpeechToText";

function Navabar() {
  return (
    <div>
      <div className="w-screen h-1/20 z-50 bg-orangee fixed drop-shadow-lg justify-end items-center">
          <IoPersonCircleOutline style={{ color: "white", fontSize: "70px" }} />
        </div>  
    </div>
  );
}

export default Navabar;
