import React, { useEffect, useContext } from "react";
import MoviesContext from "../context/MovieContext";

import { useNavigate } from "react-router-dom";
const Protected = ({ ProtectRoute }) => {
  let { isLoggedIn } = useContext(MoviesContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <ProtectRoute />
    </>
  );
};

export default Protected;
