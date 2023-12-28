import React from "react";
import { Avatar } from "keep-react";

const UpcomingMoviesCard = () => {
  return (
    <div className="flex items-center justify-evenly border w-72 my-4">
      <Avatar shape="circle" size="xl" img="/images/avatar/avatar-4.png" />
      <div>
        <h2>Name</h2>
        <span>Date</span>
      </div>
      <button>hello</button>
    </div>
  );
};

export default UpcomingMoviesCard;
