import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">Logo</a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Room</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Loquesea</a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Dropdown link
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Cosaschulas</a>
            <a className="dropdown-item" href="#">Cosasmaschulas</a>
            <a className="dropdown-item" href="#">cosasmenoschulas</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
