import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './nabvar.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.__navbar}>
        <div className={styles.__navbar_img_div}>
          <img src={logo} alt="logotipo" height="40px" />
        </div>
        <div className={styles.__navbar_search_div}>
          <input className={styles.__navbar_search} type="text" placeholder="¿Donde quieres vivir?" />
        </div>
        <div className={styles.__navbar_grouplinks_div}>
          <div className={styles.__navbar_button_div}>
            <input className={styles.__navbar_button} type="button" value="Publica tu habitación" />
          </div>
          <div className={styles.__navbar_link_div}>
            <Link className={styles.__navbar_link} to="/">Registro</Link>
          </div>
          <div className={styles.__navbar_link_div}>
            <Link className={styles.__navbar_link} to="/roomsview">Iniciar sesión</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
