import React, { useState } from "react";
import LoginImage from "../assets/LoginImage.png";
import { auth } from "../Firebase/Firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Layout from "../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
const AdminLogin = () => {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [loginSpinner, setLoginSpinner] = useState("Login");

  const signIn = (e) => {
    setLoginSpinner(
      <TailSpin
        height="20"
        width="20"
        color="#FFF"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <div className="w-4/5 center-div h-96 flex items-center justify-center">
        <div className="w-96">
          <form onSubmit={signIn}>
            <h2 className="text-2xl pb-5">Login To Dashboard</h2>
            <div className="my-4">
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
                className="outline-none rounded bg-slate-800 border border-gray-500 w-11/12 py-1 px-2"
              />
            </div>
            <div className="my-4">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
                className="outline-none rounded bg-slate-800 border border-gray-500 w-11/12 py-1 px-2"
              />
            </div>
            <button className="py-1 px-4 bg-blue-600 my-1 rounded-full w-32 text-center">
              {loginSpinner}
            </button>
          </form>
        </div>
        <div className="w-96 max-md:hidden">
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;
