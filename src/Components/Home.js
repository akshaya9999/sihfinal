import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import SpeechToText from "./SpeechToText";
import Navabar from "./Navbar";
import PieChart from "./Chart";

function Home() {
  return (
    <div>
      <div className="h-screen w-screen flex">
        <div className="w-screen h-20 z-50 bg-indigo-900 fixed drop-shadow-lg justify-end items-center">
          <IoPersonCircleOutline style={{ color: "white", fontSize: "70px" }} />
        </div>
        <div className="w-2/3 pt-52">
            <SpeechToText/>
        </div>
        <div className="w-1/3 m-0  pt-52">
<PieChart/>
        </div>
      </div>
    </div>
  );
}

export default Home;
