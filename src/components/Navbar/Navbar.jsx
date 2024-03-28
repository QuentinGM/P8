import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../components/Navbar/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact="" activeclassname="active"> {/* Passer exact en tant que chaîne de caractères */}
        <div className="navbar__logo">
          <img src="logo.png" alt="Logo" />
        </div>
      </NavLink>
      <NavLink to="/" exact="" activeclassname="active"> {/* Passer exact en tant que chaîne de caractères */}
        <div className='size'>Accueil</div>
      </NavLink>
      <NavLink to="/more" exact="" activeclassname="active">
        <div className='size'>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
