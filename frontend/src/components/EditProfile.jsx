import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./LogReg.css";

function EditProfile() {
  const location = useLocation();
  console.log(location);
  const email = location.state.id;
  const name = location.state.name;
  const history = useNavigate();
  const [phoneNo, setPhone] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  const [phoneError, setPhoneError] = React.useState("");

  const validatePhone = () => {
    if (phoneNo.length === 0) {
      return true;
    } else if (!phoneNo.match(/^[0-9]{10}$/)) {
      setPhoneError("Please enter valid phone number");
      return false;
    }
    return true;
  };

  async function submit(e) {
    e.preventDefault();
    let isValid = true;
    const isValidPhone = validatePhone();
    if (!isValidPhone) {
      isValid = false;
    }
    if (isValid) {
      try {
        await axios
          .post("http://localhost:3000/editprofile", {
            email,
            phoneNo,
            rollNo,
            branch,
            year,
            section,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data === "success") {
              alert("Profile Updated");
              history("/home", {
                state: {
                  id: email,
                  name: name,
                  phoneNo: phoneNo,
                  rollNo: rollNo,
                  year: year,
                  branch: branch,
                  section: section,
                },
              });
            } else {
              console.log(res.data);
              alert("Something");
            }
          })
          .catch((e) => {
            alert("went");
            console.log(e);
          });
      } catch (e) {
        console.log(e);
        alert("wrong");
      }
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Edit Profile</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <form action="POST">
          <div className="input">
            <i className="fa fa-phone icon"></i>
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Phone Number"
            />
          </div>
          {phoneError && <div className="error">{phoneError}</div>}
          <div className="input">
            <i className="fa fa-id-card icon"></i>
            <input
              type="text"
              onChange={(e) => {
                setRollNo(e.target.value);
              }}
              placeholder="Roll No."
            />
          </div>
          <div className="input">
            <i className="fa fa-book icon"></i>
            <input
              type="text"
              onChange={(e) => {
                setBranch(e.target.value);
              }}
              placeholder="Branch"
            />
          </div>
          <div className="input">
            <i className="fa fa-calendar icon"></i>
            <input
              type="text"
              onChange={(e) => {
                setYear(e.target.value);
              }}
              placeholder="Year"
            />
          </div>
          <div className="input">
            <i className="fa fa-users icon"></i>
            <input
              type="text"
              onChange={(e) => {
                setSection(e.target.value);
              }}
              placeholder="Section"
            />
          </div>
          <div className="submit-container">
            <div className="submit">
              <input type="submit" onClick={submit} value="Save Changes" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
