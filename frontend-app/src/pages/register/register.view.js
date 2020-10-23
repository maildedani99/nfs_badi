import React, {useState} from 'react';
import styles from './register.module.css';
import { Link, useHistory } from 'react-router-dom';
import {LOGINPAGE} from "../../routes/routes";
import swal from "sweetalert";


const RegisterForm = () => {


    const history = useHistory();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        role: 'HOST',
    });



    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const confirmRegister = () =>  {
        swal({
                 title:'Registro Correcto',
                 text: 'Gracias',
                 icon: 'success',
                 button: 'Close'
             });
    };

    const errorRegister = (error) =>  {
        console.log(error);
        swal({
            title:'Registro Incorrecto',
            text: 'Revise los campos. Formato del email. La contraseña tiene que tener un mínimo de 6',
            icon: 'error',
            button: 'Close'
        });
    };


    const SubmitForm = () => {
        const url = 'http://localhost/api/users';
        const body = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            username: data.username,
            password: data.password,
            role: data.role,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };

        fetch(url, options)
            .then(response => {
                if (response.status === 201) {
                    confirmRegister();
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                history.push(LOGINPAGE);


            })
            .catch(error => errorRegister(error));
    };

            console.log(data);
    return (
       <>
           <div className={styles.__login_container}>
               <div className={styles.__login_div}>
                   <h3>Registrate</h3>
                   <br></br>
                   <h6>Comienza a ser parte de Roomi ahora!</h6>
                   <div className={styles.__login_form_div}>

                       <input className={styles.__login_input} name="first_name" type={'text'} placeholder="Nombre " onChange={handleInputChange}></input>
                       <input className={styles.__login_input} name="last_name" type={'text'}placeholder="Apellido "onChange={handleInputChange}></input>
                       <input className={styles.__login_input} name="username" type={'text'}placeholder="Username "onChange={handleInputChange}></input>
                       <input className={styles.__login_input} name="email" type={'text'}placeholder="E-mail "onChange={handleInputChange}></input>
                       <input className={styles.__login_input} name="password" type={'password'}placeholder="Contraseña "onChange={handleInputChange}></input>

                       <div className={styles.__check_input}>
                           <select className={styles.__check_input_option} onChange={(event) => setData({...data,role:event.target.value})}>
                               <option value={'HOST'} className={styles.__check_input_select} >Host</option>
                               <option value={'GUEST'} className={styles.__check_input_select} >Guest</option>
                           </select>
                       </div>
                       <Link to="/registerpage">
                           <input className={styles.__login_input_button} type="button" value="Registrarse" onClick={SubmitForm}>
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