import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Pages/Context';

export default function Navbar() {

  const ctx = useContext(MyContext);

  return (
    <div className="NavContainer">
      <Link to="/">Home</Link>
      { ctx ? (
        <>
          <Link to="/profile">Profile</Link>
          {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : null}
          <Link to="/logout">Logout</Link>
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
