import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './nabvar.module.css';

const Navbar = (props) => {

  const { search, register, login } = props;

  return (
    <>
      <nav className={styles.__navbar}>
        <div className={styles.__navbar_img_div}>
          <Link to="/">
          <img src={logo} alt="logotipo" height="40px" />
          </Link>
        </div>
          <div className={styles.__navbar_search_div}>
        {search && 
          <input className={styles.__navbar_search} type="text" placeholder="¿Donde quieres vivir?" />
        }
        </div>
          
        <div className={styles.__navbar_grouplinks_div}>
          <div className={styles.__navbar_button_div}>
            <input className={styles.__navbar_button} type="button" value="Publica tu habitación" />
          </div>
          <div className={styles.__navbar_link_div}>
            {register &&
            <Link className={styles.__navbar_link} to="/">Registro</Link>
            }
          </div>
          <div className={styles.__navbar_link_div}>
            {login && 
            <Link className={styles.__navbar_link} to="/loginpage">Iniciar sesión</Link>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
