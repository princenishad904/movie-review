import React, { useState, useRef, useEffect } from "react";
import Layout from "./Layout/Layout";
import { DB } from "../Firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Dropdown } from "keep-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadMovie = () => {
  let formRef = useRef();
  const [collectioName, setCollectionName] = useState("choose Collection");

  let [formData, setFormData] = useState({
    title: "",
    poster: "",
    trailer: "",
    videoLength: "",
    director: "",
    writer: "",
    releaseDate: "",
    category: "",
    rating: "",
    likes: "",
    description: "",
  });

  const chooseCollection = (whichCollection) => {
    setCollectionName(whichCollection);
  };

  const uploadMovie = async (e) => {
    e.preventDefault();
    let docId = uuidv4();
    let id = {
      id: docId,
    };

    await setDoc(doc(DB, collectioName, docId), { ...formData, ...id });
    toast("Uploaded Successfuly");
    formRef.current.reset();
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="w-4/5 max-md:w-full mx-auto max-md:px-4 py-4">
        <h1 className="text-2xl">Upload Movie</h1>
        <div className="w-full">
          <Dropdown
            label={collectioName}
            size="sm"
            type=""
            dismissOnClick={true}
            className="border border-purple-800 text-purple-800 my-4 bg-purple-200"
          >
            <Dropdown.Item onClick={() => chooseCollection("movies_data")}>
              Home Collection
            </Dropdown.Item>
            <Dropdown.Item onClick={() => chooseCollection("main_collection")}>
              Main Collection
            </Dropdown.Item>
            <Dropdown.Item onClick={() => chooseCollection("upcoming_movies")}>
              Upcomin Collection
            </Dropdown.Item>
          </Dropdown>
        </div>

        <form
          ref={formRef}
          onSubmit={uploadMovie}
          className="w-full flex max-md:flex-col my-2"
        >
          <div className="w-3/5 max-md:w-full">
            <div className="my-3">
              <label htmlFor="title">Title</label> <br />
              <input
                type="text"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-4/5 max-md:w-full outline-none border border-purple-300 rounded py-1 px-2"
              />
            </div>
            <div className="my-3">
              <label htmlFor="poster">Post URL</label> <br />
              <input
                type="url"
                onChange={(e) =>
                  setFormData({ ...formData, poster: e.target.value })
                }
                autoComplete="off"
                className="w-4/5 max-md:w-full outline-none border border-purple-300 rounded py-1 px-2"
              />
            </div>
            <div className="my-3">
              <label htmlFor="trailer">Trailer Link</label> <br />
              <input
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, trailer: e.target.value })
                }
                autoComplete="off"
                className="w-4/5 max-md:w-full outline-none border border-purple-300 rounded py-1 px-2"
              />
            </div>

            <div className="w-4/5 max-md:w-full grid grid-cols-2 gap-x-4">
              <div className="my-3">
                <label htmlFor="title">Movie Time</label> <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, videoLength: e.target.value })
                  }
                  autoComplete="off"
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                />
              </div>
              <div className="my-3">
                <label htmlFor="director">Director</label> <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, director: e.target.value })
                  }
                  autoComplete="off"
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                />
              </div>
              <div className="my-3">
                <label htmlFor="writer">Writer</label> <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, writer: e.target.value })
                  }
                  autoComplete="off"
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                />
              </div>
              <div className="my-3">
                <label htmlFor="releaseDate">ReleaseDate</label> <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, releaseDate: e.target.value })
                  }
                  autoComplete="off"
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                />
              </div>
              <div className="my-3">
                <label htmlFor="category">Category</label> <br />
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                >
                  <option value="comedy">Comedy</option>
                  <option value="horror">Horror</option>
                  <option value="south">South</option>
                  <option value="crime">Crime</option>
                  <option value="action">Action</option>
                  <option value="thriller">Triller</option>
                  <option value="drama">drama</option>
                  <option value="hollywood">Hollywood</option>
                </select>
              </div>
              <div className="my-3">
                <label htmlFor="rating">Rating</label> <br />
                <input
                  type="number"
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  autoComplete="off"
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                />
              </div>
              <div className="my-3">
                <label htmlFor="likes">Likes</label> <br />
                <input
                  type="number"
                  onChange={(e) =>
                    setFormData({ ...formData, likes: e.target.value })
                  }
                  autoComplete="off"
                  className="w-full outline-none border border-purple-300 rounded py-1 px-2"
                />
              </div>
            </div>
            <div className="my-3">
              <label htmlFor="description">Description</label> <br />
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-4/5 max-md:w-full h-44 outline-none border border-purple-300 rounded py-1 px-2"
              ></textarea>
            </div>
          </div>
          <div className="w-2/5  flex flex-col items-center gap-4 ">
            <div className="w-72 h-72 my-14 max-md:hidden">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/525/747/small_2x/download-and-upload-data-3d-icon-illustration-png.png"
                alt=""
              />
            </div>
            <button
              type="submit"
              className="py-1 px-2 mx-auto border bg-purple-600 text-gray-100 w-56 rounded-md"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UploadMovie;
