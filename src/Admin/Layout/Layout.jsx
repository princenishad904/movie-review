import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{ minHeight: "80vh" }}
        className="w-full bg-slate-100 text-gray-900"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
