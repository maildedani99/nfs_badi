import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="justify-content-center navbar navbar-expand-sm bg-light navbar-light">
        <img src={logo} alt="logotipo" width="100px" className="mx-auto" />
        <form className="form-inline mx-auto" /* action="/action_page.php" */>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <Link className="nav-link"  to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/roomsview">Rooms</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
