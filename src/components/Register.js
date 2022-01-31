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
  let history = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const appLogin = (e) => {
    e.preventDefault();
    axios.post("", credentials).then((res) => {
      console.log(res);
      const { token, username, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);

      history.push("/itemslist");
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
        <select name="role" class="ui selection dropdown">
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
