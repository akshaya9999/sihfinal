import React from "react";
import Navabar from "./Navbar";
import EmployerTable from "./EmployerTable";
import bgimage from "../assets/bg3.avif";
import { Button } from "@material-tailwind/react";
import ChartComponent from "./EmployeeBarGraph";

function Employer() {
    const backgroundStyle = {
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div>
    <Navabar/>
    <div className="h-screen w-screen flex " style={backgroundStyle}>
    <div className="pt-32 px-20 text-3xl text-indigo-900">
        Top employee: Akshaya Krishnan
        
    <div className="pt-20">
    <ChartComponent/>
    </div>
    </div>
    
    <div className="flex justify-center items-center px-20">
      <EmployerTable/></div>
    </div>
    </div>
  );
}

export default Employer;
