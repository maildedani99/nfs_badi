import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav >
        <img src={logo} alt="logotipo" width="100px"  />
        <form className="form-inline mx-auto" /* action="/action_page.php" */>
          <input  type="text" placeholder="Search" />
          <button  type="submit">Search</button>
        </form>
        <ul >
          <li >
            <Link c  to="/home">Home</Link>
          </li>
          <li >
            <Link   to="/roomsview">Rooms</Link>
          </li>
          <li >
            <a  href="#">Link</a>
          </li>
          <li >
            <a  href="#">Disabled</a>
          </li>
        </ul>
      </nav>
      </>
  );
};

export default Navbar;
