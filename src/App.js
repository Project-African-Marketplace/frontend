//styling import
import "./App.css";

//npm imports
import React from "react";
import { Route, Routes } from "react-router-dom";

//component imports
import HomePage from "./components/HomePage"
import AddItem from "./components/AddItem";
import Login from "./components/Login";
import Logout from "./components/Logout";
import EditProfile from "./components/EditProfile";
import Register from "./components/Register";
import ItemsList from "./components/ItemsList";
import CategoryList from "./components/CategoryList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <h2><a href='/' className="title">African Marketplace</a></h2>
        <a href="/login" className="item">Login</a>
        <a href="/logout" className="item">Logout</a>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/profile" element={<EditProfile />} />
        <Route path="/itemslist" element={<ItemsList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route exact path="/profile" element={<PrivateRoute />}>
            <Route exact path='/profile'element={<EditProfile />}/>
        </Route>

        <Route exact path="/itemslist" element={<PrivateRoute />}>
          <Route exact path="/itemslist" element={<ItemsList />} />
       </Route>

        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default App;

