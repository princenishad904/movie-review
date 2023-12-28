import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center border rounded-md overflow-hidden justify-center w-4/12 bg-slate-700 max-lg:w-6/12 max-sm:absolute max-sm:top-14 max-sm:left-0 max-sm:rounded-none max-sm:w-full max-sm:mr-2 ">
      <select className="bg-slate-700 h-9 w-14 text-ellipsis outline-none">
        <option value="all">All</option>
        <option value="all">Drama</option>
        <option value="all">Comedy</option>
        <option value="all">Thriller</option>
        <option value="all">physco</option>
      </select>
      <input
        type="search"
        placeholder="Search Movies"
        className="outline-none  py-1 w-full px-2 bg-slate-700 h-9"
      />
      <button>
        <IoSearchSharp className="text-2xl mx-2" />
      </button>
    </div>
  );
};

export default SearchBar;
