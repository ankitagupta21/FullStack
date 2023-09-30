import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LogReg.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Please enter password");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password should be atleast 6 characters long");
      return false;
    } else if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
    ) {
      setPasswordError(
        "Password should contain atleast one uppercase, one lowercase, one special character and one number"
      );
      return false;
    }
    return true;
  };
  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter email");
      return false;
    } else if (
      !email.match(
        /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ //eslint-disable-line
      )
    ) {
      setEmailError("Please enter valid email");
      return false;
    }
    return true;
  };

  async function submit(e) {
    e.preventDefault();
    let isValid = true;
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    if (!isValidEmail || !isValidPassword) {
      isValid = false;
    }
    if (isValid) {
      history("/home", { state: { id: email, name: "Ankita" } });
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
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <form action="POST">
          <div className="input">
            <i className="fa fa-envelope icon"></i>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email Address"
            />
          </div>
          {emailError && <div className="error">{emailError}</div>}
          <div className="input">
            <i className="fa fa-lock icon"></i>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            {showPassword ? (
              <i
                className="fa fa-eye-slash icon"
                onClick={() => {
                  setShowPassword(false);
                }}
              ></i>
            ) : (
              <i
                className="fa fa-eye icon"
                onClick={() => {
                  setShowPassword(true);
                }}
              ></i>
            )}
          </div>
          {passwordError && <div className="error">{passwordError}</div>}
          <div className="forgot-password">
            Lost your password?{" "}
            <Link to="/resetPassword" className="link">
              Click here!
            </Link>
          </div>
          <div className="submit-container">
            <div className="submit">
              <input type="submit" onClick={submit} value="Log In" />
            </div>
            <div className="change">
              <Link to="/register" className="link">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
