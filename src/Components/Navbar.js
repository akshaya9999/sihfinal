import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/config";

const auth = getAuth(app);

function Navbar() {
  return (
    <div>
      <div className="w-screen flex h-20 z-50 bg-indigo-900 fixed drop-shadow-lg justify-between items-center px-10 text-white text-lg">
        <p className="text-3xl font-bold font-serif">DIGITAL DEFENDERS</p>
        {auth.currentUser.email && (
          <div className="flex items-center">
            {auth.currentUser.email}
            <IoPersonCircleOutline style={{ color: "white", fontSize: "70px", marginLeft: "10px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
