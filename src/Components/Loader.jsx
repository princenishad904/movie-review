import React from "react";
import { Spinner } from "keep-react";

const Loader = () => {
  return (
    <div className="center-div">
      <Spinner color="warning" size="lg" />
    </div>
  );
};

export default Loader;
