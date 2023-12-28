import React, { useContext, useState } from "react";
import Layout from "../Components/Layout/Layout";
import MoviesCard from "../Components/MoviesCard";
import MoviesContext from "../context/MovieContext";
import UpcomingMovies from "../Components/UpcomingMovies";

const Home = () => {
  let { moviesData } = useContext(MoviesContext);

  let s = moviesData.filter((e) => e.category == "south");
  let a = moviesData.filter((e) => e.category == "action");
  let d = moviesData.filter((e) => e.category == "drama");
  let th = moviesData.filter((e) => e.category == "thriller");
  let h = moviesData.filter((e) => e.category == "hollywood");

  return (
    <Layout>
      {/* first page Design  */}
      <div className="w-11/12 max-sm:w-full mx-auto text-center my-14 py-4 grid place-items-center">
        <h1 className="text-6xl max-md:text-5xl px-1 max-sm:text-4xl">
          India's Best Movie Reviewing <br /> Platform
        </h1>

        <p className="w-6/12 text-md max-md:w-11/12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores nam
          corporis ea nihil distinctio officiis unde magni. Nam, accusamus
          nihil?
        </p>

        <div className="w-6/12 mx-auto mt-5 max-md:w-full">
          <h2 className="text-start text-2xl my-2 p-2">Upcoming Movie</h2>
          <table className="table-auto w-11/12 mx-auto">
            <thead>
              <tr>
                <th className="text-start px-2">Movie Name</th>
                <th className="text-start px-2">Releasing Date</th>
                <th className="text-start px-2">Trailer</th>
              </tr>
            </thead>
            <tbody>
              <UpcomingMovies />
            </tbody>
          </table>
        </div>
      </div>
      {/* comedy Data */}

      <MoviesCard south={s} category={"south"} />
      <MoviesCard south={a} category={"action"} />
      <MoviesCard south={d} category={"drama"} />
      <MoviesCard south={th} category={"thriller"} />
      <MoviesCard south={h} category={"hollywood"} />
    </Layout>
  );
};

export default Home;
