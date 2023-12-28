import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../Firebase/Firebase";
import Loader from "../Components/Loader";

const MovieDetails = () => {
  let { id } = useParams();

  let data;
  let [title, setTitle] = useState("");
  let [poster, setPoster] = useState("");
  let [time, setTime] = useState("");
  let [director, setDirector] = useState("");
  let [description, setDescription] = useState("");

  useEffect(() => {
    const findById = async () => {
      const docSnap = await getDoc(doc(DB, "main_collection", id));
      if (docSnap.exists()) {
        data = docSnap.data();
        setTitle(data.title);
        setPoster(data.poster);
        setTime(data.videoLength);
        setDirector(data.director);
        setDescription(data.description);
      } else {
        console.log("data is not exist");
      }
    };

    findById();
  }, []);

  return (
    <Layout>
      <div className="w-full">
        {poster ? (
          <div className="w-11/12 mx-auto flex justify-around max-md:flex-col max-md:gap-3 gap-6">
            <div className="w-80 max-sm:w-full max-sm:h-64 h-96">
              <img src={poster} className="h-96  max-sm:h-64" alt="" />
            </div>
            <div className="w-4/5 max-sm:w-full py-3 max-sm:py-0 px-4">
              <h1 className="text-3xl">{title}</h1>
              <ul className="my-4 max-sm:my-2">
                <li className="border-b w-96 py-2 max-md:w-full">
                  {time} Hours
                </li>
                <li className="border-b w-96 py-2 max-md:w-full">{director}</li>
                <li className="border-b w-96 py-2 max-md:w-full">
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    className="text-white"
                  />
                </li>
              </ul>
              <p>{description}</p>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
};

export default MovieDetails;
