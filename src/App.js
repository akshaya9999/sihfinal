import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SpeechToText from "./Components/SpeechToText";
import Employer from "./Components/Employer";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech" element={<SpeechToText />} />
        <Route path="/employer" element={<Employer />} />
      </Routes>
    </div>
  );
}

export default App;
