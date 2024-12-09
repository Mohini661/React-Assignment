import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link isActive" aria-current="page">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
