import React from "react";

const UpcomingFilm = ({ children }) => {
  return (
    <div className="w-80 border px-3">
      <h1 className="text-xl my-2">Upcoming Movies</h1>
      {children}
    </div>
  );
};

export default UpcomingFilm;
