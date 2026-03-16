import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="header"></div>

      <div className="title"></div>

      <div className="welcome"></div>

      <div className="content-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default Login;
