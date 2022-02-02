// npm imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// style imports
import "../App.css"

const initialCredentials = {
  username: "",
  password: "",
  role: "",
};

const Login = (props) => {
  
  const [credentials, setCredentials] = useState(initialCredentials);
  const push = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const appLogin = (e) => {
    console.log(credentials)
    e.preventDefault();
    axios.post(`https://africanmarketplace-backend.herokuapp.com/api/auth/login`, credentials
      ).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/itemslist", {replace: true});
      }).catch((error) => {
        console.log(error.message);
      })
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
