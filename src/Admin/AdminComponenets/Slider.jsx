import React, { useEffect, useState } from "react";
import MoviesType from "./MoviesType";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = ({ allPosts }) => {
  let south = allPosts.filter((items) => items.category == "south");
  let action = allPosts.filter((items) => items.category == "action");
  let crime = allPosts.filter((items) => items.category == "crime");
  let horror = allPosts.filter((items) => items.category == "horror");
  let comedy = allPosts.filter((items) => items.category == "comedy");
  let thriller = allPosts.filter((items) => items.category == "thriller");
  let hollywood = allPosts.filter((items) => items.category == "hollywood");
  let drama = allPosts.filter((items) => items.category == "drama");

  return (
    <div className="w-full flex flex-wrap  gap-4">
      <MoviesType south={south} type={"south"} bgColor={"00B7EB"} />
      <MoviesType south={action} type={"action"} bgColor={"737AFE"} />
      <MoviesType south={crime} type={"crime"} bgColor={"B173FE"} />
      <MoviesType south={horror} type={"horror"} bgColor={"000"} />
      <MoviesType south={comedy} type={"comedy"} bgColor={"FE73C0"} />
      <MoviesType south={thriller} type={"thriller"} bgColor={"191970"} />
      <MoviesType south={hollywood} type={"hollywood"} bgColor={"FF5F1F"} />
      <MoviesType south={drama} type={"drama"} bgColor={"800080"} />
    </div>
  );
};

export default Slider;
