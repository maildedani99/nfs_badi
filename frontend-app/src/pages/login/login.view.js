import React from 'react';
import styles from './login.module.css';

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
                        <input className={styles.__login_input_button} type="button" value="Inicia sesión"></input>
                    </div>

                    <p>
                        Al entrar, acepto los <b>Términos y condiciones de uso</b> y la <b>Política de
                        privacidad</b> de Badi
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
