import React, { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { DB } from "../Firebase/Firebase";

const MovieProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  let moviesArr = [];

  async function getMoviesData() {
    moviesArr = [];
    const allMovie = await getDocs(collection(DB, "main_collection"));
    allMovie.forEach((items) => {
      moviesArr.push(items.data());
    });
    setMoviesData(moviesArr);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <MovieContext.Provider value={{ moviesData, isLoggedIn }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
