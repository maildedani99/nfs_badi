import React from 'react';
import styles from './perfilUser.module.css';
import {AuthContext} from "../../contexts/authentication/authentication.context";

const PerfilUser = () => {

    const { state } = React.useContext(AuthContext);
    
    return (
        <div className={styles.__contenedor}>
            <div className={styles.__resumen}>
                {state.user.gender === 'M' ?
                    <img className={styles.__foto} src='https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' alt="foto de perfil"/>
                    :
                    <img className={styles.__foto} src='https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29388097-stock-photo-facebook-profile.jpg' alt="foto de perfil"/>
                }
                <span className={styles.__detalleResumen}>{state.user.first_name} {state.user.last_name}</span>
                <div>
                    <span>Miembro desde: </span>
                    <span>{state.user.created_at}</span>
                </div>
            </div>

            <div className={styles.__info}>
                <span className={styles.__titulo}>Email</span>
                <span className={styles.__contenido}>{state.user.email}</span>
                <span className={styles.__titulo}>Bio</span>
                <span className={styles.__contenido}>{state.user.bio || 'hola que tal'}</span>
                <span className={styles.__titulo}>Role</span>
                <span className={styles.__contenido}>{state.user.role}</span>
            </div>
        </div>
    );
};

export default PerfilUser;