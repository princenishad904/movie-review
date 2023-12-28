import React from "react";

const Table = ({ children }) => {
  return (
    <table className="w-11/12 mx-auto border max-md:w-auto max-md:overflow-x-scroll">
      <thead className="border">
        <tr>
          <th className="text-start py-2 w-20 text-gray-500">Poster</th>
          <th className="text-start py-2 w-56 text-gray-500">Title</th>
          <th className="text-start py-2 w-72 text-gray-500">Id's</th>
          <th className="text-start py-2 w-28 text-gray-500">Publish Date</th>
          <th className="text-start py-2 w-44 text-gray-500">Delete/Remove</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
