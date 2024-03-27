import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Navbar/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact="true" activeclassname="active"> {/* Passer exact en tant que chaîne de caractères */}
        <div className="navbar__logo">
          <img src="logo.png" alt="Logo" />
        </div>
      </NavLink>
      <NavLink to="/" exact="true" activeclassname="active"> {/* Passer exact en tant que chaîne de caractères */}
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/more" activeclassname="active">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
