import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import SpeechToText from "./SpeechToText";
import Navbar from "./Navbar";
import PieChart from "./Chart";
import bgimage from "../assets/bg3.avif";
import Table from "./Table";
import { Button } from "@material-tailwind/react";
import LineChart from "./LineChart";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Navbar />

      <div className="h-screen w-screen flex px-10" style={backgroundStyle}>
        <div className="w-2/3 pt-52 text-center text-7xl text-indigo-900">
          {/* <SpeechToText /> */}
          Analyse Call
          <div className="px-5 pt-4">
            <Button className="bg-indigo-900 text-lg">Upload</Button>
            <Button className="bg-indigo-900 ml-4 text-lg">Record</Button>
          </div>
          <div className="flex justify-center items-center pt-24">
            <LineChart />
          </div>
        </div>
        <div className="w-1/3 m-0 pt-24 ">
          <PieChart />

          <div className="justify-end items-center text-center pt-10 text-2xl">
            History
            <div className="pt-5"></div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
