import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Loader from "./Loader";
import useFetch from "../Admin/AdminComponenets/Database";

const AllMoviesCard = () => {
  const [allData] = useFetch("main_collection");

  // console.log(allData);

  return (
    <div>
      {allData == "" ? (
        <Loader />
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-3 mt-14 place-content-center place-items-center gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {allData.map((e) => (
            <div
              className="w-80 h-56 flex  hover:scale-105 transition capitalize justify-center "
              key={e.id}
            >
              <div className="w-48 h-56 max-sm:w-36 border border-cyan-200 rounded-md overflow-hidden">
                <Link to={`/movie/${e.id}`}>
                  <img src={e.poster} className="w-full h-full" alt="" />
                </Link>
              </div>
              <div className="w-40 h-56 py-2 px-2">
                <h1 className="text-2xl px-1 font-xl truncate text-ellipsis">
                  {e.title}
                </h1>
                <h1 className="text-md text-gray-300 px-1 font-xl">
                  {e.videoLength} Hours
                </h1>
                <h1 className="text-md text-gray-300 px-1 font-xl">south</h1>
                <h1 className="text-md text-gray-300 px-1 font-xl">
                  Release <span>{e.releaseDate}</span>
                </h1>
                <h1 className="text-md text-gray-300 px-1 font-xl">
                  director {e.director}
                </h1>
                <h1>{e.likes} Likes</h1>
                <Stack spacing={1}>
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    className="text-white"
                  />
                </Stack>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMoviesCard;
