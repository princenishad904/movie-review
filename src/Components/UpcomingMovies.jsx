import React, { useEffect } from "react";
import useFetch from "../Admin/AdminComponenets/Database";

const UpcomingMovies = () => {
  const [comingSoon] = useFetch("upcoming_movies");

  return (
    <>
      {comingSoon.map((soon) => {
        return (
          <tr className="m-2 onActive" key={soon.id}>
            <td className="text-start px-2">{soon.title}</td>
            <td className="text-start px-2">{soon.releaseDate}</td>
            <td className="text-start px-2">Click</td>
          </tr>
        );
      })}
    </>
  );
};

export default UpcomingMovies;
