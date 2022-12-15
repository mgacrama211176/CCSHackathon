import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const dashboardContainer = {
  displayFLex: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#DC3545",
  height: "100vh",
};

const HomePage = () => {
  return (
    <div
      style={dashboardContainer}
      className="d-flex container-fluid flex-column align-content-center justify-content-center"
    >
      <h1 className="display-4 text-white text-monospace text-center">
        USPF VEHICLE PARKING LOCATOR
      </h1>
      <img src={Logo} alt="Logo" className="img-fluid" />
      <Link to={"/login"}>
        <button type="button" className="btn btn-outline-light">
          LOGIN
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
