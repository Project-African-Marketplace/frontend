// npm imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup';
import loginSchema from '../validation/loginSchema'

// style imports
import "../App.css"

const initialCredentials = {
  username: "",
  password: "",
  role: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

const Login = (props) => {
  
  const [credentials, setCredentials] = useState(initialCredentials);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const push = useNavigate();



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

  const validate = (name, value) => {
    yup.reach(loginSchema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
  }

  const handleChange = (e) => {
    validate(e.target.name, e.target.value)
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };


  console.log(formErrors)
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
        <p>{formErrors.username}</p>
        </div>
        <div className="field">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        </div>
        <button className="large ui inverted green button">Submit</button>
        <a href="/register" className="register">Create a new account</a>
      </form>
    </div>
  );
};

export default Login;
