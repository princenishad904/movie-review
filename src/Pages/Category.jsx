import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import MoviesContext from "../context/MovieContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { DB } from "../Firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Loader from "../Components/Loader";

const Category = () => {
  let { moviesData } = useContext(MoviesContext);
  let { type } = useParams();
  let allQueries = [];
  const [filterData, setFilterData] = useState("");

  const getQueres = async () => {
    allQueries = [];
    const categoryRef = collection(DB, "main_collection");
    const q = query(categoryRef, where("category", "==", type));
    const d = await getDocs(q);

    d.forEach((e) => {
      allQueries.push(e.data());
    });

    setFilterData(allQueries);
  };
  useEffect(() => {
    getQueres();
  }, []);

  return (
    <Layout>
      <div>
        {filterData == "" ? (
          <Loader />
        ) : (
          <div className="w-11/12 mx-auto grid grid-cols-3 mt-14 place-content-center place-items-center gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filterData.map((e) => (
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
                  <h1 className="text-md text-gray-300 px-1 font-xl">{type}</h1>
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
                      defaultValue={e.rating}
                      className="text-white"
                    />
                  </Stack>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
