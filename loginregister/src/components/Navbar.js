import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Navbar() {

  const clear = () => {
    sessionStorage.clear("userid");
    sessionStorage.clear("token");
    toast.success("Logged out. Please visit again!", {autoClose:1500, theme:'colored'});
  };

  return (
    <nav className="navbar border-bottom fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/cars">Cars</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        </ul>
        <ul className="navbar-nav profile">
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item mx-3">
          <Link onClick={clear} className="nav-link" to="/">Logout</Link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
)
}

export default Navbar