import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const location = useLocation();
  return (
    <div className="container">
      <div className="header">
        <div className="text">Welcome {location.state.name} !!</div>
      </div>
      <div className="inputs">
        <div className="detail">
          <div className="d-text">Email:</div>
          <div className="d-value">ankita@gmail.com</div>
        </div>
        <div className="detail">
          <div className="d-text">Phone Number:</div>
          <div className="d-value">782987923</div>
        </div>
        <div className="detail">
          <div className="d-text">Roll No.:</div>
          <div className="d-value">2000910100025</div>
        </div>
        <div className="detail">
          <div className="d-text">Branch:</div>
          <div className="d-value">CSE</div>
        </div>
        <div className="detail">
          <div className="d-text">Year:</div>
          <div className="d-value">4th</div>
        </div>
        <div className="detail">
          <div className="d-text">Section:</div>
          <div className="d-value">CS1</div>
        </div>
      </div>

      <div
        className="change"
        style={{ alignSelf: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <Link to="/editprofile" className="link">
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;
