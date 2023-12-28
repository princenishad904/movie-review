import React from "react";

const BackgroundStyle = ({ children }) => {
  return (
    <div className="w-full overflow-hidden bg-slate-900">
      <div className="w-full h-screen fixed top-0 overflow-y-scroll text-white  backdrop-blur-3xl ">
        {children}
      </div>
      <div className="w-full h-screen flex items-center justify-center max-md:flex-col">
        <div className="w-96 rotate-45 shadow-3xl max-md:rotate-0 max-md:w-0 max-md:absolute max-md:top-20 max-md:left-0"></div>
        <div className="w-96 rotate-45 shadow-3xl max-md:rotate-0 max-md:w-0"></div>
      </div>
    </div>
  );
};

export default BackgroundStyle;
