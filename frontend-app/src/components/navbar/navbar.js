import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './assets/logo.png';
import useResponsive from '../../hooks/useResponsive';
import avatar_navbar from './assets/avatar_navbar.png';
import styles from './nabvar.module.css';
import {
    LANDING,
    LOGINPAGE,
    REGISTERPAGE,
    RESERVAS,
    PERFIL,
    ROOMFORM,
    HABITACIONES,
} from '../../routes/routes';
import { AuthContext } from '../../contexts/authentication/authentication.context';
import RoomsPage from '../../pages/rooms/rooms.view';

const Navbar = (props) => {
    const { state, logout } = React.useContext(AuthContext);
    const history = useHistory();
    const { search, register, login, publicRoom } = props;

    const { windowSize, isDesktop, isMobile } = useResponsive();

    const logoutALanding = () => {
        logout();
    };

    return (
        <div>
            {isDesktop && (
                <>
                    <nav className={styles.__navbar}>
                        <div className={styles.__navbar_img_div}>
                            <Link to={LANDING}>
                                <img
                                    className={styles.__logo}
                                    src={logo}
                                    alt="logotipo"
                                    height="40px"
                                />
                            </Link>
                        </div>
                        <div className={styles.__navbar_search_div}>
                            {search && (
                                <input
                                    className={styles.__navbar_search}
                                    type="text"
                                    placeholder="Busca tu habitación"
                                />
                            )}
                        </div>
                        {state.isAuthenticated ? (
                            <div className={styles.__navbar_grouplinks_div}>
                                <div className={styles.__navbar_button_div}>
                                    {publicRoom && (
                                        <>
                                            <Link to={RESERVAS}>
                                                <input
                                                    className={styles.__navbar_button}
                                                    type="button"
                                                    value="Reservas"
                                                />
                                            </Link>
                                            {state.user.role === 'HOST' ? (
                                                <Link to={ROOMFORM}>
                                                    <input
                                                        className={styles.__navbar_button}
                                                        type="button"
                                                        value="Publica tu habitación"
                                                    />
                                                </Link>
                                            ) : (
                                                <div></div>
                                            )}
                                        </>
                                    )}
                                </div>

                                <div className={styles.__navbar_link_div}>
                                    <Link
                                        value="Log out"
                                        className={styles.__navbar_link}
                                        onClick={logoutALanding}
                                        to={LANDING}
                                    >
                                        Logout
                                    </Link>
                                </div>
                                <Link to={PERFIL}>
                                    <img src={avatar_navbar} className={styles.__avatar} />
                                </Link>
                            </div>
                        ) : (
                            <div className={styles.__navbar_grouplinks_div}>
                                <div className={styles.__navbar_link_div_login}>
                                    {login && (
                                        <Link className={styles.__navbar_link} to={LOGINPAGE}>
                                            Iniciar sesión
                                        </Link>
                                    )}
                                </div>

                                <div className={styles.__navbar_link_div_register}>
                                    {register && (
                                        <Link to={REGISTERPAGE}>
                                            <input
                                                className={styles.__navbar_button_register}
                                                type="button"
                                                value="Registro"
                                            />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </nav>
                </>
            )}

            {isMobile && (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light  bg-light fixed-top ">
                        <a className="navbar-brand" href="#">
                            <Link to={LANDING}>
                                <img
                                    className={styles.__logo}
                                    src={logo}
                                    alt="logotipo"
                                    height="40px"
                                />
                            </Link>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav text-center mx-auto">
                                {state.isAuthenticated ? (
                                    <>
                                        {publicRoom && (
                                            <>
                                                <li className="nav-item text-secondary">
                                                    <Link className={styles.__navbar_link}  to={RESERVAS}>
                                                        <h5 className="text-secondary">Reservas</h5>
                                                    </Link>
                                                </li>
                                                {state.user.role === 'HOST' ? (
                                                    <li className="nav-item ">
                                                        <Link className={styles.__navbar_link} to={ROOMFORM}>
                                                            <h5 className="text-secondary">Publica tu habitación</h5>
                                                        </Link>
                                                    </li>
                                                ) : (
                                                    <div></div>
                                                )}
                                            </>
                                        )}

                                        <li className="nav-item">
                                            <Link to={PERFIL}>
                                                <h5 className="text-secondary">Mi Perfil</h5>
                                            </Link>
                                            
                                        </li>
                                        <li className="nav-item">
                                        <Link
                                                className={styles.__navbar_link}
                                                onClick={logoutALanding}
                                                to={LANDING}
                                            >
                                                <h5 className="text-secondary">Logout</h5>
                                            </Link>
                                            
                                        </li>
                                    </>
                                ) : (
                                        
                                        <>
                                            {login && (
                                        <li className="nav_item">
                                        <Link className="nav-item" to={LOGINPAGE}>
                                            <h5 className="text-secondary">Inicia sesión</h5>
                                        </Link>
                                        </li>
                                            )}
                                            {register && (
                                        <li className="nav_item">
                                        <Link to={REGISTERPAGE}>
                                                <h5 className="text-secondary">Registrate</h5>
                                                        
                                        </Link>
                                        </li>    
                                                    
                                    )}
                                    </>
                                )}
                             
                            </ul>
                                <input
                                    className="form-control text-center mr-sm-2"
                                    type="search"
                                    placeholder="Busca tu habitacón"
                                    aria-label="Search"
                                />
                                
                        </div>
                    </nav>
                </>
            )}
        </div>
    );
};

export default Navbar;
