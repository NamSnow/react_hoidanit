import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postSignup } from "../../services/apiServices";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Language from "../Header/Language";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleSignup = async () => {
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }

    if (!password) {
      toast.error("Invalid Password");
      return;
    }

    let data = await postSignup(email, password, username);
    console.log(data, data, data.EC);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>You have an account yet?</span>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <Language />
      </div>

      <div className="title col-4 mx-auto">HoiDanIT</div>

      <div className="welcome col-4 mx-auto">Hello, who's this?</div>

      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email (*)</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type={"username"}
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password (*)</label>
          <div className="position-relative">
            <input
              type={isShowPassword ? "text" : "password"}
              className="form-control pe-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isShowPassword ? (
              <FaEye
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleIsShowPassword()}
              />
            ) : (
              <FaEyeSlash
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleIsShowPassword()}
              />
            )}
          </div>
        </div>

        <button className="btn-submit" onClick={() => handleSignup()}>
          Signup
        </button>

        <div className="text-center">
          <span
            onClick={() => {
              navigate("/");
            }}
            className="back"
          >
            &#60;&#60; Go to homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
