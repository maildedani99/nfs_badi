import React, {useState} from 'react';
import styles from './register.module.css';
import { Link, useHistory } from 'react-router-dom';
import {CONECTION_API, LOGINPAGE, POLITICA, TERMINOS} from "../../routes/routes";
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
        gender: 'M',
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


    const SubmitForm = () => {
        const url = CONECTION_API + '/users';
        const body = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            username: data.username,
            password: data.password,
            role: data.role,
            gender: data.gender,
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
            .catch(error => console.log(error));
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
                               <option value={'M'} className={styles.__check_input_select} >Male</option>
                               <option value={'F'} className={styles.__check_input_select} >Female</option>
                           </select>
                       </div>

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
                        Al entrar, acepto los <Link to={TERMINOS}><b>Términos y condiciones de uso</b></Link> y la
                        <Link to={POLITICA}><b> Política de privacidad</b></Link> de Room.
                    </p>
               </div>
           </div>
       </>
    ) ;
}

export default RegisterForm;