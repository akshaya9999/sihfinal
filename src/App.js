import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SpeechToText from "./Components/SpeechToText";
import Employer from "./Components/Employer";
import Login from "./Components/Authentication/Login/Login";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/speech" element={<SpeechToText />} />
        <Route path="/employer" element={<Employer />} />
      </Routes>
    </div>
  );
}

export default App;
