import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import giantSycuresImage from "./Photos/giantSycures.png";
import SycuresLogoLogin from "./Photos/SycuresLogoLogin.png";
import RobotLogin from "./Photos/robotLogin.png";
import RobotLoginArm from "./Photos/robotLoginArm.png";

function LoginForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalAlreadyUse, setShowModalAlreadyUse] = useState(false);
  const [showModalInvalid, setShowModalInvalid] = useState(false);
  const [showModalLoginSuccess, setShowModalLoginSuccess] = useState(false);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleButtonClick = (destination) => {
    navigate(destination);
  };

  const Login = ({ onRegisterClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:4000/api/user/login",
          {
            email: email,
            password: password,
          }
        );

        const savedUser = response.data;

        setShowModalLoginSuccess(true);
        setTimeout(() => {
          navigate(`/category-selection/${savedUser._id}`);
        }, 1000);
      } catch (error) {
        setShowModalInvalid(true);
      }
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label htmlFor="email" className="label-email">
              Enter your Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder={"Enter your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-style-email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="label-password">
              Enter your Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder={"Enter your password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-style-password"
              required
            />
          </div>
          <button className="start-button-style-login" type="submit">
            Login
          </button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <p className="p-login">
          Don't have an account?{" "}
          <u>
            <b className="b-register" onClick={onRegisterClick}>
              Register
            </b>
          </u>
        </p>
      </>
    );
  };

  const Register = () => {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !birthDate || !email || !password) {
        setShowModalInvalid(true);
        return;
      }
      try {
        const age = calculateAge(birthDate);
        const response = await axios.post(
          "http://localhost:4000/api/user/register",
          {
            name: name,
            age: age,
            email: email,
            password: password,
          }
        );

        const savedUser = response.data;

        console.log("Register Successful!");
        console.log("User details:", {
          _id: savedUser._id,
        });

        setShowModalRegister(true);
        setActiveTab("login");
      } catch (error) {
        setShowModalAlreadyUse(true);
      }
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="label-name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder={"Enter your name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-style-name"
              required
            />
            <div>
              <label htmlFor="birthDate" className="label-age">
                Birth Date:
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="input-style-age"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="label-regEmail">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder={"Enter your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-style-regEmail"
                required
              />
            </div>
            <div>
              <label htmlFor="regPassword" className="label-regPass">
                Password:
              </label>
              <input
                type="password"
                id="regPassword"
                value={password}
                placeholder={"Enter your password"}
                onChange={(e) => setPassword(e.target.value)}
                className="input-style-regPass"
                required
              />
            </div>
            <button
              className="start-button-style-login"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </>
    );
  };

  const handleRegisterSuccess = () => {
    setShowModalRegister(true);
  };

  const handleAlreadyUse = () => {
    setShowModalRegister(true);
  };

  return (
    <div className="containerLogin">
      <div className="upper-box">
        <img
          src={SycuresLogoLogin}
          alt="Sycures Logo Login"
          className="sycures-logo-login"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="lower-box">
        <div>
          <button
            className="button-about-login"
            onClick={() => handleButtonClick("/about")}
          >
            {" "}
            ABOUT
          </button>
          <button
            className="button-help-login"
            onClick={() => handleButtonClick("/help")}
          >
            {" "}
            HELP
          </button>
          <button
            className="button-contact-login"
            onClick={() => handleButtonClick("/contact")}
          >
            CONTACT
          </button>
        </div>
        <img
          src={giantSycuresImage}
          alt="Giant Sycures"
          className="giant-sycures"
        />
        <div className="black-box"></div>
        <div className="darkblue-box">
          <div>
            <div className="login-register-container">
              <button
                className={`login-register-button ${
                  activeTab === "login" && "active"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`login-register-button ${
                  activeTab === "register" && "active"
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
            </div>
            <div className="login-register-container">
              <div className={`fade-${activeTab === "login" ? "in" : "out"}`}>
                {activeTab === "login" && (
                  <Login onRegisterClick={() => setActiveTab("register")} />
                )}
              </div>
              <div
                className={`fade-${activeTab === "register" ? "in" : "out"}`}
              >
                {activeTab === "register" && (
                  <Register onSuccess={handleRegisterSuccess} />
                )}
              </div>
            </div>
          </div>
          <img src={RobotLogin} alt="robot login" className="robot-login" />
          <div className="blinking-eye-left"></div>
          <div className="blinking-eye-right"></div>
          <img
            src={RobotLoginArm}
            alt="Robot Login Right Arm"
            className="robot-login-rightarm"
          ></img>
          <img
            src={RobotLoginArm}
            alt="Robot Login Left Arm"
            className="robot-login-leftarm"
          ></img>
        </div>
      </div>
      {showModalRegister && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModalRegister(false)}>
              &times;
            </span>
            <p>Registration Successful! You can now login.</p>
          </div>
        </div>
      )}
      {showModalAlreadyUse && (
        <div className="modal">
          <div className="modal-content-already-use">
            <span
              className="close"
              onClick={() => setShowModalAlreadyUse(false)}
            >
              &times;
            </span>
            <p>Email is already in use. Please try another.</p>
          </div>
        </div>
      )}
      {showModalInvalid && (
        <div className="modal">
          <div className="modal-content-invalid">
            <span className="close" onClick={() => setShowModalInvalid(false)}>
              &times;
            </span>
            <p>Invalid email and password. Try again.</p>
          </div>
        </div>
      )}
      {showModalLoginSuccess && (
        <div className="modal">
          <div className="modal-content-loginsuccess">
            <span
              className="close"
              onClick={() => setShowModalLoginSuccess(false)}
            >
              &times;
            </span>
            <p>Login successful.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const month = today.getMonth() - birthDateObj.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
}

export default LoginForm;
