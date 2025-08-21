import React from "react";
import "./Loader.css";
import { BounceLoader } from "react-spinners";

const Loader = () => (
  <div className="loader-overlay">
  <BounceLoader color="#df2e21" />
    {/* <div className="loader-text">Loading portfolio...</div> */}
  </div>
);

export default Loader;
