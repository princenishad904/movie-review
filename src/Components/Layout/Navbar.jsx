import React, { useState } from "react";
import SearchBar from "../NavComponenets/SearchBar";
import MenuBar from "../NavComponenets/MenuBar";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { PiFilmSlateLight } from "react-icons/pi";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className="w-full sticky top-0 max-sm-border-b max-sm:py-2 h-14 flex justify-between items-center px-3 backdrop-blur-md z-30 mybgColor">
        <div className="w-36 h-10 grid place-items-center ">
          <h2 className="text-center text-5xl text-cyan-300">
            <PiFilmSlateLight />
          </h2>
        </div>
        {/* <SearchBar /> */}
        <MenuBar toggle={sidebar} />
        <button
          onClick={() => setSidebar(!sidebar)}
          className="text-2xl hidden max-lg:block"
        >
          {sidebar ? <HiMiniBars3 /> : <RxCross2 />}
        </button>
      </div>
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;
