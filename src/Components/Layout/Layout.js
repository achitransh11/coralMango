import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NavBar from './NavBar/NavBar';
import List from "../Pages/List/List";
import Card from '../Pages/Card/Card';
import Footer from './Footer/Footer';
import {UserContext} from "../../Context/UserContext";

const Layout = () => {
  const {user,setUser} = useContext(UserContext);
  console.log("User = ",user);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user === true ? <Home /> : <Login />} />
        <Route path="/list" element={user === true? <List />: <Login />} />
        <Route path="/card" element={user === true? <Card />: <Login />} />
        {/* <Route path="/card" element={user === true? <Card />: <Login />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default Layout