import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Pages/Context';

export default function Navbar() {

  const ctx = useContext(MyContext);

  const logout = () => {
    axios.get("http://localhost:4000/logout", {
      withCredentials: true
    }).then((res) => {
      if (res.data === "Successfully logged out") {
        window.location.href = "/";
      }
    })
  }

  return (
    <div className="NavContainer">
      <Link to="/">Home</Link>
      { ctx ? (
        <>
          <Link to="/profile">Profile</Link>
          {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : null}
          <Link to="/logout" onClick={ logout }>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  )
}
