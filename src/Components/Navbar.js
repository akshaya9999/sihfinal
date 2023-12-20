import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/config";
const auth = getAuth(app);
function Navabar() {
  return (
    <div>
      <div className="w-screen flex h-20 z-50 bg-indigo-900 fixed drop-shadow-lg justify-end items-center px-10 text-white text-lg">
        {auth.currentUser.email}
        <IoPersonCircleOutline style={{ color: "white", fontSize: "70px" }} />
      </div>
    </div>
  );
}

export default Navabar;
