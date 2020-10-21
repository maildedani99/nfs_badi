import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from './logo.png';
import avatar_navbar from './avatar_navbar.png';
import styles from './nabvar.module.css';
import {LANDING, LOGINPAGE, REGISTERPAGE, RESERVAS, PERFIL, ROOMFORM, HABITACIONES} from "../../routes/routes";
import {AuthContext} from "../../contexts/authentication/authentication.context";
import RoomsPage from "../../pages/rooms/rooms.view";

const Navbar = (props) => {

  const { state, logout } = React.useContext(AuthContext);
  const history = useHistory();
  const { search, register, login, publicRoom } = props;

  const logoutALanding = () => {
      logout();
  }


  return (
      <nav className={styles.__navbar}>
        <div className={styles.__navbar_img_div}>
          <Link to={LANDING}>
          <img className={styles.__logo} src={logo} alt="logotipo" height="40px" />
          </Link>
        </div>
        <div className={styles.__navbar_search_div}>
            {search &&
              <input className={styles.__navbar_search} type="text" placeholder="Busca tu habitación" />
            }
        </div>

        {state.isAuthenticated ?
              <div className={styles.__navbar_grouplinks_div}>
                <div className={styles.__navbar_button_div}>
                  { publicRoom &&
                      <>
                          <Link to={RESERVAS}>
                              <input className={styles.__navbar_button} type="button" value="Reservas" />
                          </Link>
                          <Link to={ROOMFORM}>
                              <input className={styles.__navbar_button} type="button" value="Publica tu habitación" />
                          </Link>
                      </>
                  }
                </div>

                  <div className={styles.__navbar_link_div}>
                      <Link value="Log out" className={styles.__navbar_link} onClick={logoutALanding} to={LANDING}>
                          Logout
                      </Link>
                  </div>
                    <Link to={PERFIL}>
                        <img src={avatar_navbar} className={styles.__avatar}/>
                    </Link>
              </div>
            :
              <div className={styles.__navbar_grouplinks_div}>
                <div className={styles.__navbar_link_div_login}>
                {login &&
                <Link className={styles.__navbar_link} to={LOGINPAGE}>Iniciar sesión</Link>
                }
                </div>

                  <div className={styles.__navbar_link_div_register}>
                      {register &&
                      <Link to={REGISTERPAGE}>
                          <input className={styles.__navbar_button_register} type="button" value="Registro" />
                      </Link>
                      }
                  </div>
              </div>
        }
      </nav>
  );
};

export default Navbar;
