import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import UpcomingFilm from "./AdminComponenets/UpcomingFilm";
import UpcomingMoviesCard from "./AdminComponenets/UpcomingMoviesCard";
import Slider from "./AdminComponenets/Slider";
import Table from "./AdminComponenets/Table";
import useFetch from "./AdminComponenets/Database";
import { doc, deleteDoc } from "firebase/firestore";
import { DB } from "../Firebase/Firebase";
import DeleteComfirmationPopup from "./AdminComponenets/DeleteComfirmationPopup";
import { ToastContainer, toast } from "react-toastify";
import { Trash } from "phosphor-react";

const Admin = () => {
  const [data] = useFetch("main_collection");
  // const [homeData] = useFetch("movies_data");
  const allData = data;
  const [showModal, setShowModal] = useState(false);
  const [itemsId, setItemsId] = useState(null);
  const [loader, setLoader] = useState(false);

  const deleteMovie = (id) => {
    setItemsId(id);
    setShowModal(true);
  };
  const cancelDelation = () => {
    setShowModal(false);
  };
  const comfirmToDelate = async () => {
    setLoader(true);

    await deleteDoc(doc(DB, "main_collection", itemsId));

    setShowModal(false);
    setLoader(false);
    toast.success("Lorem ipsum dolor", {
      position: "top-center",
    });
  };

  return (
    <Layout>
      <div className="w-full border">
        <ToastContainer position="fixed" />
        <DeleteComfirmationPopup
          showModal={showModal}
          cancelDelation={cancelDelation}
          comfirmToDelate={comfirmToDelate}
          loader={loader}
          itemsId={itemsId}
        />

        {/* this div is for slider */}
        <h2 className="text-xl py-1 px-3">Dashbaord</h2>
        <Slider allPosts={allData} />
        {/* <div className="w-4/5 h-44 mx-auto border max-md:w-full border-gray-800 my-6"></div> */}

        <div className="w-full max-md:overflow-x-scroll">
          <h2 className="text-xl py-1 px-3 my-4 text-center">All movies</h2>

          <Table>
            {allData.map((items) => {
              return (
                <tr key={items.id}>
                  <td className="h-14 border-b">
                    <img
                      src={items.poster}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </td>
                  <td className="h-14 border-b text-gray-500">{items.title}</td>
                  <td className="h-14 border-b text-gray-500 truncate text-ellipsis">
                    {items.id}
                  </td>
                  <td className="h-14 border-b text-gray-500">Hello</td>
                  <td className="h-14 border-b flex items-center gap-3 text-gray-500">
                    <button
                      onClick={() => deleteMovie(items.id)}
                      className="w-8 h-8  grid place-items-center rounded-full bg-red-100 text-red-700 text-center  border"
                    >
                      <Trash />
                    </button>
                    <button className="w-8 h-8 grid place-items-center bg-purple-200 text-purple-700 rounded-full  border">
                      E
                    </button>
                  </td>
                </tr>
              );
            })}
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
