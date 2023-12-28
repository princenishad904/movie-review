import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Spinner } from "keep-react";
import Loader from "./Loader";

const MoviesCard = ({ south, category }) => {
  return (
    <div
      className="w-11/12
     my-3 mx-auto h-72 max-md:h-56"
    >
      <div className="w-full relative">
        <Link to={`/movies/${category}`}>
          <button className="p-2 text-xl  flex items-center gap-2 capitalize">
            {category} <IoIosArrowForward />
          </button>
        </Link>
        {south == "" ? (
          <Loader />
        ) : (
          <div className="w-full mx-auto max-md:w-full horizantalScroll  whitespace-nowrap overflow-x-scroll overflow-y-hidden select-none relative">
            {south.map((s) => {
              return (
                <div
                  className="w-44 hover:scale-110 transition h-56 truncate inline-block mx-2 max-md:w-28 max-md:h-40"
                  key={s.id}
                >
                  <Link to={`/movie/${s.id}`}>
                    <img src={s.poster} className="w-full h-full " alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesCard;
