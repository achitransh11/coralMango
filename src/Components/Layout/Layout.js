import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NavBar from './NavBar/NavBar';
import List from "../Pages/List/List";
import {UserContext} from "../../Context/UserContext";

const Layout = () => {
  const {user,setUser} = useContext(UserContext);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user === true ? <Home /> : <Login />} />
        <Route path="/table" element={user === true? <List />: <Login />} />
        <Route path="/card" element={user === true? <List />: <Login />} />
      </Routes>
    </>
  )
}

export default Layout