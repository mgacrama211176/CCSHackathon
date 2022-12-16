import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="osahan-index bg-c d-flex align-items-center justify-content-center vh-100 index-page">
        <div className="text-center">
          <a href="/">
            <i className="icofont-bus text-white display-1 bg-danger p-4 rounded-circle"></i>
          </a><br></br>
          <div className="spinner"></div>
        </div>
      </div>
      <div className="osahan-footer fixed-bottom m-3">
        <Link to={"/getstarted"}>
          <button className="btn btn-block px-4 py-3 d-flex align-items-center osahanbus-btlan btn-danger text-white shadow">Get Started <i className="icofont-arrow-right ml-auto"></i></button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
