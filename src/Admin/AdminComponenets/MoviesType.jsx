import React from "react";

const MoviesType = ({ south, type, bgColor }) => {
  return (
    <div
      className="w-44 shadow-lg h-20 hover:scale-105 transition mt-3 cursor-pointer border max-sm:w-32 max-sm:h-16 rounded-md mx-2"
      style={{ backgroundColor: `#${bgColor}` }}
    >
      <div className="w-44  h-20 max-sm:w-32 max-sm:h-16 flex items-center justify-around">
        <div className="w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full grid place-items-center">
          <h1 className="capitalize text-3xl max-sm:text-md font-normal text-white">
            {type[0]}
          </h1>
        </div>
        <div>
          <h2 className="text-xl max-sm:text-md  text-white">
            <span className="text-2xl max-sm:text-xl font-semibold">
              {south.length}
            </span>{" "}
            Posts
          </h2>
          <span className="block text-md max-sm:text-sm capitalize text-gray-100">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoviesType;
