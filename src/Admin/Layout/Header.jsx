import React from "react";
import Profile from "../AdminComponenets/Profile";

const Header = () => {
  return (
    <div className="sticky z-30 bg-slate-100 top-0 shadow-md">
      <nav className="w-full h-14 flex items-center justify-between px-4">
        <div className="w-32 h-12 text-gray-800 grid place-items-center text-xl">
          Prince Nishad
        </div>
        <div className="w-20 h-12">
          <Profile />
        </div>
      </nav>
    </div>
  );
};

export default Header;
