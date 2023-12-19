import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;