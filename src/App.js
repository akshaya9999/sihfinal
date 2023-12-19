import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SpeechToText from "./Components/SpeechToText";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech" element={<SpeechToText />} />
      </Routes>
    </div>
  );
}

export default App;
