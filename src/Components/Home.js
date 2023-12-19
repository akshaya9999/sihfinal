import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import SpeechToText from "./SpeechToText";
import Navbar from "./Navbar";
import PieChart from "./Chart";
import bgimage from '../assets/bg3.avif';
import Table from "./Table";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen flex" style={backgroundStyle}>
        <div className="w-screen h-20 z-50 bg-indigo-900 fixed drop-shadow-lg justify-end items-center">
          <IoPersonCircleOutline style={{ color: "white", fontSize: "70px" }} />
        </div>
        <div className="w-2/3 pt-52">
          <SpeechToText />
        </div>
        <div className="w-1/3 m-0 pt-24">
          <PieChart />
          <div className="justify-end items-center text-center pt-10 ">History
          <div className="pt-5"></div>
          <Table/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
