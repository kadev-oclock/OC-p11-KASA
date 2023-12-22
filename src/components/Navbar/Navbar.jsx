import React from "react";
import "./Navbar.scss";

import logo from '/src/assets/img/logo.svg'; 
import { Link } from "react-router-dom";
// import "variable.scss";

function Navbar() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        {" "}
        <img className="logo__size" src={logo} alt="logo" />
      </Link>
      <nav className="nav">
        <Link className="nav__item active" to="/">
        Accueil
        </Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Navbar;
