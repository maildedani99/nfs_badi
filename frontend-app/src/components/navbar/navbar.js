import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from './logo.png';
import styles from './nabvar.module.css';
import {LANDING, LOGINPAGE, REGISTERPAGE, ROOMFORM} from "../../routes/routes";
import {AuthContext} from "../../contexts/authentication/authentication.context";

const Navbar = (props) => {

  const { state, logout } = React.useContext(AuthContext);
  const history = useHistory();
  const { search, register, login, publicRoom } = props;

  const logoutALanding = () => {
      logout();
      history.replace(LANDING);
  }

  return (
      <nav className={styles.__navbar}>
        <div className={styles.__navbar_img_div}>
          <Link to={LANDING}>
          <img src={logo} alt="logotipo" height="40px" />
          </Link>
        </div>
        <div className={styles.__navbar_search_div}>
            {search &&
              <input className={styles.__navbar_search} type="text" placeholder="¿Donde quieres vivir?" />
            }
        </div>

        {state.isAuthenticated ?
              <div className={styles.__navbar_grouplinks_div}>
                <div className={styles.__navbar_button_div}>
                  { publicRoom &&
                  <Link to={ROOMFORM}>
                    <input className={styles.__navbar_button} type="button" value="Publica tu habitación" />
                  </Link>
                  }
                </div>

                  <div className={styles.__navbar_link_div}>
                      <Link value="Log out" className={styles.__navbar_link} onClick={logoutALanding}>
                          Logout
                      </Link>
                  </div>
              </div>
            :
              <>
                <div className={styles.__navbar_link_div}>
                {register &&
                <Link className={styles.__navbar_link} to={REGISTERPAGE}>Registro</Link>
                }
                </div>

                <div className={styles.__navbar_link_div}>
                {login &&
                <Link className={styles.__navbar_link} to={LOGINPAGE}>Iniciar sesión</Link>
                }
                </div>
            </>
        }
      </nav>
  );
};

export default Navbar;
