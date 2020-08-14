import React, { Fragment } from 'react';
import logo from './logo.png'

const Navbar = () => {
  return (
    <Fragment>

      <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <img src={logo} alt="logotipo" width="100px" />
              <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
