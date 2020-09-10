import React, {useState} from 'react';
import  { Link, useHistory } from 'react-router-dom';
import styles from './login.module.css';
import {LANDING, POLITICA, TERMINOS} from "../../routes/routes";
import {AuthContext} from "../../contexts/authentication/authentication.context";

const LoginPage = () => {

    const { login } = React.useContext(AuthContext);
    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const SubmitLogin = () => {
        const url = 'http://localhost/api/auth/login';
        const body = {
            email: data.email,
            password: data.password,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        fetch(url,options)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                    login(payload);
                    console.log("login ok");
                    history.replace(LANDING);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className={styles.__login_container}>
                <div className={styles.__login_div}>
                    <h3>Inicia sesión</h3>
                    <br/>
                    <h6>¿Aún no tienes una cuenta? Registrarme</h6>
                    <div className={styles.__login_form_div}>
                        <input className={styles.__login_input} name="email" type="text" placeholder="E-mail" onChange={handleInputChange}/>
                        <input className={styles.__login_input} name="password" type="password" placeholder="Contraseña" onChange={handleInputChange}/>
                        <input className={styles.__login_input_button} type="button" value="Inicia sesión" onClick={SubmitLogin}/>
                    </div>

                    <p>
                        Al entrar, acepto los <Link to={TERMINOS}><b>Términos y condiciones de uso</b></Link> y la
                        <Link to={POLITICA}><b> Política de privacidad</b></Link> de Room.
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
