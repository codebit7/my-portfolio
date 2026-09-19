import React from "react";
import "./Loader.css";
import { BounceLoader } from "react-spinners";

const Loader = () => (
  <div className="loader-overlay">
  <BounceLoader color="#ef4444" />
    {/* <div className="loader-text">Loading portfolio...</div> */}
  </div>
);

export default Loader;
