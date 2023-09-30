import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LogReg.css";

function EditProfile() {
  const history = useNavigate();

  const [phone, setPhone] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  const [phoneError, setPhoneError] = React.useState("");

  const validatePhone = () => {
    if (phone.length === 0) {
      return true;
    } else if (!phone.match(/^[0-9]{10}$/)) {
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
      history("/home", { state: { id: "ank@gmail.com", name: "Ankita" } });
      // try {
      //   await axios
      //     .post("http://localhost:8000/", {
      //       email,
      //       password,
      //     })
      //     .then((res) => {
      //       if (res.data === "exist") {
      //         history("/home", { state: { id: email } });
      //       } else if (res.data === "notexist") {
      //         alert("User have not sign up");
      //       }
      //     })
      //     .catch((e) => {
      //       alert("wrong details");
      //       console.log(e);
      //     });
      // } catch (e) {
      //   console.log(e);
      // }
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
