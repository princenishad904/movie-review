import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import MoviesContext from "../../context/MovieContext";

const MenuBar = ({ toggle }) => {
  let { isLoggedIn } = useContext(MoviesContext);
  return (
    <div
      className={`max-lg:w-60 max-lg:h-screen max-lg:fixed max-lg:left-0 max-lg:top-14 max-lg:bg-slate-800 max-lg:border-r max-sm:top-14 max-lg:py-6  ${
        toggle ? "myCollapse" : "myCollapseClose"
      }`}
    >
      <ul>
        <NavLink to={"/"}>
          <li className="inline-block max-lg:block p-1 onActive mx-1">Home</li>
        </NavLink>

        <NavLink to={"/all-movies"}>
          <li className="inline-block max-lg:block p-1 mx-1">All Movies</li>
        </NavLink>

        {isLoggedIn ? (
          <NavLink to={"/admin"}>
            <li className="inline-block max-lg:block p-1 mx-1">Dashboard</li>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>
            {" "}
            <li className="inline-block max-lg:block p-1 mx-1">Login</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default MenuBar;
