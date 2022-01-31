import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
import axiosWithAuth from "../utils/axiosWithAuth";

const initialCredentials = {
  username: "",
  password: "",
  role: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  let history = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const appLogin = (e) => {
    e.preventDefault();
    axiosWithAuth.post("/login", credentials).then((res) => {
      console.log(res);
      // const { token, username, role } = res.data;
      // localStorage.setItem("token", token);
      // localStorage.setItem("username", username);
      // localStorage.setItem("role", role);

      history.push("/itemslist");
    });
  };



  return (
    <div className="box-container">
      <h2>Login</h2>
      <form onSubmit={appLogin} className="ui form">
        <div className="field">

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        </div>
        <div className="field">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        </div>
        <button className="large ui inverted green button">Submit</button>
        <a href="/register" className="register">Create a new account</a>
      </form>
    </div>
  );
};

export default Login;
