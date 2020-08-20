import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/habitaciones">Rooms</Link>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Disabled</a>
          </li>
        </ul>
      </nav>
      </>
  );
};

export default Navbar;
