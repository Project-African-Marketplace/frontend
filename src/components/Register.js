import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialCredentials = {
  username: "",
  password: "",
  role: "",
};

const Register = (props) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const push = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const appLogin = (e) => {
    e.preventDefault();
    axios.post("https://africanmarketplace-backend.herokuapp.com/api/auth/register", credentials).then((res) => {
      console.log(res.data.username);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("role", res.data.role);
      push("./itemslist", { replace: true });
    });
  };

  return (
    <div className="box-container">
      <h2>Register</h2>
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
        <div className="field">
        <select name="role" className="ui selection dropdown">
          <option value=""></option>
          <option value="Owner">Owner</option>
          <option value="Owner">Customer</option>
        </select>
        </div>
        <button className="large ui inverted green button">Submit</button>
      </form>
    </div>
  );
};

export default Register;
