import React from "react";
import loaderGif from "../assests/loader.gif"; // Adjust the path based on your project structure

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
