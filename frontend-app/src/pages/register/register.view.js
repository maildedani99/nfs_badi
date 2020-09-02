import React from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';


const RegisterForm = () => {

    return (
       <>
           <div className={styles.__login_container}>
               <div className={styles.__login_div}>
                   <h3>Registrate</h3>
                   <br></br>
                   <h6>¿Aún no tienes una cuenta? Registrarme</h6>
                   <div className={styles.__login_form_div}>
                       <input className={styles.__login_input} placeholder="Nombre "></input>
                       <input className={styles.__login_input} placeholder="Apellido "></input>
                       <input className={styles.__login_input} placeholder="E-mail "></input>
                       <input className={styles.__login_input} placeholder="Contraseña "></input>
                       <Link to="/registerpage">
                           <input className={styles.__login_input_button} type="button" value="Registrarse">
                           </input>
                       </Link>
                   </div>

                   <p>
                       Al entrar, acepto los <b>Términos y condiciones de uso</b> y la <b>Política de
                       privacidad</b> de Room
                   </p>
               </div>
           </div>


       </>
    ) ;
}

export default RegisterForm;