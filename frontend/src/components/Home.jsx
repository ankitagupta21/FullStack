import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const location = useLocation();
  const email = location.state.id;
  const name = location.state.name;
  return (
    <div className="container">
      <div className="header">
        <div className="text">Welcome {location.state.name} !!</div>
      </div>
      <div className="inputs">
        <div className="detail">
          <div className="d-text">Email:</div>
          <div className="d-value">{location.state.id}</div>
        </div>
        <div className="detail">
          <div className="d-text">Phone Number:</div>
          <div className="d-value">{location.state.phoneNo}</div>
        </div>
        <div className="detail">
          <div className="d-text">Roll No.:</div>
          <div className="d-value">{location.state.rollNo}</div>
        </div>
        <div className="detail">
          <div className="d-text">Branch:</div>
          <div className="d-value">{location.state.branch}</div>
        </div>
        <div className="detail">
          <div className="d-text">Year:</div>
          <div className="d-value">{location.state.year}</div>
        </div>
        <div className="detail">
          <div className="d-text">Section:</div>
          <div className="d-value">{location.state.section}</div>
        </div>
      </div>

      <div
        className="change"
        style={{ alignSelf: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <Link
          to={{
            pathname: "/editprofile",
            state: {
              id: email,
              name: name,
            },
          }}
          className="link"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;
