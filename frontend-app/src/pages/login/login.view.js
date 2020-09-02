import React from 'react';
import styles from './login.module.css';
import Navbar from '../../components/navbar/navbar';
import  { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <div className={styles.__login_container}>
                <div className={styles.__login_div}>
                    <h3>Inicia sesión</h3>
                    <br></br>
                    <h6>¿Aún no tienes una cuenta? Registrarme</h6>
                    <div className={styles.__login_form_div}>
                        <input className={styles.__login_input} placeholder="E-mail"></input>
                        <input className={styles.__login_input} placeholder="Contraseña"></input>
                        <input
                            className={styles.__login_input_button}
                            type="button"
                            value="Inicia sesión"
                        ></input>
                    </div>

                    <p>
                        Al entrar, acepto los <Link to="terminos"><b>Términos y condiciones de uso</b></Link> y la
                        <Link to="/politica"><b>Política de privacidad</b></Link> de Badi
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
